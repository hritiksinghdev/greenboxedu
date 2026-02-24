"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import HeroMap from '@/components/home/HeroMap';

const destinations = [
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

export default function HeroSection() {
    return (
        <section
            className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 text-white min-h-[90vh] flex items-center"
            style={{ background: 'linear-gradient(115deg, #0B0F1A 0%, #0E1625 30%, #0F3D2E 60%, #09281F 100%)' }}
        >

            {/* Very subtle world map texture background */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',
                }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

                    {/* Left Side: Content */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:max-w-[650px] pointer-events-auto animate-fade-in-up z-20 shrink-0">
                        <div className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white/90 mb-6 backdrop-blur-md text-sm font-medium shadow-sm">
                            Eligibility Assessment • University Shortlisting • Visa & Application Support
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
                            Your Global Education.<br className="hidden md:block" /> Designed With Precision.
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 font-light leading-relaxed">
                            Strategic Admissions Guidance for Singapore, Malaysia, Germany & 8+ Global Destinations.
                        </p>

                        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 mb-12">
                            <Link href="#eligibility" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-primary font-bold border-none shadow-xl transition-all duration-300">
                                    Check My Eligibility →
                                </Button>
                            </Link>
                            <Link href="/book-consultation" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                                    Book Consultation
                                </Button>
                            </Link>
                        </div>

                        {/* Animated Trust Strip */}
                        <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-sm text-white/90 font-medium">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold h-4 w-4" />
                                    <span>2,800+ Students Guided</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold h-4 w-4" />
                                    <span>500+ University Pathways</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold h-4 w-4" />
                                    <span>Dedicated Visa Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold h-4 w-4" />
                                    <span>8+ Study Destinations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Interactive World Map Interface */}
                    <div className="hidden lg:flex w-full lg:w-[55%] min-w-[600px] relative items-center justify-center pointer-events-auto pr-8 animate-fade-in-up scale-110 -ml-8 lg:-translate-x-4 shrink-0 z-0" style={{ animationDelay: '0.2s' }}>
                        <HeroMap />
                    </div>

                </div>

                {/* Mobile Only: Simple Destination List (replaces map on small screens) */}
                <div className="lg:hidden w-full flex flex-col gap-3 animate-fade-in-up mt-8 pointer-events-auto" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Popular Destinations</h3>
                    {destinations.slice(0, 5).map((dest) => (
                        <Link key={dest.id} href={`/study-in-${dest.id}`} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                            <span className="font-medium text-white">{dest.name}</span>
                            <ArrowRight className="w-4 h-4 text-white/50" />
                        </Link>
                    ))}
                    <Link href="/destinations" className="text-center text-sm text-gold font-medium mt-2">
                        View all 9 destinations →
                    </Link>
                </div>
            </div>

            {/* Sticky Mobile CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#09281F]/90 backdrop-blur-md border-t border-white/10 z-50 transform translate-y-0 transition-transform">
                <Link href="#eligibility" className="block w-full">
                    <Button size="lg" className="w-full bg-gold hover:bg-gold-light text-primary font-bold border-none shadow-xl">
                        Check Eligibility
                    </Button>
                </Link>
            </div>

        </section>
    );
}
