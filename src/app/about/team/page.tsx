import { PageHero } from '@/components/ui/PageHero';

const team = [
    { name: 'Dr. Raj Menon', role: 'Founder & CEO', specialty: 'Former NUS faculty. 15+ years in international education consulting.', flag: 'ðŸ‡¸ðŸ‡¬' },
    { name: 'Aishah Razak', role: 'Head of Admissions', specialty: 'Expert in Malaysia & Singapore university admissions. 800+ students placed.', flag: 'ðŸ‡²ðŸ‡¾' },
    { name: 'Klaus Weber', role: 'Germany Pathway Lead', specialty: 'Specialises in DAAD scholarships and German university applications. Based in Berlin.', flag: 'ðŸ‡©ðŸ‡ª' },
    { name: 'Emily Chen', role: 'Australia & NZ Advisor', specialty: 'Former Monash University staff. Go8 university specialist and visa expert.', flag: 'ðŸ‡¦ðŸ‡º' },
    { name: 'James O\'Brien', role: 'UK & Ireland Lead', specialty: 'Oxbridge application expert. Chevening scholarship mentor.', flag: 'ðŸ‡®ðŸ‡ª' },
    { name: 'Sandra Park', role: 'Canada & USA Advisor', specialty: 'Ivy League application strategist and US student visa specialist.', flag: 'ðŸ‡¨ðŸ‡¦' },
    { name: 'Fatima Al-Zahra', role: 'Scholarship Specialist', specialty: 'Has helped students secure over $2M in scholarships across all destinations.', flag: 'ðŸŒ' },
    { name: 'Priya Nair', role: 'Pre-Departure & Welfare', specialty: 'Student wellbeing advisor ensuring smooth transitions for all placed students.', flag: 'ðŸ‡®ðŸ‡³' },
];

export default function TeamPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Our Experts"
                title={<>Meet the <span className="text-[#10b981]">Team</span></>}
                subtitle="Our advisors are former university staff, alumni, and industry veterans from the countries you want to study in."
                ctaLabel="Speak to an Advisor"
                ctaHref="/book-consultation"
            />
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {team.map((m) => (
                            <div key={m.name} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/30 transition-colors text-center">
                                <div className="text-4xl mb-3">{m.flag}</div>
                                <h3 className="text-slate-900 font-bold">{m.name}</h3>
                                <p className="text-[#10b981] text-sm font-medium mt-1">{m.role}</p>
                                <p className="text-slate-500 text-xs mt-3 leading-relaxed">{m.specialty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

