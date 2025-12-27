"use client";

import { useEffect, useRef, useCallback } from "react";

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position: "left" | "right";
    children: React.ReactNode;
    ariaLabel: string;
}

/**
 * A reusable Drawer component that slides in from the left or right side of the screen.
 * 
 * Features:
 * - Slide-in animation from left or right based on position prop
 * - Semi-transparent backdrop when open
 * - Scroll lock on body when open
 * - ARIA attributes for accessibility
 * - ESC key and backdrop click to close
 * - Focus management (returns focus to trigger on close)
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7
 */
export function Drawer({
    isOpen,
    onClose,
    position,
    children,
    ariaLabel,
}: DrawerProps) {
    const drawerRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Store the previously focused element when drawer opens
    useEffect(() => {
        if (isOpen) {
            previousActiveElement.current = document.activeElement as HTMLElement;
        }
    }, [isOpen]);

    // Handle ESC key press to close drawer (Requirement 3.5)
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        },
        [isOpen, onClose]
    );

    // Add/remove ESC key listener
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [isOpen, handleKeyDown]);

    // Apply scroll lock when drawer is open (Requirement 3.6)
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen]);

    // Return focus to trigger element on close (Requirement 1.3, 2.3)
    useEffect(() => {
        if (!isOpen && previousActiveElement.current) {
            previousActiveElement.current.focus();
        }
    }, [isOpen]);

    // Focus the drawer when it opens for accessibility
    useEffect(() => {
        if (isOpen && drawerRef.current) {
            drawerRef.current.focus();
        }
    }, [isOpen]);

    // Handle click outside drawer panel to close (Requirement 3.4)
    const handleContainerClick = useCallback(
        (event: React.MouseEvent) => {
            // Close if click is outside the drawer panel
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                onClose();
            }
        },
        [onClose]
    );

    if (!isOpen) {
        return null;
    }

    // Position-based styles (Requirements 3.1, 3.2)
    const positionStyles = {
        left: "left-0",
        right: "right-0",
    };

    const slideAnimation = {
        left: "animate-slide-in-left",
        right: "animate-slide-in-right",
    };

    return (
        <div
            ref={drawerRef}
            className="fixed inset-0 z-50"
            onClick={handleContainerClick}
            data-testid="drawer-container"
        >
            {/* Backdrop (Requirement 3.3) */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity"
                data-testid="drawer-backdrop"
                aria-hidden="true"
            />

            {/* Drawer Panel */}
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                tabIndex={-1}
                className={`
          fixed top-0 ${positionStyles[position]} h-full
          bg-surface-primary shadow-lg
          ${slideAnimation[position]}
          focus:outline-none
        `}
                data-testid="drawer-panel"
                data-position={position}
            >
                {children}
            </div>
        </div>
    );
}
