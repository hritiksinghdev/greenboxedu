"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Landmark, Briefcase, FileCheck, Users, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
    {
        title: "Expert Counseling",
        description: "Personalized guidance to match your career goals with the right program.",
        icon: GraduationCap,
        modalDescription: "Our expert counselors work 1-on-1 with you to identify your strengths, career aspirations, and optimal study destinations. We go beyond generic advice to provide a tailored roadmap to success.",
        primaryAction: { label: "Book Consultation", href: "#start" },
    },
    {
        title: "University Shortlisting",
        description: "Data-driven selection of top-tier universities in Singapore, Malaysia & Germany.",
        icon: Landmark,
        modalDescription: "Stop guessing your chances. We use historical admission data and strong university networks to shortlist programs where you have the highest probability of acceptance.",
        primaryAction: { label: "Book Consultation", href: "#start" },
        secondaryAction: { label: "View Destinations", href: "#destinations" },
    },
    {
        title: "Visa Guidance",
        description: "99% visa success rate with our meticulous documentation review process.",
        icon: FileCheck,
        modalDescription: "Say goodbye to visa anxiety. Our specialized team handles your mock interviews, financial documentation checks, and complete visa application filing with precision.",
        primaryAction: { label: "Book Consultation", href: "#start" },
    },
    {
        title: "Scholarship Assistance",
        description: "Maximize your chances of securing merit and need-based financial aid.",
        icon: Briefcase,
        modalDescription: "We help you identify hidden scholarship opportunities and craft compelling essays to secure funding, significantly reducing the financial burden of studying abroad.",
        primaryAction: { label: "Book Consultation", href: "#start" },
        secondaryAction: { label: "Go to Scholarship Page", href: "/services/scholarship-guidance" },
    },
    {
        title: "Pre-Departure Support",
        description: "Accommodation booking, forex, and travel arrangements made easy.",
        icon: Users,
        modalDescription: "Travel with absolute peace of mind. We connect you with verified accommodation providers, optimal forex rates, and arrange your airport pickup so you can focus on your studies.",
        primaryAction: { label: "Book Consultation", href: "#start" },
    },
    {
        title: "Alumni Network",
        description: "Connect with current students and alumni in your target country.",
        icon: ShieldCheck,
        modalDescription: "Gain immediate access to our expanding global alumni network. Learn from their experiences, get local tips, and build your professional connections before you even arrive.",
        primaryAction: { label: "Book Consultation", href: "#start" },
    }
];

export default function WhyChooseUsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Clean body scroll locking to prevent jumping
    useEffect(() => {
        if (activeIndex !== null) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [activeIndex]);

    return (
        <section className="py-24 bg-white relative">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes modalPopup {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-modal {
                    animation: modalPopup 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Green Box</h2>
                    <p className="text-lg text-gray-600">
                        We don't just process applications; we engineer your entire international career pathway.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                            <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more <span>&rarr;</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Modal Popup */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 w-screen h-screen">
                    {/* Subtle Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] transition-opacity duration-300"
                        onClick={() => setActiveIndex(null)}
                    />

                    {/* Modal Content - Centered firmly with scale animation */}
                    <div
                        className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 animate-modal"
                    >
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            {(() => {
                                const Icon = features[activeIndex].icon;
                                return <Icon className="w-7 h-7" />;
                            })()}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[activeIndex].title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {features[activeIndex].modalDescription}
                        </p>

                        <div className="flex flex-col gap-3">
                            <Link href={features[activeIndex].primaryAction.href} onClick={() => setActiveIndex(null)}>
                                <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 rounded-xl">
                                    {features[activeIndex].primaryAction.label}
                                </Button>
                            </Link>

                            {features[activeIndex].secondaryAction && (
                                <Link
                                    href={features[activeIndex].secondaryAction.href}
                                    onClick={() => setActiveIndex(null)}
                                    className="text-center w-full py-3 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    {features[activeIndex].secondaryAction.label} &rarr;
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
