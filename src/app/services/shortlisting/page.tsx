"use client";

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

const universities = [
    'National University of Singapore (NUS)',
    'University of Malaya (UM)',
    'Monash University Malaysia',
    'RMIT University Malaysia',
    'Taylor\'s University',
    'TU Munich',
    'RWTH Aachen',
    'University of Melbourne',
    'Monash University (Australia)',
    'University of Toronto',
    'Trinity College Dublin',
    'University of British Columbia',
];

export default function ShortlistingPage() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (u: string) => {
        setSelected(prev => prev.includes(u) ? prev.filter(x => x !== u) : [...prev, u]);
    };

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>University <span className="text-[#10b981]">Shortlisting</span></>}
                subtitle="Stop applying blindly. Our expert shortlisting gives you the right universities â€” matched to your profile, goals, and budget."
            />

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: 'ðŸ”', title: 'Profile Analysis', desc: 'We assess your academics, language scores, work experience, and goals.' },
                            { icon: 'ðŸŽ¯', title: 'Smart Matching', desc: 'AI-assisted + expert review to find universities where you\'ll succeed.' },
                            { icon: 'ðŸ“‹', title: 'Ranked Shortlist', desc: 'You get a ranked list of 5â€“8 universities: reach, target, and safe choices.' },
                        ].map((item) => (
                            <div key={item.title} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Build Your Shortlist</h2>
                        <p className="text-slate-500 text-sm mb-6">Select universities you are interested in. Our advisors will refine this with you.</p>
                        <div className="space-y-3">
                            {universities.map((u) => {
                                const checked = selected.includes(u);
                                return (
                                    <label key={u} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${checked ? 'border-[#10b981] bg-[#10b981]/10' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'}`}>
                                        <input type="checkbox" checked={checked} onChange={() => toggle(u)} className="accent-[#10b981] w-4 h-4" />
                                        <span className="text-white text-sm font-medium">{u}</span>
                                    </label>
                                );
                            })}
                        </div>
                        {selected.length > 0 && (
                            <div className="mt-8 p-5 rounded-xl border border-[#10b981]/30 bg-[#10b981]/10">
                                <p className="text-[#10b981] font-semibold mb-1">Selected: {selected.length} universit{selected.length === 1 ? 'y' : 'ies'}</p>
                                <p className="text-slate-500 text-sm">Book a consultation and we'll refine this shortlist with you.</p>
                            </div>
                        )}
                    </div>

                    <div className="text-center border-t border-slate-200 pt-12">
                        <Link href="/book-consultation">
                            <button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 px-10 text-base rounded-lg border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                Book Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

