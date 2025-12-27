"use client";

import { useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { Drawer } from "./Drawer";

interface AppShellProps {
    children: React.ReactNode;
    aiPanel?: React.ReactNode;
}

/**
 * AppShell component that manages the responsive layout for the application.
 * 
 * Features:
 * - Manages isSidebarOpen and isAiOpen state internally (Requirement 5.1)
 * - Renders Sidebar inline on desktop, in left Drawer on mobile (Requirements 1.1, 1.4)
 * - Renders AI Panel inline on desktop, in right Drawer on mobile (Requirements 2.1, 2.4)
 * - Renders MobileHeader on mobile only (Requirements 6.1, 6.2, 6.3, 6.4)
 * - Preserves existing Sidebar and AI Panel components without modification (Requirement 5.3)
 */
export function AppShell({ children, aiPanel }: AppShellProps) {
    // Internal state management (Requirement 5.1)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAiOpen, setIsAiOpen] = useState(false);

    // Detect desktop breakpoint (md = 768px)
    const isDesktop = useMediaQuery("(min-width: 768px)");

    // Handlers for drawer toggles
    const handleMenuClick = useCallback(() => {
        setIsSidebarOpen(true);
    }, []);

    const handleAiClick = useCallback(() => {
        setIsAiOpen(true);
    }, []);

    const handleSidebarClose = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);

    const handleAiClose = useCallback(() => {
        setIsAiOpen(false);
    }, []);

    return (
        <div className="min-h-screen bg-surface-page">
            {/* Mobile Header - visible only on mobile (Requirements 6.1, 6.2, 6.3, 6.4) */}
            {!isDesktop && (
                <MobileHeader
                    onMenuClick={handleMenuClick}
                    onAiClick={aiPanel ? handleAiClick : () => { }}
                />
            )}

            {/* Desktop Sidebar - visible only on desktop (Requirement 1.4) */}
            {isDesktop && <Sidebar />}

            {/* Mobile Sidebar Drawer - visible only on mobile when open (Requirement 1.1, 1.2) */}
            {!isDesktop && (
                <Drawer
                    isOpen={isSidebarOpen}
                    onClose={handleSidebarClose}
                    position="left"
                    ariaLabel="Navigation menu"
                >
                    <Sidebar />
                </Drawer>
            )}

            {/* Mobile AI Panel Drawer - visible only on mobile when open (Requirement 2.1, 2.2) */}
            {!isDesktop && aiPanel && (
                <Drawer
                    isOpen={isAiOpen}
                    onClose={handleAiClose}
                    position="right"
                    ariaLabel="AI analysis panel"
                >
                    <div className="w-[290px] h-full overflow-y-auto p-4">
                        {aiPanel}
                    </div>
                </Drawer>
            )}

            {/* Main content area with responsive layout (Requirements 4.1, 4.2, 4.3, 4.4) */}
            <main
                className={`
                    ${isDesktop ? "ml-[var(--spacing-sidebar-width)]" : "ml-0"}
                    p-[var(--spacing-page-y)]
                    ${isDesktop ? "pr-[20px]" : "px-4"}
                    overflow-x-hidden
                `}
            >
                {/* Three-column layout on desktop (Requirement 4.3), full width on mobile (Requirements 4.1, 4.2) */}
                <div className={`flex ${isDesktop ? "gap-[20px]" : "flex-col"} max-w-full`}>
                    {/* Main content - full width on mobile (no sidebar margin), flex-1 on desktop */}
                    <div className={`${isDesktop ? "flex-1 max-w-[893px]" : "w-full"} min-w-0`}>
                        {children}
                    </div>

                    {/* Desktop AI Panel - visible only on desktop (Requirement 2.4) */}
                    {isDesktop && aiPanel && (
                        <div className="w-[290px] shrink-0">
                            {aiPanel}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
