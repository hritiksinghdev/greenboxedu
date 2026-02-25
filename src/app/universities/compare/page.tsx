"use client";

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

const universities = [
    { id: 1, name: 'National University of Singapore (NUS)', country: 'Singapore', tuition: 'SGD 28,000/yr', ranking: '#8 World', duration: '3â€“4 years', intake: 'Aug' },
    { id: 2, name: 'Nanyang Technological University (NTU)', country: 'Singapore', tuition: 'SGD 26,000/yr', ranking: '#26 World', duration: '3â€“4 years', intake: 'Aug' },
    { id: 3, name: 'University of Malaya (UM)', country: 'Malaysia', tuition: 'MYR 35,000/yr', ranking: '#65 World', duration: '3â€“4 years', intake: 'Sep/Feb' },
    { id: 4, name: 'Monash University Malaysia', country: 'Malaysia', tuition: 'MYR 45,000/yr', ranking: 'Top 80 World', duration: '3â€“4 years', intake: 'Feb/Jul' },
    { id: 5, name: 'TU Munich', country: 'Germany', tuition: 'â‚¬ 0â€“1,500/sem', ranking: '#37 World', duration: '2 years (MSc)', intake: 'Oct/Apr' },
    { id: 6, name: 'RWTH Aachen', country: 'Germany', tuition: 'â‚¬ 0â€“1,500/sem', ranking: 'Top 100 World', duration: '2 years (MSc)', intake: 'Oct' },
    { id: 7, name: 'University of Melbourne', country: 'Australia', tuition: 'AUD 36,000/yr', ranking: '#33 World', duration: '3â€“4 years', intake: 'Feb/Jul' },
    { id: 8, name: 'Monash University', country: 'Australia', tuition: 'AUD 32,000/yr', ranking: 'Top 60 World', duration: '3â€“4 years', intake: 'Feb/Jul' },
    { id: 9, name: 'University of Toronto', country: 'Canada', tuition: 'CAD 28,000/yr', ranking: '#21 World', duration: '4 years', intake: 'Sep' },
    { id: 10, name: 'Trinity College Dublin', country: 'Ireland', tuition: 'â‚¬ 16,000/yr', ranking: 'Top 100 World', duration: '3â€“4 years', intake: 'Sep' },
];

export default function CompareUniversitiesPage() {
    const [selected, setSelected] = useState<number[]>([]);

    const toggle = (id: number) => {
        setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id].slice(0, 5));
    };

    const compared = universities.filter(u => selected.includes(u.id));

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Compare"
                title={<>Compare <span className="text-[#10b981]">Universities</span></>}
                subtitle="Select up to 5 universities to compare side-by-side across tuition, ranking, country, duration, and intake."
            />

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-white mb-6">Select Universities (max 5)</h2>
                    <div className="space-y-3 mb-12">
                        {universities.map((u) => {
                            const isSelected = selected.includes(u.id);
                            return (
                                <label key={u.id} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-[#10b981] bg-[#10b981]/10' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'}`}>
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggle(u.id)}
                                        className="accent-[#10b981] w-4 h-4"
                                    />
                                    <div className="flex-1">
                                        <p className="text-white font-medium">{u.name}</p>
                                        <p className="text-slate-500 text-sm">{u.country} Â· {u.ranking}</p>
                                    </div>
                                </label>
                            );
                        })}
                    </div>

                    {compared.length >= 2 && (
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6">Comparison Table</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-white shadow-sm border-b border-slate-200">
                                            <th className="text-left px-5 py-4 text-slate-500 uppercase tracking-wider text-xs">Criteria</th>
                                            {compared.map(u => (
                                                <th key={u.id} className="text-left px-5 py-4 text-white font-semibold text-sm">{u.name.split('(')[0].trim()}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        {(['country', 'tuition', 'ranking', 'duration', 'intake'] as const).map(field => (
                                            <tr key={field} className="hover:bg-white shadow-sm transition-colors">
                                                <td className="px-5 py-4 text-slate-500 capitalize font-medium">{field}</td>
                                                {compared.map(u => (
                                                    <td key={u.id} className="px-5 py-4 text-white">{u[field]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="text-slate-500 mb-4">Ready to apply to one of these universities?</p>
                                <Link href="/book-consultation">
                                    <button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 px-10 text-base rounded-lg border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                        Book Free Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {compared.length < 2 && selected.length > 0 && (
                        <p className="text-white/40 text-center text-sm">Select at least 2 universities to see the comparison.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

