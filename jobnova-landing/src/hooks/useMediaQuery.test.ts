import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
    let matchMediaMock: ReturnType<typeof vi.fn>
    let listeners: Map<string, (event: MediaQueryListEvent) => void>

    beforeEach(() => {
        listeners = new Map()

        matchMediaMock = vi.fn((query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: vi.fn((event: string, handler: (event: MediaQueryListEvent) => void) => {
                if (event === 'change') {
                    listeners.set(query, handler)
                }
            }),
            removeEventListener: vi.fn((event: string) => {
                if (event === 'change') {
                    listeners.delete(query)
                }
            }),
            dispatchEvent: vi.fn(),
        }))

        vi.stubGlobal('matchMedia', matchMediaMock)
    })

    afterEach(() => {
        vi.unstubAllGlobals()
        listeners.clear()
    })

    it('returns false initially for non-matching query', () => {
        const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))
        expect(result.current).toBe(false)
    })

    it('returns true when media query matches', () => {
        matchMediaMock.mockImplementation((query: string) => ({
            matches: true,
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }))

        const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))
        expect(result.current).toBe(true)
    })

    it('updates when media query changes', () => {
        let currentMatches = false

        matchMediaMock.mockImplementation((query: string) => ({
            matches: currentMatches,
            media: query,
            onchange: null,
            addEventListener: vi.fn((event: string, handler: (event: MediaQueryListEvent) => void) => {
                if (event === 'change') {
                    listeners.set(query, handler)
                }
            }),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }))

        const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))
        expect(result.current).toBe(false)

        // Simulate media query change
        act(() => {
            const handler = listeners.get('(min-width: 768px)')
            if (handler) {
                handler({ matches: true } as MediaQueryListEvent)
            }
        })

        expect(result.current).toBe(true)
    })

    it('cleans up event listener on unmount', () => {
        const removeEventListenerMock = vi.fn()

        matchMediaMock.mockImplementation((query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: removeEventListenerMock,
            dispatchEvent: vi.fn(),
        }))

        const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'))
        unmount()

        expect(removeEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function))
    })
})
