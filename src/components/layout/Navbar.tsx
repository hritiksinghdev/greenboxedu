"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

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
            { label: 'Singapore', href: '/study-in-singapore' },
            { label: 'Malaysia', href: '/study-in-malaysia' },
            { label: 'Germany', href: '/study-in-germany' },
            { label: 'Australia', href: '/study-in-australia' },
            { label: 'Canada', href: '/study-in-canada' },
            { label: 'View All Destinations →', href: '/destinations', separator: true },
        ],
    },
    {
        label: 'Universities',
        dropdown: [
            { label: 'Partner Universities', href: '/universities/partners' },
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
            { label: 'Application Support', href: '/services/application' },
            { label: 'Visa Assistance', href: '/services/visa' },
            { label: 'Scholarship Guidance', href: '/services/scholarships' },
            { label: 'Pre-Departure Support', href: '/services/pre-departure' },
        ],
    },
    { label: 'Scholarships', href: '/scholarships' },
    {
        label: 'About',
        dropdown: [
            { label: 'About Greenbox Edu', href: '/about' },
            { label: 'Why Choose Us', href: '/about/why-us' },
            { label: 'Success Stories', href: '/about/success-stories' },
            { label: 'Our Team', href: '/about/team' },
        ],
    },
    { label: 'Contact', href: '/contact' },
];

function NavDropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
    return (
        <div
            className="absolute left-0 top-full pt-2 w-56 z-50"
            style={{
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transform: open ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0.18s',
                pointerEvents: open ? 'auto' : 'none',
            }}
        >
            <div className="bg-[#0B1220] border border-white/10 shadow-2xl rounded-lg overflow-hidden py-1">
                {items.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${item.separator
                                ? 'text-[#10b981] font-semibold border-t border-white/10 mt-1 pt-3 hover:bg-white/5'
                                : 'text-white/75 hover:text-white hover:bg-white/5'
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

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 120);
    };

    if (!item.dropdown) {
        return (
            <Link
                href={item.href!}
                className="relative text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 group"
            >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#10b981] group-hover:w-full transition-all duration-250 ease-out rounded-full" />
            </Link>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="relative text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1 group">
                {item.label}
                <svg
                    className="w-3.5 h-3.5 opacity-60 transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 h-[1.5px] bg-[#10b981] rounded-full transition-all duration-250 ease-out" style={{ width: open ? '100%' : '0%' }} />
            </button>
            <NavDropdown items={item.dropdown} open={open} />
        </div>
    );
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(11,15,26,0.98)' : 'rgba(11,15,26,0.88)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[72px]">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex flex-col items-start group">
                            <div className="text-[2rem] font-extrabold tracking-[-0.04em] leading-none mb-[0.05rem] flex items-center gap-[0.05em]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/greenbox-mark.svg" width="28" alt="Greenbox Edu Logo" className="translate-y-[-0.04em]" />
                                <span className="text-white tracking-[-0.01em] font-[900]">reenbox</span>
                                <span className="text-[#10b981] font-[500] text-[1.5rem] tracking-[-0.01em] ml-[0.12em]">Edu</span>
                            </div>
                            <div className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase ml-[1.85rem] mt-[0.05rem]">
                                Education Pathway
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <NavItemComponent key={item.label} item={item} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <Link href="/book-consultation">
                            <Button
                                variant="secondary"
                                className="bg-[#10b981] text-white hover:bg-[#059669] font-bold text-sm px-5 py-2.5 border-none transition-all duration-300 shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                            >
                                Book Free Consultation
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white hover:text-[#10b981] transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-4 border-t border-white/10 mt-1">
                        <div className="flex flex-col space-y-1 pt-3">
                            {navItems.map((item) =>
                                item.href ? (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-white/75 hover:text-white px-2 py-2 text-sm font-medium transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <div key={item.label}>
                                        <p className="text-white/40 px-2 py-1 text-xs uppercase tracking-widest font-bold mt-2">
                                            {item.label}
                                        </p>
                                        {item.dropdown?.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="text-white/60 hover:text-white px-4 py-1.5 text-sm transition-colors block"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            )}
                            <div className="pt-3">
                                <Link href="/book-consultation" onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full bg-[#10b981] text-white hover:bg-[#059669] font-bold border-none">
                                        Book Free Consultation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
