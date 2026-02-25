import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

const scholarships = [
    { name: 'DAAD Scholarship', country: 'Germany ðŸ‡©ðŸ‡ª', type: 'Government', amount: 'Full funding + stipend', deadline: 'Oct 15, 2026', criteria: 'Bachelor\'s degree, strong academics, research proposal' },
    { name: 'Chevening Scholarship', country: 'UK ðŸ‡¬ðŸ‡§', type: 'Government (UK Govt)', amount: 'Full tuition + living', deadline: 'Nov 5, 2026', criteria: 'Leadership potential, 2+ years work experience' },
    { name: 'Australia Awards', country: 'Australia ðŸ‡¦ðŸ‡º', type: 'Government (AusAID)', amount: 'Full tuition + flights', deadline: 'Apr 30, 2026', criteria: 'Developing country nationals, public sector preference' },
    { name: 'Malaysian International Scholarship (MIS)', country: 'Malaysia ðŸ‡²ðŸ‡¾', type: 'Government', amount: 'Full tuition + stipend', deadline: 'May 31, 2026', criteria: 'Postgraduate level, high academic standing' },
    { name: 'NUS Research Scholarship', country: 'Singapore ðŸ‡¸ðŸ‡¬', type: 'University', amount: 'Tuition + SGD 2,200/mo', deadline: 'Jan 15, 2026', criteria: 'PhD applicants, strong research background' },
    { name: 'Monash International Merit Scholarship', country: 'Australia/Malaysia ðŸ‡¦ðŸ‡ºðŸ‡²ðŸ‡¾', type: 'University', amount: 'AUD 10,000 / MYR 20,000', deadline: 'Rolling', criteria: 'Academic merit, minimum 85% average' },
    { name: 'University of Toronto Lester B. Pearson', country: 'Canada ðŸ‡¨ðŸ‡¦', type: 'University', amount: 'Full scholarship, 4 years', deadline: 'Nov 30, 2026', criteria: 'High school final year students, leadership' },
    { name: 'Trinity College Dublin Global Excellence', country: 'Ireland ðŸ‡®ðŸ‡ª', type: 'University', amount: 'â‚¬ 5,000 â€“ full tuition', deadline: 'Mar 1, 2026', criteria: 'Academic excellence, postgraduate study' },
];

export default function ScholarshipsPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Funding Your Future"
                title={<>Scholarships & <span className="text-[#10b981]">Funding Opportunities</span></>}
                subtitle="Explore country-based, university, and government scholarships available to international students across our partner destinations."
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
                        {scholarships.map((s) => (
                            <div key={s.name} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-slate-900 font-bold">{s.name}</h3>
                                        <p className="text-slate-500 text-sm mt-1">{s.country}</p>
                                    </div>
                                    <span className="text-xs px-2.5 py-1 rounded-full border border-[#10b981]/30 text-[#10b981] font-medium whitespace-nowrap ml-3">{s.type}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Amount</p>
                                        <p className="text-white/80 font-medium">{s.amount}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Deadline</p>
                                        <p className="text-[#10b981] font-medium">{s.deadline}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs mt-3 leading-relaxed">{s.criteria}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center border-t border-slate-200 pt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help Applying for Scholarships?</h2>
                        <p className="text-slate-500 mb-8">Our scholarship experts have helped students win over $2M in funding. Let us guide you.</p>
                        <Link href="/services/scholarship-guidance">
                            <button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 px-10 text-base rounded-lg border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                Get Scholarship Guidance
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
