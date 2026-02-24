"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function EligibilitySection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call and redirect
        setSubmitted(true);
        setTimeout(() => {
            alert("Eligibility request submitted! Redirecting to Thank You page...");
            setSubmitted(false);
        }, 1500);
    };

    return (
        <section id="eligibility" className="py-24 bg-gray-50 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-primary mb-4">Quick Eligibility Check</h2>
                        <p className="text-gray-500 text-lg">Find out your chances of admission in 60 seconds.</p>
                    </div>

                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                            <p className="text-gray-500">Your details have been submitted successfully.</p>
                        </div>
                    ) : (
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Interest</label>
                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3 border hover:border-gray-400 transition-colors bg-gray-50" required>
                                    <option value="">Select Country</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="UK">UK</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification</label>
                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3 border hover:border-gray-400 transition-colors bg-gray-50" required>
                                    <option value="">Select Qualification</option>
                                    <option value="High School">High School (12th)</option>
                                    <option value="Bachelors">Bachelor's Degree</option>
                                    <option value="Masters">Master's Degree</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage / CGPA</label>
                                <input type="text" placeholder="e.g. 85% or 8.5 CGPA" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3 border hover:border-gray-400 transition-colors bg-gray-50" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Target Intake</label>
                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3 border hover:border-gray-400 transition-colors bg-gray-50" required>
                                    <option value="">Select Intake</option>
                                    <option value="Fall 2024">Fall 2024</option>
                                    <option value="Spring 2025">Spring 2025</option>
                                    <option value="Fall 2025">Fall 2025</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" placeholder="you@example.com" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3 border hover:border-gray-400 transition-colors bg-gray-50" required />
                            </div>
                            <div className="md:col-span-2 mt-6">
                                <Button type="submit" size="lg" className="w-full text-lg shadow-md hover:shadow-lg transition-all py-4">Check My Eligibility</Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
