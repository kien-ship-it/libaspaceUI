import { useState, useEffect } from 'react'

/**
 * Custom hook that returns a boolean indicating whether the given media query matches.
 * Handles SSR by returning false when window is undefined.
 * 
 * @param query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        // Handle SSR - window is undefined on server
        if (typeof window === 'undefined') {
            return
        }

        const mediaQueryList = window.matchMedia(query)

        // Set initial value
        setMatches(mediaQueryList.matches)

        // Handler for media query changes
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        // Add listener for changes
        mediaQueryList.addEventListener('change', handleChange)

        // Cleanup listener on unmount
        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}
