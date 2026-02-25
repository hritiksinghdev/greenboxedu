import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const universities = [
    { name: 'National University of Singapore (NUS)', country: 'Singapore ðŸ‡¸ðŸ‡¬', rank: '#8', type: 'Public' },
    { name: 'University of Malaya (UM)', country: 'Malaysia ðŸ‡²ðŸ‡¾', rank: '#65', type: 'Public' },
    { name: 'Monash University Malaysia', country: 'Malaysia ðŸ‡²ðŸ‡¾', rank: 'Top 80', type: 'Branch Campus' },
    { name: 'RMIT University Malaysia', country: 'Malaysia ðŸ‡²ðŸ‡¾', rank: 'Top 200', type: 'Branch Campus' },
    { name: 'TU Munich', country: 'Germany ðŸ‡©ðŸ‡ª', rank: '#37', type: 'Technical' },
    { name: 'RWTH Aachen', country: 'Germany ðŸ‡©ðŸ‡ª', rank: 'Top 100', type: 'Technical' },
    { name: 'University of Melbourne', country: 'Australia ðŸ‡¦ðŸ‡º', rank: '#33', type: 'Research' },
    { name: 'University of Toronto', country: 'Canada ðŸ‡¨ðŸ‡¦', rank: '#21', type: 'Research' },
    { name: 'Trinity College Dublin', country: 'Ireland ðŸ‡®ðŸ‡ª', rank: 'Top 100', type: 'Research' },
];

export default function UniversitiesPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Partner Universities"
                title={<>Find Your <span className="text-[#10b981]">Perfect University</span></>}
                subtitle="Explore our network of 500+ partner institutions across 9 countries. Every pathway, curated."
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { label: 'Partnered Universities', href: '/universities/partnered', icon: 'ðŸ¤', desc: 'Official Greenbox Edu partner institutions with guaranteed application support.' },
                            { label: 'Top Ranked', href: '/universities/top-ranked', icon: 'ðŸ†', desc: 'Explore the world\'s top 500 universities where our students have been accepted.' },
                            { label: 'Private Institutions', href: '/universities/private', icon: 'ðŸ›ï¸', desc: 'Specialist private universities offering unique programs and industry links.' },
                            { label: 'Compare Universities', href: '/universities/compare', icon: 'âš–ï¸', desc: 'Side-by-side comparison tool for tuition, ranking, country, and intake.' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="group p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/40 hover:bg-slate-50 transition-all block">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-[#10b981] transition-colors">{item.label}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                <div className="mt-4 flex items-center gap-1 text-[#10b981] text-sm font-medium">
                                    Explore <ChevronRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Partner Universities</h2>
                    <div className="space-y-3">
                        {universities.map((u) => (
                            <div key={u.name} className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <div>
                                    <p className="text-slate-900 font-semibold">{u.name}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{u.country} Â· {u.type}</p>
                                </div>
                                <span className="text-[#10b981] font-bold text-sm whitespace-nowrap ml-4">Rank {u.rank}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

