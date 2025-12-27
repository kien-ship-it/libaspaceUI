"use client";

import Image from "next/image";
import { MenuIcon, AISparkleIcon } from "@/components/icons";

interface MobileHeaderProps {
    onMenuClick: () => void;
    onAiClick: () => void;
}

export function MobileHeader({ onMenuClick, onAiClick }: MobileHeaderProps) {
    return (
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-surface-primary border-b border-border-default">
            {/* Menu button on left */}
            <button
                onClick={onMenuClick}
                className="p-2 rounded-[var(--radius-sm)] hover:bg-surface-page transition-colors"
                aria-label="Open navigation menu"
            >
                <MenuIcon className="w-6 h-6 text-content-primary" />
            </button>

            {/* Logo in center */}
            <Image
                src="/images/jobnova.svg"
                alt="JobNova"
                width={120}
                height={40}
                className="object-contain"
                priority
            />

            {/* AI button on right */}
            <button
                onClick={onAiClick}
                className="p-2 rounded-[var(--radius-sm)] hover:bg-surface-page transition-colors"
                aria-label="Open AI panel"
            >
                <AISparkleIcon className="w-6 h-6 text-content-primary" />
            </button>
        </header>
    );
}
