"use client";

import { useEffect, useState } from "react";

export function LoadingSplash() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fading out after 400ms
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 500);

        // Completely unmount after 800ms
        const unmountTimer = setTimeout(() => {
            setIsVisible(false);
        }, 800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F1A] transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="animate-pulse-subtle flex items-center justify-center w-24 h-24 bg-[#0B0F1A] rounded-3xl" style={{ boxShadow: '0 0 40px rgba(166, 243, 75, 0.05)' }}>
                <span className="text-7xl font-extrabold text-[#A6F34B]" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
                    g
                </span>
            </div>
        </div>
    );
}
