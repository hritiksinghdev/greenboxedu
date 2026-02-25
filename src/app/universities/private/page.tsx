import { PageHero } from '@/components/ui/PageHero';

const privateUnis = [
    { name: 'Taylor\'s University', country: 'Malaysia ðŸ‡²ðŸ‡¾', specialty: 'Hospitality, Business, Law', note: 'Top private university in Malaysia' },
    { name: 'Sunway University', country: 'Malaysia ðŸ‡²ðŸ‡¾', specialty: 'Business, Tech, Sciences', note: 'Ranked #601â€“650 globally' },
    { name: 'INTI International University', country: 'Malaysia ðŸ‡²ðŸ‡¾', specialty: 'Engineering, IT, Business', note: 'Awarded Best Private University Malaysia' },
    { name: 'Murdoch University Dubai', country: 'UAE ðŸ‡¦ðŸ‡ª', specialty: 'Business, Education, Law', note: 'Globally recognised private branch' },
    { name: 'HHL Leipzig Graduate School', country: 'Germany ðŸ‡©ðŸ‡ª', specialty: 'MBA, Business Leadership', note: 'Top-ranked private business school EU' },
    { name: 'INSEAD (Asia Campus)', country: 'Singapore ðŸ‡¸ðŸ‡¬', specialty: 'MBA, Finance', note: '#1 MBA Program globally' },
    { name: 'Singapore Management University', country: 'Singapore ðŸ‡¸ðŸ‡¬', specialty: 'Finance, Business, Law', note: 'Asia\'s premier business university' },
    { name: 'Curtin University Malaysia', country: 'Malaysia ðŸ‡²ðŸ‡¾', specialty: 'Engineering, Commerce, Built Env.', note: 'International branch, globally recognised' },
];

export default function PrivateInstitutionsPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Private & Specialist"
                title={<>Private <span className="text-[#10b981]">Institutions</span></>}
                subtitle="Specialist private universities offering unique programs, smaller cohorts, and direct industry connections."
                ctaLabel="Explore Your Options"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {privateUnis.map((u) => (
                            <div key={u.name} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <p className="text-slate-900 font-bold mb-1">{u.name}</p>
                                <p className="text-slate-500 text-sm mb-3">{u.country}</p>
                                <p className="text-[#10b981] text-sm font-medium mb-1">{u.specialty}</p>
                                <p className="text-white/40 text-xs">{u.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

