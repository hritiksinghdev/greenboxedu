import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';

export default function AboutPage() {
    const metrics = [
        { value: '5,000+', label: 'Students Placed' },
        { value: '9', label: 'Destinations' },
        { value: '100+', label: 'Partner Universities' },
        { value: '98%', label: 'Visa Approval Rate' },
    ];

    const links = [
        { label: 'Why Choose Us', href: '/about/why-choose-us', desc: 'The principles and advantages that set Greenbox Edu apart.' },
        { label: 'Success Stories', href: '/about/success-stories', desc: 'Real students who transformed their futures with us.' },
        { label: 'Our Team', href: '/about/team', desc: 'The experienced advisors behind your journey.' },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Our Story"
                title={<>About <span className="text-[#10b981]">Greenbox Edu</span></>}
                subtitle="A team of educators, advisors, and alumni dedicated to making world-class education accessible to every ambitious student."
            />

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {metrics.map((m) => (
                            <div key={m.label} className="text-center p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="text-3xl font-black text-[#10b981] mb-1">{m.value}</div>
                                <div className="text-slate-500 text-sm">{m.label}</div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-5">Mission & Vision</h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <h3 className="text-[#10b981] font-bold mb-3">Our Mission</h3>
                                <p className="text-white/65 leading-relaxed">To make world-class international education accessible, transparent, and transformative for every ambitious student â€” regardless of background.</p>
                            </div>
                            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <h3 className="text-[#10b981] font-bold mb-3">Our Vision</h3>
                                <p className="text-white/65 leading-relaxed">A world where geography is never a barrier to excellence. We bridge ambition to admission, across every border.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Learn More</h2>
                        <div className="space-y-4">
                            {links.map((l) => (
                                <Link key={l.href} href={l.href} className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#10b981]/40 transition-all">
                                    <div>
                                        <p className="text-slate-900 font-semibold group-hover:text-[#10b981] transition-colors">{l.label}</p>
                                        <p className="text-slate-500 text-sm mt-1">{l.desc}</p>
                                    </div>
                                    <span className="text-[#10b981] text-xl">â†’</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

