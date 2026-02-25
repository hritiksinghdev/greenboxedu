import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const countryData: Record<string, {
    name: string; flag: string; image: string;
    why: { icon: string; title: string; desc: string }[];
    universities: { name: string; rank: string; type: string }[];
    costs: { item: string; range: string }[];
}> = {
    singapore: {
        name: 'Singapore', flag: '🇸🇬',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🏆', title: 'World-Class Rankings', desc: 'NUS and NTU consistently rank in the global top 20, offering Ivy League-quality education.' },
            { icon: '💼', title: 'Career Gateway', desc: 'Singapore is Asia\'s financial hub. Graduates find employment with Fortune 500 firms.' },
            { icon: '🔒', title: 'Safety & Stability', desc: 'One of the world\'s safest cities with a transparent legal system and low crime rate.' },
            { icon: '🌍', title: 'Global Network', desc: 'A multicultural environment connecting you with peers from 100+ countries.' },
        ],
        universities: [
            { name: 'National University of Singapore (NUS)', rank: '#8 World', type: 'Public' },
            { name: 'Nanyang Technological University (NTU)', rank: '#26 World', type: 'Public' },
            { name: 'Singapore Management University (SMU)', rank: 'Top 20 Asia', type: 'Public' },
            { name: 'INSEAD (Asia Campus)', rank: '#1 MBA World', type: 'Private' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'SGD 15,000 – 35,000' },
            { item: 'Accommodation', range: 'SGD 500 – 1,500/month' },
            { item: 'Living Expenses', range: 'SGD 1,000 – 2,000/month' },
            { item: 'Student Pass Fee', range: 'SGD 90 (one-time)' },
        ],
    },
    malaysia: {
        name: 'Malaysia', flag: '🇲🇾',
        image: 'https://images.unsplash.com/photo-1596422846543-74c6c221b61c?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '💰', title: 'Affordable World-Class Education', desc: 'International degrees at a fraction of Western costs with the same recognition.' },
            { icon: '🌏', title: 'Cultural Diversity', desc: 'A melting pot of Malay, Chinese, and Indian cultures with English as a common language.' },
            { icon: '🏫', title: 'Branch Campuses', desc: 'Home to international branch campuses of Monash, RMIT, Nottingham, and more.' },
            { icon: '✈️', title: 'Strategic Location', desc: 'Gateway to Southeast Asia with excellent transport links across the region.' },
        ],
        universities: [
            { name: 'University of Malaya (UM)', rank: '#65 World', type: 'Public' },
            { name: 'Monash University Malaysia', rank: 'Top 80 World', type: 'International Branch' },
            { name: 'RMIT University Malaysia', rank: 'Top 200 World', type: 'International Branch' },
            { name: 'Taylor\'s University', rank: 'Top Asian', type: 'Private' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'MYR 20,000 – 60,000' },
            { item: 'Accommodation', range: 'MYR 500 – 1,500/month' },
            { item: 'Living Expenses', range: 'MYR 1,000 – 1,800/month' },
            { item: 'Student Pass', range: 'MYR 500 (approx.)' },
        ],
    },
    germany: {
        name: 'Germany', flag: '🇩🇪',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🆓', title: 'Tuition-Free Education', desc: 'Public universities charge near-zero tuition even for international students.' },
            { icon: '⚙️', title: 'Engineering Excellence', desc: 'Germany leads the world in engineering, automotive, and manufacturing research.' },
            { icon: '🏭', title: 'Industry Connections', desc: 'Direct pathways to BMW, Siemens, Bosch, and the Mittelstand powerhouses.' },
            { icon: '🌐', title: 'EU Work Rights', desc: 'Post-study 18-month job-seeker visa and straightforward settlement pathways.' },
        ],
        universities: [
            { name: 'TU Munich', rank: '#37 World', type: 'Technical University' },
            { name: 'RWTH Aachen', rank: 'Top 100 World', type: 'Technical University' },
            { name: 'Heidelberg University', rank: 'Top 60 World', type: 'Research University' },
            { name: 'HHL Leipzig', rank: 'Top EU MBA', type: 'Business School' },
        ],
        costs: [
            { item: 'Tuition (public)', range: '€ 0 – 1,500/semester' },
            { item: 'Accommodation', range: '€ 300 – 700/month' },
            { item: 'Living Expenses', range: '€ 700 – 1,000/month' },
            { item: 'Blocked Account', range: '€ 11,208 (required)' },
        ],
    },
    australia: {
        name: 'Australia', flag: '🇦🇺',
        image: 'https://images.unsplash.com/photo-1523482580662-fcc65ba5ab07?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🏅', title: 'Top Global Rankings', desc: 'Australia has 7 universities in the top 100 globally with strong research output.' },
            { icon: '☀️', title: 'Lifestyle & Wellbeing', desc: 'Ranked among the world\'s most liveable cities for students.' },
            { icon: '💼', title: 'Post-Study Work Rights', desc: 'Graduate visa allows 2–4 years of work experience after completion.' },
            { icon: '🤝', title: 'Welcoming Culture', desc: 'One of the highest international student populations with strong support systems.' },
        ],
        universities: [
            { name: 'University of Melbourne', rank: '#33 World', type: 'Research' },
            { name: 'University of Sydney', rank: '#41 World', type: 'Research' },
            { name: 'Monash University', rank: 'Top 60 World', type: 'Research' },
            { name: 'RMIT University', rank: 'Top 200 World', type: 'Technology' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'AUD 20,000 – 45,000' },
            { item: 'Accommodation', range: 'AUD 800 – 2,000/month' },
            { item: 'Living Expenses', range: 'AUD 1,500 – 2,500/month' },
            { item: 'Student Visa Fee', range: 'AUD 710 (approx.)' },
        ],
    },
    canada: {
        name: 'Canada', flag: '🇨🇦',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🍁', title: 'PR Pathway', desc: 'One of the clearest pathways to permanent residency through Express Entry and PNP.' },
            { icon: '🤝', title: 'Diversity & Inclusion', desc: 'Canada\'s multicultural policy ensures every student feels at home.' },
            { icon: '🎓', title: 'Co-op Programs', desc: 'Earn while you study through world-class co-op and internship opportunities.' },
            { icon: '🔬', title: 'Research Excellence', desc: 'Strong government investment in AI, clean tech, and biomedical research.' },
        ],
        universities: [
            { name: 'University of Toronto', rank: '#21 World', type: 'Research' },
            { name: 'University of British Columbia', rank: '#34 World', type: 'Research' },
            { name: 'McGill University', rank: '#46 World', type: 'Research' },
            { name: 'York University', rank: 'Top Canadian', type: 'Comprehensive' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'CAD 15,000 – 35,000' },
            { item: 'Accommodation', range: 'CAD 800 – 1,800/month' },
            { item: 'Living Expenses', range: 'CAD 1,000 – 2,000/month' },
            { item: 'Study Permit Fee', range: 'CAD 150' },
        ],
    },
    uk: {
        name: 'United Kingdom', flag: '🇬🇧',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🎩', title: 'Historic Prestige', desc: 'Oxford and Cambridge are global symbols of academic excellence and network.' },
            { icon: '⚡', title: 'Fast-Track Masters', desc: 'One-year master\'s programs save time and money compared to other countries.' },
            { icon: '💷', title: 'Graduate Route Visa', desc: '2–3 years of post-study work rights under the Graduate Route visa.' },
            { icon: '📚', title: 'World-Leading Research', desc: 'UK university research impacts global policy, science, and innovation.' },
        ],
        universities: [
            { name: 'University of Oxford', rank: '#1 World', type: 'Research' },
            { name: 'University of Cambridge', rank: '#2 World', type: 'Research' },
            { name: 'Imperial College London', rank: '#8 World', type: 'Technical' },
            { name: 'University of Edinburgh', rank: 'Top 30 World', type: 'Research' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: '£ 11,000 – 38,000' },
            { item: 'Accommodation', range: '£ 600 – 1,500/month' },
            { item: 'Living Expenses', range: '£ 800 – 1,500/month' },
            { item: 'Student Visa', range: '£ 490' },
        ],
    },
    ireland: {
        name: 'Ireland', flag: '🇮🇪',
        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '💻', title: 'EU Tech Hub', desc: 'Home to European HQs of Google, Meta, Apple, and Microsoft.' },
            { icon: '🗣️', title: 'English-Speaking EU', desc: 'The only native English-speaking country in the EU after Brexit.' },
            { icon: '🌿', title: 'Quality of Life', desc: 'Consistently ranked among the best countries for quality of life.' },
            { icon: '🏢', title: 'Graduate Opportunities', desc: 'Strong demand for STEM, finance, and business graduates.' },
        ],
        universities: [
            { name: 'Trinity College Dublin', rank: 'Top 100 World', type: 'Research' },
            { name: 'University College Dublin', rank: 'Top 200 World', type: 'Research' },
            { name: 'NUI Galway', rank: 'Top 300 World', type: 'Research' },
            { name: 'Dublin City University', rank: 'Top Irish', type: 'Technology' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: '€ 9,000 – 25,000' },
            { item: 'Accommodation', range: '€ 700 – 1,500/month' },
            { item: 'Living Expenses', range: '€ 800 – 1,200/month' },
            { item: 'Student Visa Fee', range: '€ 300' },
        ],
    },
    usa: {
        name: 'United States', flag: '🇺🇸',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🚀', title: 'Innovation Leader', desc: 'Silicon Valley, MIT, and Stanford define global technological innovation.' },
            { icon: '📐', title: 'Flexible Curriculum', desc: 'Liberal arts model allows multi-disciplinary exploration before specialising.' },
            { icon: '🔬', title: 'Research Funding', desc: 'US universities receive the world\'s largest research grants and fellowships.' },
            { icon: '🌎', title: 'Global Alumni Network', desc: 'US degrees open doors in every industry worldwide.' },
        ],
        universities: [
            { name: 'MIT', rank: '#1 World', type: 'Research' },
            { name: 'Stanford University', rank: '#5 World', type: 'Research' },
            { name: 'Harvard University', rank: '#4 World', type: 'Research' },
            { name: 'Carnegie Mellon University', rank: 'Top 30 World', type: 'Technology' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'USD 25,000 – 60,000' },
            { item: 'Accommodation', range: 'USD 800 – 2,500/month' },
            { item: 'Living Expenses', range: 'USD 1,000 – 2,500/month' },
            { item: 'F-1 Visa Fee', range: 'USD 160 + SEVIS USD 350' },
        ],
    },
    'new-zealand': {
        name: 'New Zealand', flag: '🇳🇿',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1920&q=80',
        why: [
            { icon: '🌿', title: 'Exceptional Quality of Life', desc: 'Pristine environment, clean air, and a relaxed lifestyle supporting student wellbeing.' },
            { icon: '🔭', title: 'Research-Based Learning', desc: 'Strong focus on practical, applied research across all disciplines.' },
            { icon: '🤝', title: 'Welcoming Community', desc: 'Known for being one of the most welcoming nations for international students.' },
            { icon: '💼', title: 'Post-Study Work Visa', desc: 'Up to 3 years of open work rights after graduation.' },
        ],
        universities: [
            { name: 'University of Auckland', rank: 'Top 100 World', type: 'Research' },
            { name: 'University of Otago', rank: 'Top 200 World', type: 'Research' },
            { name: 'Victoria University of Wellington', rank: 'Top 250 World', type: 'Research' },
            { name: 'AUT University', rank: 'Top NZ', type: 'Technology' },
        ],
        costs: [
            { item: 'Tuition (per year)', range: 'NZD 22,000 – 35,000' },
            { item: 'Accommodation', range: 'NZD 700 – 1,500/month' },
            { item: 'Living Expenses', range: 'NZD 1,000 – 1,800/month' },
            { item: 'Student Visa Fee', range: 'NZD 330' },
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(countryData).map((c) => ({ country: c }));
}

export default function CountryPage({ params }: { params: { country: string } }) {
    const data = countryData[params.country];
    if (!data) return <div className="min-h-screen bg-transparent flex items-center justify-center text-slate-900 text-xl font-medium">Country not found.</div>;

    return (
        <div className="bg-transparent min-h-screen pb-20">
            {/* Custom Image Hero */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={data.image} alt={data.name} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <span className="inline-flex items-center gap-1.5 mb-6 px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                        Study in {data.name} {data.flag}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-xl text-white">
                        Your Pathway to <span className="text-brand">{data.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
                        From top-ranked universities to world-class career outcomes — discover your exceptional pathway to studying in {data.name}.
                    </p>
                    <Link href="/book-consultation">
                        <button className="bg-brand hover:bg-brand-hover text-white font-bold h-14 px-10 text-lg rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] transition-all">
                            Get Free Profile Evaluation
                        </button>
                    </Link>
                </div>
                {/* Bottom fade to page global light background */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10" />
            </section>

            {/* Quick Stats Banner */}
            <section className="relative z-20 -mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-slate-100/50 md:divide-x">
                    <div className="text-center px-4">
                        <div className="text-4xl font-extrabold text-slate-900 mb-2">50+</div>
                        <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Partner Universities</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-4xl font-extrabold text-slate-900 mb-2">98%</div>
                        <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Visa Success Rate</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-4xl font-extrabold text-slate-900 mb-2">10k+</div>
                        <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Students Placed</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-4xl font-extrabold text-slate-900 mb-2">24/7</div>
                        <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">On-Ground Support</div>
                    </div>
                </div>
            </section>

            {/* Why Study Here */}
            <section className="py-12 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose {data.name}?</h2>
                        <p className="text-lg text-slate-600">Discover the unique advantages and world-class opportunities awaiting you globally.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.why.map((item) => (
                            <div key={item.title} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Section: Top Universities */}
            <section className="py-24 mt-12 bg-white border-y border-slate-200 overflow-hidden shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 space-y-8 relative z-10">
                            <div>
                                <span className="text-brand font-bold tracking-wider text-sm uppercase mb-3 block">Prestigious Institutions</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Top Universities in {data.name}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Gain admission into globally recognized institutions. We partner closely with the best universities in {data.name} to ensure your degree carries immense weight anywhere in the world.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {data.universities.map((uni) => (
                                    <div key={uni.name} className="flex justify-between items-center p-5 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:bg-emerald-50/50 hover:border-emerald-200 transition-all group">
                                        <div>
                                            <p className="text-slate-900 font-bold text-base group-hover:text-emerald-700 transition-colors">{uni.name}</p>
                                            <p className="text-emerald-600 text-sm mt-1 font-semibold">{uni.type}</p>
                                        </div>
                                        <span className="bg-white border text-center border-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-full shadow-sm ml-4 whitespace-nowrap">
                                            {uni.rank}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/universities" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors mt-4">
                                Browse all universities <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Image Split */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-10">
                                    <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed italic drop-shadow-md">
                                        "Studying in {data.name} was the best decision of my life. The quality of education and industry exposure is truly unmatched."
                                    </blockquote>
                                </div>
                            </div>
                            {/* Accent Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/50 to-blue-50/50 rounded-full -z-10 blur-3xl opacity-60 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Split Section: Cost Overview (Reversed Split) */}
            <section className="py-24 bg-transparent overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                        {/* Image Split Reversed */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/4] rounded-[2rem] bg-slate-900 overflow-hidden shadow-2xl relative group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" alt="Finance Calculator" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-10">
                                    <div>
                                        <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mb-6 text-xl shadow-lg shadow-brand/30">💼</div>
                                        <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-sm">Transparent Planning</h3>
                                        <p className="text-slate-300 drop-shadow-sm">We help you secure scholarships, manage forex, and plan your blocked accounts seamlessly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-200/50 rounded-full -z-10 blur-3xl pointer-events-none" />
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 space-y-8 relative z-10">
                            <div>
                                <span className="text-brand font-bold tracking-wider text-sm uppercase mb-3 block">Financial Summary</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Investment Overview</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                    Studying abroad is a significant investment. Here's a transparent breakdown of the estimated costs associated with studying in {data.name}.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                                    <h4 className="font-bold text-slate-900">Estimated Annual Expenses</h4>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {data.costs.map((row) => (
                                        <div key={row.item} className="flex justify-between items-center px-6 py-5 hover:bg-slate-50/50 transition-colors">
                                            <span className="text-slate-700 font-medium">{row.item}</span>
                                            <span className="text-emerald-600 font-bold">{row.range}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 italic mt-4 px-2">
                                * Costs are estimates and subject to currency fluctuations and specific university fees.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium Call to Action */}
            <section className="py-20 mt-10 mb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Start Your Journey to {data.name}</h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                Stop guessing your admission chances. Speak to our senior counselors today for a data-driven profile evaluation and roadmap.
                            </p>
                            <Link href="/book-consultation">
                                <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold h-14 px-10 text-lg rounded-xl shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                                    Book Your Strategy Session Now
                                </button>
                            </Link>
                        </div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
}
