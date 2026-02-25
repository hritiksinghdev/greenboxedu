"use client";

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rahul S.",
        country: "Germany",
        program: "MSc Informatik, TU Munich",
        quote: "Green Box made the impossible possible. Their precision in sorting out my German public university application and blocked account saved me months of stress.",
        image: "https://ui-avatars.com/api/?name=Rahul+S&background=C6A75E&color=fff",
    },
    {
        name: "Priya M.",
        country: "Singapore",
        program: "Master of Finance, NUS",
        quote: "From profiling to visa, their process is incredibly transparent. Getting into NUS felt seamless with their expert counselors backing every step.",
        image: "https://ui-avatars.com/api/?name=Priya+M&background=0F3D2E&color=fff",
    },
    {
        name: "Anand K.",
        country: "Australia",
        program: "Master of Data Science, UniMelb",
        quote: "Their pre-departure briefing was a lifesaver. I landed in Melbourne already knowing how to handle my accommodation and bank setup.",
        image: "https://ui-avatars.com/api/?name=Anand+K&background=0F3D2E&color=fff",
    },
    {
        name: "Sarah T.",
        country: "UK",
        program: "Msc Business Analytics, Imperial",
        quote: "The strategic counseling I received was unmatched. They helped me highlight my strengths properly which got me accepted into my dream program in London.",
        image: "https://ui-avatars.com/api/?name=Sarah+T&background=C6A75E&color=fff",
    },
    {
        name: "David L.",
        country: "Canada",
        program: "MEng Computer Engineering, UofT",
        quote: "I was overwhelmed by the visa regulations, but Green Box handled everything with absolute professionalism. I felt supported throughout the entire journey.",
        image: "https://ui-avatars.com/api/?name=David+L&background=0F3D2E&color=fff",
    },
    {
        name: "Elena M.",
        country: "USA",
        program: "MS Computer Science, Georgia Tech",
        quote: "Their university shortlisting was spot on. They didn't just give me the top generic schools, but the ones perfectly suited to my research profile and funding needs.",
        image: "https://ui-avatars.com/api/?name=Elena+M&background=C6A75E&color=fff",
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
                    <p className="text-lg text-gray-600">Don't take our word for it. Here is what our successfully placed students have to say.</p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto h-[320px] flex items-center justify-center">
                    {testimonials.map((testimonial, idx) => {
                        let position = idx - currentIndex;
                        if (position < -1) position += testimonials.length;
                        if (position > 1) position -= testimonials.length;

                        const isVisible = Math.abs(position) <= 1;

                        let translateX = "0%";
                        let scale = "scale(1)";
                        let opacity = 0;
                        let zIndex = 0;

                        if (position === 0) {
                            translateX = "0%";
                            scale = "scale(1)";
                            opacity = 1;
                            zIndex = 20;
                        } else if (position === -1) {
                            translateX = "-100%";
                            scale = "scale(0.85)";
                            opacity = 0;
                            zIndex = 10;
                        } else if (position === 1) {
                            translateX = "100%";
                            scale = "scale(0.85)";
                            opacity = 0;
                            zIndex = 10;
                        }

                        return (
                            <div
                                key={idx}
                                className="absolute top-0 w-full transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(${translateX}) ${scale}`,
                                    opacity: isVisible ? opacity : 0,
                                    zIndex: zIndex,
                                    pointerEvents: position === 0 ? 'auto' : 'none'
                                }}
                            >
                                <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative flex flex-col h-full max-w-2xl mx-auto">
                                    <div className="text-primary/10 text-6xl font-serif absolute -top-4 left-6">"</div>
                                    <p className="text-gray-700 text-lg md:text-xl italic relative z-10 mb-8 pt-4 leading-relaxed font-normal">"{testimonial.quote}"</p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full shadow-sm ring-2 ring-gray-50" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 tracking-wide">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 mt-1">{testimonial.program} • <span className="text-primary font-semibold">{testimonial.country}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
