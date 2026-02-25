import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function PreDeparturePage() {
    const sections = [
        { icon: 'ðŸ ', title: 'Accommodation', desc: 'On-campus dormitories, off-campus apartments, and homestay options. We brief you on what to expect and how to book.' },
        { icon: 'ðŸ’±', title: 'Forex & Banking', desc: 'Guidance on opening international bank accounts, transferring money, and setting up a student forex card.' },
        { icon: 'âœˆï¸', title: 'Travel Logistics', desc: 'Flight booking tips, baggage limits, what to pack for your destination country and season.' },
        { icon: 'ðŸ“‹', title: 'Orientation Preparation', desc: 'What to expect on arrival day, how university orientation works, and how to register for classes.' },
        { icon: 'ðŸ¥', title: 'Health & Insurance', desc: 'International health insurance requirements, vaccination records, and student health portals.' },
        { icon: 'ðŸ“±', title: 'Digital Setup', desc: 'Local SIM cards, internet plans, and essential apps for your destination country.' },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>Pre-Departure <span className="text-[#10b981]">Support</span></>}
                subtitle="Your visa is approved. Your offer is confirmed. Now we prepare you for everything that comes next."
                ctaLabel="Book Free Consultation"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {sections.map((s) => (
                            <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="text-3xl mb-3">{s.icon}</div>
                                <h3 className="text-slate-900 font-semibold mb-2">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
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

