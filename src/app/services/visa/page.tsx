import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function VisaPage() {
    const steps = [
        { step: '01', title: 'Document Preparation', desc: 'We create a complete document checklist tailored to your destination country and university.' },
        { step: '02', title: 'Visa Strategy', desc: 'We advise on financial proof, biometrics, and how to present a strong application.' },
        { step: '03', title: 'Application Filing', desc: 'We review every form before submission. No errors, no rejections due to incomplete files.' },
        { step: '04', title: 'Interview Coaching', desc: 'For countries requiring visa interviews, we run full mock sessions with sample questions.' },
        { step: '05', title: 'Visa Decision & Next Steps', desc: 'On approval: we prepare you for entry. On delay: we escalate through proper channels.' },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Service"
                title={<>Visa <span className="text-[#10b981]">Assistance</span></>}
                subtitle="Visa rejections are preventable. Our structured visa strategy ensures you enter your destination with confidence."
                ctaLabel="Book Free Consultation"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="relative pl-6 border-l border-slate-200 space-y-10">
                        {steps.map((s) => (
                            <div key={s.step} className="relative">
                                <span className="absolute -left-[1.85rem] w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-xs">{s.step}</span>
                                <h3 className="text-slate-900 font-semibold text-lg mb-2">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">{s.desc}</p>
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

