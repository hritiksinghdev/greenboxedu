"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type DropdownItem = {
    label: string;
    href: string;
    separator?: boolean;
};

type NavItem = {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Destinations',
        dropdown: [
            { label: 'Singapore', href: '/destinations/singapore' },
            { label: 'Malaysia', href: '/destinations/malaysia' },
            { label: 'Germany', href: '/destinations/germany' },
            { label: 'Australia', href: '/destinations/australia' },
            { label: 'Canada', href: '/destinations/canada' },
            { label: 'View All Destinations →', href: '/destinations', separator: true },
        ],
    },
    {
        label: 'Universities',
        dropdown: [
            { label: 'Partner Universities', href: '/universities/partnered' },
            { label: 'Top Ranked Universities', href: '/universities/top-ranked' },
            { label: 'Private Institutions', href: '/universities/private' },
            { label: 'Compare Universities', href: '/universities/compare' },
        ],
    },
    {
        label: 'Services',
        dropdown: [
            { label: 'Eligibility Assessment', href: '/services/eligibility' },
            { label: 'University Shortlisting', href: '/services/shortlisting' },
            { label: 'Application Support', href: '/services/application-support' },
            { label: 'Visa Assistance', href: '/services/visa' },
            { label: 'Scholarship Guidance', href: '/services/scholarship-guidance' },
            { label: 'Pre-Departure Support', href: '/services/pre-departure' },
        ],
    },
    { label: 'Scholarships', href: '/scholarships' },
    {
        label: 'About',
        dropdown: [
            { label: 'About Greenbox Edu', href: '/about' },
            { label: 'Why Choose Us', href: '/about/why-choose-us' },
            { label: 'Success Stories', href: '/about/success-stories' },
            { label: 'Our Team', href: '/about/team' },
        ],
    },
    { label: 'Contact', href: '/contact' },
];

function NavDropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
    return (
        <div
            className="absolute left-0 top-full pt-3 w-60 z-50"
            style={{
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transform: open ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                pointerEvents: open ? 'auto' : 'none',
            }}
        >
            <div
                style={{
                    background: 'rgba(8, 14, 28, 0.82)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
                    overflow: 'hidden',
                    padding: '6px',
                }}
            >
                {items.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-all duration-150 ${item.separator
                            ? 'text-[#10b981] font-semibold border-t border-white/[0.06] mt-1 pt-3 hover:bg-[#10b981]/10'
                            : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function NavItemComponent({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };
    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 140);
    };

    if (!item.dropdown) {
        return (
            <Link
                href={item.href!}
                className="relative text-white/65 hover:text-white text-[0.8125rem] font-medium transition-colors duration-200 group py-1"
            >
                {item.label}
                <span className="absolute -bottom-0 left-0 w-0 h-[1.5px] bg-[#10b981] group-hover:w-full transition-all duration-250 ease-out rounded-full" />
            </Link>
        );
    }

    return (
        <div
            className="relative py-1"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <button className="relative text-white/65 hover:text-white text-[0.8125rem] font-medium transition-colors duration-200 flex items-center gap-1 group">
                {item.label}
                <svg
                    className="w-3 h-3 opacity-50 transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                    className="absolute -bottom-0 left-0 h-[1.5px] bg-[#10b981] rounded-full transition-all duration-250 ease-out"
                    style={{ width: open ? '100%' : '0%' }}
                />
            </button>
            <NavDropdown items={item.dropdown} open={open} />
        </div>
    );
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <nav
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    background: scrolled
                        ? 'rgba(8, 14, 28, 0.88)'
                        : 'rgba(10, 18, 32, 0.65)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '18px',
                    boxShadow: scrolled
                        ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04) inset'
                        : '0 4px 24px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
                    transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                <div className="flex justify-between items-center h-[62px] px-5 lg:px-7">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-start flex-shrink-0 group">
                        <div className="flex items-center gap-[0.05em] leading-none">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/greenbox-mark.svg" width="24" alt="Greenbox Edu" className="translate-y-[-0.04em]" />
                            <span className="text-white font-[900] text-[1.55rem] tracking-[-0.03em]">reenbox</span>
                            <span className="text-[#10b981] font-[500] text-[1.2rem] tracking-[-0.01em] ml-[0.1em]">Edu</span>
                        </div>
                        <div className="text-[9px] font-bold tracking-[0.2em] text-white/35 uppercase ml-[1.55rem]">
                            Education Pathway
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <NavItemComponent key={item.label} item={item} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <Link href="/book-consultation">
                            <button
                                style={{
                                    background: '#10b981',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    padding: '0.5rem 1.1rem',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                                    boxShadow: '0 2px 12px rgba(16,185,129,0.25)',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={e => {
                                    (e.target as HTMLElement).style.background = '#059669';
                                    (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(16,185,129,0.45)';
                                    (e.target as HTMLElement).style.transform = 'scale(1.03)';
                                }}
                                onMouseLeave={e => {
                                    (e.target as HTMLElement).style.background = '#10b981';
                                    (e.target as HTMLElement).style.boxShadow = '0 2px 12px rgba(16,185,129,0.25)';
                                    (e.target as HTMLElement).style.transform = 'scale(1)';
                                }}
                            >
                                Book Free Consultation
                            </button>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-white/70 hover:text-white transition-colors p-1"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div
                        className="md:hidden pb-4 px-5 border-t"
                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                        <div className="flex flex-col space-y-1 pt-3">
                            {navItems.map((item) =>
                                item.href ? (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-white/70 hover:text-white px-2 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <div key={item.label}>
                                        <p className="text-white/30 px-2 py-1 text-[10px] uppercase tracking-widest font-bold mt-3">
                                            {item.label}
                                        </p>
                                        {item.dropdown?.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="text-white/55 hover:text-white px-4 py-1.5 text-sm transition-colors block rounded-lg hover:bg-white/5"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            )}
                            <div className="pt-4">
                                <Link href="/book-consultation" onClick={() => setMobileOpen(false)}>
                                    <button className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm py-2.5 rounded-lg border-none transition-all">
                                        Book Free Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
