"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg",
    "/images/hero6.jpg",
];

const universities = [
    { name: "TU Munich", logo: "https://logo.clearbit.com/tum.de" },
    { name: "NUS Singapore", logo: "https://logo.clearbit.com/nus.edu.sg" },
    { name: "Univ. of Melbourne", logo: "https://logo.clearbit.com/unimelb.edu.au" },
    { name: "Univ. of Toronto", logo: "https://logo.clearbit.com/utoronto.ca" },
    { name: "RWTH Aachen", logo: "https://logo.clearbit.com/rwth-aachen.de" },
];

const duplicatedUniversities = [...universities, ...universities, ...universities, ...universities];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const rAF = useRef<number | null>(null);

    // Hero background slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Marquee continuous right to left logic
    useEffect(() => {
        let offset = 0;
        const ITEM_WIDTH = 260; // Approximate card width + gap tracking
        const totalPixels = universities.length * ITEM_WIDTH;

        const animate = () => {
            offset -= 1.2; // Speed of motion Right -> Left
            // Seamless wrap around when one full original set is off-screen
            if (offset <= -totalPixels) {
                offset += totalPixels;
            }

            if (trackRef.current) {
                const containerWidth = trackRef.current.clientWidth;
                const containerCenter = containerWidth / 2;
                const children = trackRef.current.children;

                for (let i = 0; i < children.length; i++) {
                    const child = children[i] as HTMLElement;
                    // X position relative to track
                    const baseItemX = (i * ITEM_WIDTH) + offset;
                    // Center point of this specific item
                    const itemCenter = baseItemX + (ITEM_WIDTH / 2);

                    // Distance from the exact center of the container
                    const dist = Math.abs(containerCenter - itemCenter);

                    // Factor calculations for scale and blur
                    const centerFactor = Math.max(0, 1 - dist / (ITEM_WIDTH * 1.5));

                    const scale = 0.90 + (0.25 * centerFactor); // Scale between 0.90 to 1.15
                    const blur = 6 - (6 * centerFactor); // Blur between 6px to 0px
                    const opacity = 0.5 + (0.5 * centerFactor); // Opacity 0.5 to 1
                    const zIndex = Math.round(10 * centerFactor);

                    child.style.transform = `translate(${baseItemX}px, -50%) scale(${scale})`;
                    child.style.filter = `blur(${blur}px)`;
                    child.style.opacity = opacity.toString();
                    child.style.zIndex = zIndex.toString();
                }
            }
            rAF.current = requestAnimationFrame(animate);
        };

        rAF.current = requestAnimationFrame(animate);
        return () => {
            if (rAF.current) cancelAnimationFrame(rAF.current);
        };
    }, []);

    return (
        <>
            <section className="hero">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hero {
                        position: relative;
                        height: 100vh;
                        overflow: hidden;
                    }

                    .slide {
                        position: absolute;
                        inset: 0;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: 0;
                        transform: scale(1);
                        transition: opacity 1.3s ease-in-out, transform 2s ease-out;
                        z-index: 0;
                    }

                    .slide.active {
                        opacity: 1;
                        transform: scale(1.04);
                    }
                `}} />

                {heroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}

                {/* Dark Overlay Gradient — boosted for readability */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.40) 40%, rgba(0,0,0,0.70) 100%)'
                    }}
                />

                {/* Content Layer — pushed below the floating navbar */}
                <div className="relative z-[2] w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                    style={{ paddingTop: 'clamp(88px, 10vh, 120px)' }}
                >

                    {/* TWO-LINE HEADLINE */}
                    <h1
                        className="animate-fade-in-up mb-4 text-white"
                        style={{
                            fontFamily: 'var(--font-jakarta), var(--font-inter), sans-serif',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.05,
                            fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                        }}
                    >
                        From Ambition<br />
                        To{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >Admission.</span>
                    </h1>

                    {/* THREE-WORD TAGLINE */}
                    <p
                        className="animate-fade-in-up mb-10"
                        style={{
                            animationDelay: '0.1s',
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.45)',
                        }}
                    >
                        Clarity.&nbsp;&nbsp;Strategy.&nbsp;&nbsp;Success.
                    </p>

                    {/* CTA BUTTONS — centered */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Link href="#start">
                            <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white font-bold border-none shadow-xl transition-all duration-300 h-14 px-8 text-lg hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] min-w-[200px]">
                                Start My Journey
                            </Button>
                        </Link>
                        <Link href="#eligibility">
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 h-14 px-8 text-lg min-w-[200px]">
                                Check My Eligibility
                            </Button>
                        </Link>
                    </div>

                    <p className="text-xs text-white/45 mb-10 animate-fade-in-up tracking-wider uppercase" style={{ animationDelay: '0.3s' }}>
                        Free strategic consultation &nbsp;·&nbsp; No obligation
                    </p>

                    {/* Metrics Row — centered */}
                    <div className="w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/80 font-medium whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">2,800+ Students Placed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">500+ University Pathways</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">9 Countries</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smooth Rounded Bottom Curve */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
                    <svg
                        viewBox="0 0 1440 100"
                        className="block w-full h-[60px] md:h-[100px]"
                        preserveAspectRatio="none"
                        style={{ filter: "drop-shadow(0px -4px 10px rgba(0,0,0,0.1))" }}
                    >
                        <path d="M0,100 C360,0 1080,0 1440,100 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ── TRUSTED UNIVERSITIES SHOWCASE ── */}
            <div className="bg-white pt-8 pb-12 overflow-hidden relative border-b border-gray-100">
                <div className="text-center mb-10 relative z-10 w-full max-w-lg mx-auto bg-white" style={{ isolation: 'isolate' }}>
                    <p className="text-[0.625rem] font-bold tracking-[0.22em] uppercase text-slate-400">
                        Trusted by students admitted to
                    </p>
                </div>

                <div
                    ref={trackRef}
                    className="relative w-full mx-auto h-[140px] flex items-center overflow-hidden"
                    style={{ maxWidth: '1440px' }}
                >
                    {/* Ghost mask to fade edges */}
                    <div className="absolute inset-0 z-20 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)' }}
                    />

                    {duplicatedUniversities.map((uni, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 left-0 will-change-transform pointer-events-none"
                            style={{
                                width: '260px',
                                // Initial setup handled by requestAnimationFrame immediately
                                opacity: 0,
                            }}
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-4 sm:p-6 mx-auto w-[180px] sm:w-[220px] flex flex-col items-center justify-center gap-4 transition-none">
                                <div className="h-[40px] sm:h-[50px] flex items-center justify-center w-full relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="h-full w-auto object-contain max-w-[120px] sm:max-w-[150px]"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">
                                    {uni.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
