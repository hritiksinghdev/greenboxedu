import Link from 'next/link';

interface PageHeroProps {
    badge?: string;
    title: React.ReactNode;
    subtitle: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export function PageHero({ badge, title, subtitle, ctaLabel, ctaHref }: PageHeroProps) {
    return (
        <section className="relative pt-40 pb-28 text-white overflow-hidden">
            {/* Deep navy gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(160deg, #0B1220 0%, #0F172A 60%, #0d1d2e 100%)',
                }}
            />

            {/* Subtle dot grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Ambient green glow — top center */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
                style={{
                    width: '700px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.09) 0%, transparent 65%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Bottom fade to page background */}
            <div
                className="absolute bottom-0 inset-x-0 h-24"
                style={{
                    background: 'linear-gradient(to bottom, transparent, var(--bg-base))',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {badge && (
                    <span
                        className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full"
                        style={{
                            background: 'rgba(16,185,129,0.1)',
                            border: '1px solid rgba(16,185,129,0.25)',
                            color: '#10b981',
                        }}
                    >
                        {badge}
                    </span>
                )}

                <h1
                    className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] font-[800] tracking-[-0.02em] leading-[1.05] mb-5 text-white"
                    style={{ fontFamily: 'var(--font-jakarta), var(--font-inter), sans-serif' }}
                >
                    {title}
                </h1>

                {/* Green accent divider */}
                <div className="flex justify-center mb-6">
                    <div
                        style={{
                            width: '48px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #10b981, #34d399)',
                            borderRadius: '2px',
                        }}
                    />
                </div>

                <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                    {subtitle}
                </p>

                {ctaLabel && ctaHref && (
                    <Link href={ctaHref}>
                        <button
                            className="inline-flex items-center justify-center font-bold text-white text-base rounded-[10px] transition-all duration-200"
                            style={{
                                background: '#10b981',
                                height: '48px',
                                padding: '0 2rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                            }}
                        >
                            {ctaLabel}
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}
