"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { WorldMapSvg } from './WorldMapSvg';

type Destination = {
    name: string;
    id: string;
    top: string;
    left: string;
    popupPosition: 'top' | 'bottom' | 'left' | 'right';
};

const destinations: Destination[] = [
    { name: 'Canada', id: 'canada', top: '25%', left: '22%', popupPosition: 'right' },
    { name: 'USA', id: 'usa', top: '35%', left: '23%', popupPosition: 'right' },
    { name: 'UK', id: 'uk', top: '23%', left: '47.5%', popupPosition: 'bottom' },
    { name: 'Ireland', id: 'ireland', top: '23.5%', left: '45.5%', popupPosition: 'bottom' },
    { name: 'Germany', id: 'germany', top: '25%', left: '51%', popupPosition: 'bottom' },
    { name: 'Singapore', id: 'singapore', top: '57%', left: '76.5%', popupPosition: 'left' },
    { name: 'Malaysia', id: 'malaysia', top: '55%', left: '75.5%', popupPosition: 'left' },
    { name: 'Australia', id: 'australia', top: '78%', left: '86%', popupPosition: 'top' },
    { name: 'New Zealand', id: 'new-zealand', top: '85%', left: '92%', popupPosition: 'top' },
];

export default function HeroMap() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseLeaveMap = () => {
        hideTimeout.current = setTimeout(() => {
            setActiveNode(null);
        }, 300);
    };

    const handleMouseEnterMap = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
    };

    return (
        <div
            className="relative w-full aspect-[1.97] map-container pointer-events-auto"
            onMouseLeave={handleMouseLeaveMap}
            onMouseEnter={handleMouseEnterMap}
            style={{
                maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
            }}
        >
            {/* Crisp Vector World Map */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-90">
                <WorldMapSvg className="w-full h-full" />
            </div>

            {/* Interactive Pins */}
            <div className="absolute inset-0 z-10">
                {destinations.map((dest) => {
                    const isActive = activeNode === dest.id;

                    return (
                        <div
                            key={dest.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                            style={{ top: dest.top, left: dest.left, zIndex: isActive ? 50 : 20 }}
                        >
                            {/* Node Wrapper (Hitbox) */}
                            <div
                                className="relative flex items-center justify-center w-10 h-10 group map-node-wrapper"
                                onMouseEnter={() => {
                                    if (hideTimeout.current) clearTimeout(hideTimeout.current);
                                    setActiveNode(dest.id);
                                }}
                                onClick={() => setActiveNode(dest.id)}
                            >
                                {/* Premium Crisp Geometric Dot (8px inner + 2px border = 12px total, no glow/blur) */}
                                <div
                                    className={`relative w-[12px] h-[12px] bg-white rounded-full transition-all duration-300 ${isActive ? 'scale-125' : 'animate-pulse-subtle'}`}
                                    style={{ border: '2px solid rgba(15, 61, 46, 0.9)', boxShadow: 'none' }}
                                ></div>

                                {/* Premium Glassmorphism Popup Card */}
                                {isActive && (
                                    <div
                                        className="absolute transition-all duration-300 w-[220px] pointer-events-auto opacity-100 visible z-50"
                                        style={{
                                            ...(dest.popupPosition === 'top' && { bottom: '100%', left: '50%', transform: 'translate(-50%, -12px)', paddingBottom: '12px' }),
                                            ...(dest.popupPosition === 'bottom' && { top: '100%', left: '50%', transform: 'translate(-50%, 12px)', paddingTop: '12px' }),
                                            ...(dest.popupPosition === 'left' && { right: '100%', top: '50%', transform: 'translate(-12px, -50%)', paddingRight: '12px' }),
                                            ...(dest.popupPosition === 'right' && { left: '100%', top: '50%', transform: 'translate(12px, -50%)', paddingLeft: '12px' }),
                                        }}
                                    >
                                        <div className="bg-[#0a2b20]/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl relative">
                                            <h4 className="text-white font-bold text-[16px] mb-1">{dest.name}</h4>
                                            <p className="text-[12px] text-white/70 leading-relaxed mb-3">
                                                Explore study pathways & visa guidance.
                                            </p>
                                            <Link href={`/study-in-${dest.id}`} className="block w-full">
                                                <Button size="sm" className="w-full bg-white text-[#0F3D2E] hover:bg-gray-100 font-semibold text-xs h-8">
                                                    Explore Pathway <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                                </Button>
                                            </Link>

                                            {/* Arrow Indicators */}
                                            {dest.popupPosition === 'top' && (
                                                <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#0a2b20]/95"></div>
                                            )}
                                            {dest.popupPosition === 'bottom' && (
                                                <div className="absolute bottom-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-[#0a2b20]/95"></div>
                                            )}
                                            {dest.popupPosition === 'left' && (
                                                <div className="absolute top-1/2 left-[calc(100%-1px)] -translate-y-1/2 border-[6px] border-transparent border-l-[#0a2b20]/95"></div>
                                            )}
                                            {dest.popupPosition === 'right' && (
                                                <div className="absolute top-1/2 right-[calc(100%-1px)] -translate-y-1/2 border-[6px] border-transparent border-r-[#0a2b20]/95"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
