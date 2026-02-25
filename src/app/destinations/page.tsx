import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

const destinations = [
    {
        name: 'Singapore',
        slug: 'singapore',
        flag: '🇸🇬',
        desc: 'A global hub for education and innovation with world-class universities and a booming economy.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Malaysia',
        slug: 'malaysia',
        flag: '🇲🇾',
        desc: 'High-quality international degrees at competitive costs in a culturally diverse environment.',
        image: 'https://images.unsplash.com/photo-1596422846543-74c6c221b61c?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Germany',
        slug: 'germany',
        flag: '🇩🇪',
        desc: 'Engineering excellence with minimal tuition fees and a robust industrial economy.',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'United Kingdom',
        slug: 'uk',
        flag: '🇬🇧',
        desc: 'Historic prestige and fast-tracked master\'s programs in a global cultural hub.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Canada',
        slug: 'canada',
        flag: '🇨🇦',
        desc: 'Welcoming and diverse with clear pathways to permanent residency and post-study work.',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Australia',
        slug: 'australia',
        flag: '🇦🇺',
        desc: 'Top global rankings, brilliant weather, and excellent student lifestyle.',
        image: 'https://images.unsplash.com/photo-1523482580662-fcc65ba5ab07?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'United States',
        slug: 'usa',
        flag: '🇺🇸',
        desc: 'Innovation leader with flexible curriculums and massive research budgets.',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Ireland',
        slug: 'ireland',
        flag: '🇮🇪',
        desc: 'The tech headquarters of Europe offering English-taught degrees and strong job prospects.',
        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'New Zealand',
        slug: 'new-zealand',
        flag: '🇳🇿',
        desc: 'High quality of life and focus on practical, research-based learning.',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&q=80&w=800'
    }
];

export default function DestinationsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 text-white overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")' }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Global Study Opportunities</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80 font-light">
                        Discover world-class education pathways across our 9 premium study destinations.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest) => (
                            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-2xl">
                                            {dest.flag}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                            Study in {dest.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                            {dest.desc}
                                        </p>
                                        <div className="mt-auto">
                                            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 flex items-center justify-between">
                                                Explore Pathway <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
