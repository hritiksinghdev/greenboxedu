"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, CheckCircle2, User, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function BookConsultation() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            if (!date || !time) return alert("Please select a date and time");
            setStep(2);
        } else {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20 px-4">
                <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-gray-100">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Your consultation is scheduled for <strong>{date}</strong> at <strong>{time}</strong>. We have sent a calendar invite to your email.
                    </p>
                    <Link href="/">
                        <Button className="w-full text-lg shadow-md py-6">Return to Homepage</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-4">Book Your Free Consultation</h1>
                    <p className="text-lg text-gray-600">Take the first step towards your international education journey.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="flex border-b border-gray-100">
                        <div className={`w-1/2 py-4 text-center font-semibold transition-colors ${step === 1 ? 'text-primary border-b-2 border-primary' : 'text-gray-400 bg-gray-50'}`}>
                            1. Select Date & Time
                        </div>
                        <div className={`w-1/2 py-4 text-center font-semibold transition-colors ${step === 2 ? 'text-primary border-b-2 border-primary' : 'text-gray-400 bg-gray-50'}`}>
                            2. Your Details
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <Calendar className="w-5 h-5 mr-2 text-primary" /> Select a Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-colors bg-gray-50 hover:bg-white cursor-pointer"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <Clock className="w-5 h-5 mr-2 text-primary" /> Select a Time
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {timeSlots.map((slot) => (
                                            <div
                                                key={slot}
                                                onClick={() => setTime(slot)}
                                                className={`p-3 text-center rounded-xl cursor-pointer border-2 transition-all font-medium ${time === slot ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-300 text-gray-600'} `}
                                            >
                                                {slot}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button type="submit" size="lg" className="w-full text-lg py-6 shadow-md hover:shadow-xl transition-all">Continue to Details</Button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex justify-between items-center mb-8">
                                    <div className="text-primary font-medium">
                                        {date} at {time}
                                    </div>
                                    <button type="button" onClick={() => setStep(1)} className="text-sm text-primary underline hover:text-primary-dark">Change</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                            <User className="w-4 h-4 mr-2" /> Full Name
                                        </label>
                                        <input type="text" placeholder="John Doe" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:border-gray-400 transition-colors" required />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                            <Mail className="w-4 h-4 mr-2" /> Email Address
                                        </label>
                                        <input type="email" placeholder="john@example.com" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:border-gray-400 transition-colors" required />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                            <Phone className="w-4 h-4 mr-2" /> Phone Number
                                        </label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:border-gray-400 transition-colors" required />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                            <MapPin className="w-4 h-4 mr-2" /> Destination of Interest
                                        </label>
                                        <select className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:border-gray-400 transition-colors" required>
                                            <option value="">Select Country</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="USA">USA</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6 flex gap-4">
                                    <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="w-1/3 py-6 hidden md:block border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Back</Button>
                                    <Button type="submit" size="lg" className="flex-1 text-lg py-6 shadow-md hover:shadow-xl transition-all">Confirm Booking</Button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
