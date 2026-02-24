import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function FinalCtaSection() {
    return (
        <section className="py-20 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Global Journey Today</h2>
                <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop dreaming about studying abroad and start planning. Book a free consultation with our expert counselors to map out your future.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/book-consultation" className="w-full sm:w-auto">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-bold shadow-xl shadow-gold/20 text-lg py-7 px-10 hover:scale-105 transition-transform">
                            Book Your Free Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
