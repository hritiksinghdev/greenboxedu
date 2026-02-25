import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function EligibilityPage() {
    const steps = [
        { step: '01', title: 'Academic Profile Review', desc: 'We evaluate your grades, standardised test scores, and degree level to gauge baseline eligibility.' },
        { step: '02', title: 'Language Assessment', desc: 'IELTS, TOEFL, Duolingo â€” we identify gaps and advise on score improvement strategies.' },
        { step: '03', title: 'Budget & Country Fit', desc: 'We match your financial profile to countries and institutions that are a realistic fit.' },
        { step: '04', title: 'Full Report Delivery', desc: 'You receive a clear summary of strengths, gaps, and your recommended university shortlist.' },
    ];

    const docs = ['Academic transcripts', 'Degree certificate / mark sheets', 'English proficiency test scores', 'Passport copy', 'Statement of Purpose (draft, optional)', 'Work experience certificate (if applicable)'];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>Eligibility <span className="text-[#10b981]">Assessment</span></>}
                subtitle="Understand exactly where you stand before you apply. Our structured assessment removes all guesswork."
                ctaLabel="Test My Eligibility"
                ctaHref="/#eligibility"
            />

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">What is Eligibility Assessment?</h2>
                        <p className="text-white/65 leading-relaxed text-lg">
                            Before applying to any university, you must understand your academic standing, language readiness, and financial profile. Our Eligibility Assessment is a structured, expert-led review that gives you a clear picture â€” and a clear path forward.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {steps.map((s) => (
                                <div key={s.step} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                                    <span className="text-[#10b981] font-bold text-2xl block mb-3">{s.step}</span>
                                    <h3 className="text-slate-900 font-semibold mb-2">{s.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
                        <ul className="space-y-3">
                            {docs.map((d) => (
                                <li key={d} className="flex items-center gap-3 text-white/70">
                                    <span className="text-[#10b981]">âœ“</span> {d}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center border-t border-slate-200 pt-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Know Where You Stand?</h2>
                        <p className="text-slate-500 mb-8">Free assessment. No obligation.</p>
                        <Link href="/#eligibility">
                            <button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 px-10 text-base rounded-lg border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                Test My Eligibility
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

