import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const services = [
    { label: 'Eligibility Assessment', href: '/services/eligibility', icon: 'ðŸ“‹', desc: 'Understand your profile and which universities match your academic standing.' },
    { label: 'University Shortlisting', href: '/services/shortlisting', icon: 'ðŸŽ¯', desc: 'Get a curated shortlist of universities best suited to your goals and budget.' },
    { label: 'Application Support', href: '/services/application-support', icon: 'ðŸ“', desc: 'SOP guidance, documentation, and follow-through from start to offer letter.' },
    { label: 'Visa Assistance', href: '/services/visa', icon: 'ðŸ›‚', desc: 'Complete visa strategy, document preparation, and interview coaching.' },
    { label: 'Scholarship Guidance', href: '/services/scholarship-guidance', icon: 'ðŸ…', desc: 'Identify and apply for merit, need-based, and country-specific scholarships.' },
    { label: 'Pre-Departure Support', href: '/services/pre-departure', icon: 'âœˆï¸', desc: 'Accommodation, forex, travel logistics, and orientation preparation.' },
];

export default function ServicesPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="End-to-End Support"
                title={<>Every Step of Your <span className="text-[#10b981]">Journey, Covered</span></>}
                subtitle="From your first eligibility check to your flight departure â€” Greenbox Edu is with you at every stage."
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <Link key={s.href} href={s.href} className="group p-7 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/40 hover:bg-slate-50 transition-all block">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-[#10b981] transition-colors">{s.label}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <div className="flex items-center gap-1 text-[#10b981] text-sm font-medium">
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

