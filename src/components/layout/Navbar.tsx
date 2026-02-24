import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col items-start group">
                            <div className="text-[2rem] font-extrabold tracking-[-0.04em] leading-none mb-[0.1rem] flex items-center gap-[0.05em]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/greenbox-mark.svg" width="28" alt="Greenbox Logo" className="translate-y-[-0.04em]" />
                                <span className="text-white tracking-[-0.01em] font-[900]">reenbox</span>
                            </div>
                            <div className="text-[11px] font-bold tracking-[0.15em] text-white/60 uppercase ml-[1.85rem] mt-[0.05rem]">
                                Education Pathway
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white/80 hover:text-white transition-colors font-medium">Home</Link>

                        <div className="relative group">
                            <button className="text-white/80 hover:text-white transition-colors flex items-center font-medium">
                                Destinations
                                <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-[#0F1423] border border-white/10 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <Link href="/study-in-singapore" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">Singapore</Link>
                                <Link href="/study-in-malaysia" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">Malaysia</Link>
                                <Link href="/study-in-germany" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">Germany</Link>
                                <Link href="/destinations" className="block px-4 py-2 text-sm text-brand font-medium border-t border-white/10 hover:bg-white/5">View All</Link>
                            </div>
                        </div>

                        <Link href="/auth/sign-in" className="text-white/80 hover:text-white transition-colors font-medium">Sign In</Link>
                        <Link href="/book-consultation">
                            <Button variant="secondary" className="bg-brand text-navy hover:bg-[#b0f560] font-bold shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 transition-all border-none">Book Consultation</Button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        {/* Mobile menu button to be implemented */}
                        <button className="text-white hover:text-brand">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
