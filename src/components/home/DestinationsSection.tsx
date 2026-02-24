import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const destinations = [
    { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800", highlight: "Asia's Education Hub" },
    { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-74c6c221b61c?auto=format&fit=crop&q=80&w=800", highlight: "Affordable Quality" },
    { name: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800", highlight: "Engineering Excellence" },
    { name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", highlight: "Historic Prestige" },
    { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800", highlight: "Welcoming & Diverse" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1523482580662-fcc65ba5ab07?auto=format&fit=crop&q=80&w=800", highlight: "Top Global Rankings" },
    { name: "USA", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800", highlight: "Innovation Leader" },
    { name: "Ireland", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800", highlight: "Tech Headquarters" },
    { name: "New Zealand", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&q=80&w=800", highlight: "High Quality of Life" },
];

export default function DestinationsSection() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Top Study Destinations</h2>
                        <p className="text-lg text-gray-600">Explore world-class universities in countries that offer the best return on your educational investment.</p>
                    </div>
                    <Link href="/destinations" className="hidden md:flex items-center text-primary font-semibold hover:text-gold transition-colors mb-2">
                        View All Countries <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <Link key={dest.name} href={`/study-in-${dest.name.toLowerCase().replace(' ', '-')}`}>
                            <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-md hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/10 transition-all duration-500 z-10" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={dest.image}
                                    alt={`Study in ${dest.name}`}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent">
                                    <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
                                        {dest.highlight}
                                    </span>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold hover:scale-110 transition-all">
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="/destinations" className="flex items-center text-primary font-semibold hover:text-gold transition-colors">
                        View All Countries <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
