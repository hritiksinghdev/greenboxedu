import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function ApplicationSupportPage() {
    const steps = [
        { icon: 'ðŸ“„', title: 'Statement of Purpose (SOP)', desc: 'We guide you through a compelling, authentic SOP that highlights your story and goals.' },
        { icon: 'ðŸ“', title: 'Documentation', desc: 'Transcripts, recommendation letters, certificates â€” we review everything before submission.' },
        { icon: 'ðŸ“¬', title: 'Submission Process', desc: 'We manage deadlines, portal submissions, and follow-ups with admissions offices.' },
        { icon: 'ðŸŽ‰', title: 'Offer Letter Support', desc: 'After receiving your offer, we help you evaluate, negotiate deferral if needed, and accept.' },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>Application <span className="text-[#10b981]">Support</span></>}
                subtitle="From your SOP to your offer letter â€” we ensure every submission is polished, complete, and submitted on time."
                ctaLabel="Book Free Consultation"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {steps.map((s) => (
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

