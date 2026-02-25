import { PageHero } from '@/components/ui/PageHero';

const partnered = [
    { name: 'National University of Singapore', country: 'Singapore ðŸ‡¸ðŸ‡¬', type: 'Public Research', since: '2019' },
    { name: 'University of Malaya', country: 'Malaysia ðŸ‡²ðŸ‡¾', type: 'Public Research', since: '2018' },
    { name: 'Monash University Malaysia', country: 'Malaysia ðŸ‡²ðŸ‡¾', type: 'International Branch', since: '2020' },
    { name: 'RMIT University Malaysia', country: 'Malaysia ðŸ‡²ðŸ‡¾', type: 'International Branch', since: '2021' },
    { name: 'Taylor\'s University', country: 'Malaysia ðŸ‡²ðŸ‡¾', type: 'Private', since: '2020' },
    { name: 'TU Munich', country: 'Germany ðŸ‡©ðŸ‡ª', type: 'Technical University', since: '2022' },
    { name: 'RWTH Aachen', country: 'Germany ðŸ‡©ðŸ‡ª', type: 'Technical University', since: '2022' },
    { name: 'Monash University', country: 'Australia ðŸ‡¦ðŸ‡º', type: 'Research University', since: '2021' },
    { name: 'RMIT University', country: 'Australia ðŸ‡¦ðŸ‡º', type: 'Technology University', since: '2021' },
    { name: 'University of Toronto', country: 'Canada ðŸ‡¨ðŸ‡¦', type: 'Research University', since: '2023' },
    { name: 'Trinity College Dublin', country: 'Ireland ðŸ‡®ðŸ‡ª', type: 'Research University', since: '2023' },
    { name: 'National University of Ireland', country: 'Ireland ðŸ‡®ðŸ‡ª', type: 'Research University', since: '2022' },
];

export default function PartneredUniversitiesPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="100+ Partners"
                title={<>Our <span className="text-[#10b981]">Partner Universities</span></>}
                subtitle="Official partnerships built over years of trust. Our students have guaranteed application processing and priority pathways."
                ctaLabel="Apply Through Greenbox Edu"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-3">
                        {partnered.map((u) => (
                            <div key={u.name} className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <div>
                                    <p className="text-slate-900 font-semibold">{u.name}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{u.country} Â· {u.type}</p>
                                </div>
                                <span className="text-white/30 text-xs whitespace-nowrap ml-4">Partner since {u.since}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

