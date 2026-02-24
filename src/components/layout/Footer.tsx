import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
                    <div className="col-span-1 md:col-span-1 border-r border-primary-foreground/10 pr-8">
                        <div className="mb-4 flex items-baseline gap-1">
                            <h3 className="text-2xl font-extrabold tracking-tight">Greenbox</h3>
                            <span className="text-xl font-medium text-[#10b981]">Edu</span>
                        </div>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                            Your premium, end-to-end partner for studying abroad in Singapore, Malaysia, Germany, and beyond. We build confidence and clear pathways.
                        </p>
                        <div className="flex space-x-4">
                            {/* Placeholder for social icons */}
                            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                                <span className="text-sm">In</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                                <span className="text-sm">Fb</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                                <span className="text-sm">Ig</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gold">Top Destinations</h4>
                        <ul className="space-y-3 text-primary-foreground/80 text-sm font-medium">
                            <li><Link href="/study-in-singapore" className="hover:text-gold transition-colors">Study in Singapore</Link></li>
                            <li><Link href="/study-in-malaysia" className="hover:text-gold transition-colors">Study in Malaysia</Link></li>
                            <li><Link href="/study-in-germany" className="hover:text-gold transition-colors">Study in Germany</Link></li>
                            <li><Link href="/study-in-uk" className="hover:text-gold transition-colors">Study in UK</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gold">Quick Links</h4>
                        <ul className="space-y-3 text-primary-foreground/80 text-sm font-medium">
                            <li><Link href="/#eligibility" className="hover:text-gold transition-colors">Check Eligibility</Link></li>
                            <li><Link href="/auth/sign-in" className="hover:text-gold transition-colors">Student Dashboard</Link></li>
                            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gold">Get In Touch</h4>
                        <div className="space-y-4 text-sm text-primary-foreground/80">
                            <p className="flex items-start">
                                <span className="mr-3 mt-1">📞</span>
                                +1-800-STUDY-ABROAD
                            </p>
                            <p className="flex items-start">
                                <span className="mr-3 mt-1">📧</span>
                                info@greenboxedu.com
                            </p>
                            <div className="mt-6">
                                <Link href="/book-consultation">
                                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-primary">
                                        Book Consultation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Greenbox Edu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
