import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function ScholarshipGuidancePage() {
    const types = [
        { icon: 'ðŸ…', title: 'Merit Scholarships', desc: 'Awarded based on academic excellence. We identify which universities offer merit aid for your profile.' },
        { icon: 'ðŸ’¼', title: 'Need-Based Scholarships', desc: 'Financial aid programs for students from developing countries or lower income backgrounds.' },
        { icon: 'ðŸŒ', title: 'Country-Based Scholarships', desc: 'Government-to-government and country-specific scholarships like DAAD, Chevening, and Malaysia International Scholarship.' },
        { icon: 'ðŸ”¬', title: 'Research Fellowships', desc: 'For postgraduate students â€” funded PhD and master\'s positions within university departments.' },
    ];

    const tips = [
        'Apply early â€” most scholarships close 4â€“6 months before intake',
        'Tailor your SOP to the scholarship\'s specific values and mission',
        'Highlight community impact, not just academic achievements',
        'Maintain a strong GPA throughout your undergraduate degree',
        'Two strong reference letters are often more valuable than five weak ones',
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>Scholarship <span className="text-[#10b981]">Guidance</span></>}
                subtitle="Thousands of dollars in unclaimed scholarships exist. We help you find and win the ones you qualify for."
                ctaLabel="Book Free Consultation"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {types.map((t) => (
                            <div key={t.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="text-3xl mb-3">{t.icon}</div>
                                <h3 className="text-slate-900 font-semibold mb-2">{t.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tips to Increase Approval Chances</h2>
                        <ul className="space-y-3">
                            {tips.map((t) => (
                                <li key={t} className="flex items-start gap-3 text-white/70 text-sm">
                                    <span className="text-[#10b981] mt-0.5">â†’</span> {t}
                                </li>
                            ))}
                        </ul>
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

