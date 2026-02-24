"use client";

import { useState, useEffect } from 'react';
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

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
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

                {/* Dark Overlay Gradient */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))'
                    }}
                />

                {/* Content Layer */}
                <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-0 flex flex-col items-center">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-[1.1] animate-fade-in-up">
                        From Ambition to <br className="hidden md:block" /> <span className="text-[#10b981]">Admission.</span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        We help ambitious students secure admissions, scholarships, and visas to the world’s most respected universities — with clarity, structure, and strategy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: '0.2s' }}>
                        <Link href="#start" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white font-bold border-none shadow-xl transition-all duration-300 h-14 px-8 text-lg">
                                Start My Journey
                            </Button>
                        </Link>
                        <Link href="#eligibility" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 h-14 px-8 text-lg max-w-[300px] mx-auto sm:max-w-none">
                                Check My Eligibility
                            </Button>
                        </Link>
                    </div>

                    <p className="text-sm text-white/70 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Free strategic consultation. No obligation.
                    </p>

                    {/* Metrics Row */}
                    <div className="w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/90 font-medium whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4" />
                                <span className="text-sm sm:text-base">2,800+ Students Placed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4" />
                                <span className="text-sm sm:text-base">500+ University Pathways</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-[#10b981] h-4 w-4" />
                                <span className="text-sm sm:text-base">9 Countries</span>
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

            {/* Trusted By Moving Strip */}
            <div className="bg-white py-4 overflow-hidden border-b border-gray-100 flex items-center relative z-10 w-full">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scrollLeftStrip {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-strip {
                        animation: scrollLeftStrip 25s linear infinite;
                        width: max-content;
                        display: flex;
                    }
                `}} />
                <div className="animate-scroll-strip">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8 px-4 items-center text-sm sm:text-base font-bold tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap">
                            <span>Trusted by students admitted to</span>
                            <span className="text-gray-900">TU Munich</span>
                            <span>•</span>
                            <span className="text-gray-900">NUS Singapore</span>
                            <span>•</span>
                            <span className="text-gray-900">University of Malaya</span>
                            <span>•</span>
                            <span className="text-gray-900">RWTH Aachen</span>
                            <span>•</span>
                            <span className="text-gray-900">Trinity College</span>
                            <span>•</span>
                            <span className="text-gray-900">University of Toronto</span>
                            <span>•</span>
                            <span className="text-gray-900">Monash University</span>
                            <span>•</span>
                            <span className="text-gray-900">National University of Ireland</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
