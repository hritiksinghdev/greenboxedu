"use client";

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });

    const destinations = ['Singapore', 'Malaysia', 'Germany', 'Australia', 'Canada', 'United Kingdom', 'Other'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! We will reach out to you shortly.');
        setForm({ name: '', email: '', phone: '', destination: '', message: '' });
    };

    return (
        <div className="bg-transparent min-h-screen">
            <PageHero
                badge="Get In Touch"
                title={<>Let's Start Your <span className="text-[#10b981]">Journey</span></>}
                subtitle="Speak to a study abroad expert. Free consultation, no obligation."
            />

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: 'ðŸ“ž', label: 'Phone', value: '+1-800-STUDY-ABROAD', sub: 'Monâ€“Sat, 9AMâ€“6PM' },
                                    { icon: 'ðŸ“§', label: 'Email', value: 'info@greenboxedu.com', sub: 'We reply within 24 hours' },
                                    { icon: 'ðŸ“', label: 'Office', value: 'Greenbox Edu HQ', sub: 'Kuala Lumpur, Malaysia' },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                                        <div className="text-2xl mt-0.5">{item.icon}</div>
                                        <div>
                                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-slate-900 font-semibold">{item.value}</p>
                                            <p className="text-slate-500 text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-8 rounded-xl border border-slate-200 overflow-hidden h-52 bg-white shadow-sm flex items-center justify-center">
                                <p className="text-white/30 text-sm">Map embed placeholder</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {[
                                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+60 12 345 6789' },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label className="block text-slate-500 text-sm font-medium mb-2">{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={form[field.name as keyof typeof form]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            required
                                            className="w-full bg-white shadow-sm border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#10b981] transition-colors text-sm"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-slate-500 text-sm font-medium mb-2">Preferred Destination</label>
                                    <select
                                        name="destination"
                                        value={form.destination}
                                        onChange={handleChange}
                                        className="w-full bg-[#111827] border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#10b981] transition-colors text-sm"
                                    >
                                        <option value="">Select a destination</option>
                                        {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-slate-500 text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your goals..."
                                        rows={4}
                                        className="w-full bg-white shadow-sm border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#10b981] transition-colors text-sm resize-none"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold h-12 text-base border-none hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] transition-all">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

