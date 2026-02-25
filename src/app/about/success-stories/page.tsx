import { PageHero } from '@/components/ui/PageHero';

const stories = [
    { name: 'Priya Sharma', from: 'India ðŸ‡®ðŸ‡³', to: 'National University of Singapore', program: 'MSc Data Science', scholarship: 'NUS Research Scholarship', quote: 'I didn\'t think NUS was possible for me. Greenbox Edu helped me see my profile had real value â€” and guided me through every step.' },
    { name: 'Ahmad Faiz', from: 'Malaysia ðŸ‡²ðŸ‡¾', to: 'TU Munich, Germany', program: 'MSc Mechanical Engineering', scholarship: 'DAAD Scholarship', quote: 'Zero tuition, full scholarship, a world-class degree. The Greenbox team made the DAAD application process so clear and manageable.' },
    { name: 'Sarah Okonkwo', from: 'Nigeria ðŸ‡³ðŸ‡¬', to: 'University of Toronto', program: 'MBA', scholarship: 'Partial merit scholarship', quote: 'Canada felt like a dream. Greenbox Edu turned it into a structured plan with a 6-month roadmap. I landed my offer 3 months ahead of the deadline.' },
    { name: 'Hafiz Rahman', from: 'Bangladesh ðŸ‡§ðŸ‡©', to: 'Monash University Malaysia', program: 'BSc Computer Science', scholarship: 'Monash International Merit Scholarship', quote: 'The eligibility check showed I qualified for a scholarship I hadn\'t even heard of. That coverage changed everything.' },
    { name: 'Linh Nguyen', from: 'Vietnam ðŸ‡»ðŸ‡³', to: 'University of Melbourne', program: 'Master of Engineering', scholarship: 'Australia Awards', quote: 'My visa was rejected before I found Greenbox Edu. They rebuilt my entire application and it was approved first try.' },
    { name: 'Yasmin Al-Rashid', from: 'Jordan ðŸ‡¯ðŸ‡´', to: 'Trinity College Dublin', program: 'LLM International Law', scholarship: 'Trinity Global Excellence Award', quote: 'I never imagined I\'d study law in Ireland. My advisor at Greenbox believed in my profile when I didn\'t.' },
];

export default function SuccessStoriesPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Real Students, Real Outcomes"
                title={<>Success <span className="text-[#10b981]">Stories</span></>}
                subtitle="Every number behind our success metrics is a real person who took a leap of faith. Here are some of their stories."
                ctaLabel="Start Your Story"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories.map((s) => (
                            <div key={s.name} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors flex flex-col">
                                <blockquote className="text-white/70 text-sm italic leading-relaxed mb-5 flex-1">"{s.quote}"</blockquote>
                                <div className="border-t border-slate-200 pt-4">
                                    <p className="text-slate-900 font-bold">{s.name}</p>
                                    <p className="text-slate-500 text-xs mt-1">{s.from} â†’ {s.to}</p>
                                    <p className="text-[#10b981] text-xs mt-0.5 font-medium">{s.program}</p>
                                    {s.scholarship && <p className="text-white/40 text-xs mt-0.5">ðŸ… {s.scholarship}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

