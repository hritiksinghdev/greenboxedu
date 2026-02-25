import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function WhyChooseUsPage() {
    const reasons = [
        { icon: 'ðŸŽ¯', title: 'Profile-First Approach', desc: 'We never give generic advice. Every recommendation is personalised to your academic background, budget, and goals.' },
        { icon: 'ðŸ¤', title: 'Official University Partners', desc: 'Our partnerships mean faster processing, dedicated admission contacts, and exclusive student benefits.' },
        { icon: 'ðŸ“Š', title: 'Data-Backed Shortlisting', desc: 'We use acceptance data from 3,000+ past applications to shortlist universities with the highest success probability for your profile.' },
        { icon: 'ðŸ›‚', title: '98% Visa Approval Rate', desc: 'Our structured visa documentation process has achieved a near-perfect approval rate across all destinations.' },
        { icon: 'ðŸŽ“', title: 'End-to-End Support', desc: 'From eligibility check to pre-departure briefing â€” one team, one process, no gaps.' },
        { icon: 'ðŸŒ', title: 'Alumni Network Access', desc: 'Join a global community of 5,000+ Greenbox Edu alumni. Mentorship, internships, and referrals from students who\'ve been where you\'re going.' },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Our Advantage"
                title={<>Why Choose <span className="text-[#10b981]">Greenbox Edu</span></>}
                subtitle="Not all study abroad consultants are equal. Here's why 5,000+ students trusted us with the most important decision of their lives."
                ctaLabel="Book Free Consultation"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((r) => (
                            <div key={r.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <div className="text-3xl mb-3">{r.icon}</div>
                                <h3 className="text-slate-900 font-bold mb-2">{r.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/book-consultation">
                            <button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 px-10 text-base rounded-lg border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                Start Your Journey Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

