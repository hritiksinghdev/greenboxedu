import { PageHero } from '@/components/ui/PageHero';

const ranked = [
    { name: 'Massachusetts Institute of Technology', country: 'USA ðŸ‡ºðŸ‡¸', rank: 1 },
    { name: 'University of Oxford', country: 'UK ðŸ‡¬ðŸ‡§', rank: 2 },
    { name: 'University of Cambridge', country: 'UK ðŸ‡¬ðŸ‡§', rank: 3 },
    { name: 'Harvard University', country: 'USA ðŸ‡ºðŸ‡¸', rank: 4 },
    { name: 'Stanford University', country: 'USA ðŸ‡ºðŸ‡¸', rank: 5 },
    { name: 'Imperial College London', country: 'UK ðŸ‡¬ðŸ‡§', rank: 8 },
    { name: 'National University of Singapore', country: 'Singapore ðŸ‡¸ðŸ‡¬', rank: 8 },
    { name: 'ETH Zurich', country: 'Switzerland ðŸ‡¨ðŸ‡­', rank: 9 },
    { name: 'University of Toronto', country: 'Canada ðŸ‡¨ðŸ‡¦', rank: 21 },
    { name: 'University of Melbourne', country: 'Australia ðŸ‡¦ðŸ‡º', rank: 33 },
    { name: 'University of Sydney', country: 'Australia ðŸ‡¦ðŸ‡º', rank: 41 },
    { name: 'University of British Columbia', country: 'Canada ðŸ‡¨ðŸ‡¦', rank: 34 },
    { name: 'TU Munich', country: 'Germany ðŸ‡©ðŸ‡ª', rank: 37 },
    { name: 'Nanyang Technological University', country: 'Singapore ðŸ‡¸ðŸ‡¬', rank: 26 },
    { name: 'University of Malaya', country: 'Malaysia ðŸ‡²ðŸ‡¾', rank: 65 },
];

export default function TopRankedPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="QS World Rankings"
                title={<>Top <span className="text-[#10b981]">Ranked Universities</span></>}
                subtitle="Greenbox Edu students have been accepted into the world's most prestigious institutions. Your dream university is reachable."
                ctaLabel="Check My Eligibility"
                ctaHref="/#eligibility"
            />
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-3">
                        {ranked.map((u) => (
                            <div key={u.name} className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#10b981] font-bold text-lg w-8 text-right tabular-nums">#{u.rank}</span>
                                    <div>
                                        <p className="text-slate-900 font-semibold">{u.name}</p>
                                        <p className="text-slate-500 text-sm mt-0.5">{u.country}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

