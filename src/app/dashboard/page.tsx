"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { User, FileText, MessageSquare, Calendar, LogOut, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        window.location.href = '/auth/sign-in';
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <div className="w-full lg:w-64 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit shrink-0">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">John Doe</h3>
                            <p className="text-xs text-gray-500">Student ID: #9824</p>
                        </div>
                    </div>

                    <nav className="space-y-2 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        <button onClick={() => setActiveTab('overview')} className={`shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${activeTab === 'overview' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                            <User className="w-5 h-5" /> Overview
                        </button>
                        <button onClick={() => setActiveTab('applications')} className={`shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${activeTab === 'applications' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                            <FileText className="w-5 h-5" /> My Applications
                        </button>
                        <button onClick={() => setActiveTab('messages')} className={`shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${activeTab === 'messages' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                            <MessageSquare className="w-5 h-5" /> Messages
                            <span className="lg:ml-auto ml-2 bg-gold text-white text-xs px-2 py-0.5 rounded-full">1</span>
                        </button>
                        <button onClick={() => setActiveTab('appointments')} className={`shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${activeTab === 'appointments' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                            <Calendar className="w-5 h-5" /> Appointments
                        </button>
                        <div className="hidden lg:block pt-6 mt-6 border-t border-gray-100">
                            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-red-600 hover:bg-red-50">
                                <LogOut className="w-5 h-5" /> Logout
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 w-full">
                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome back, John!</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="text-gray-500 text-sm font-medium mb-2">Profile Completeness</h4>
                                    <div className="flex items-end gap-3">
                                        <span className="text-3xl font-bold text-gray-900">85%</span>
                                        <span className="text-sm text-gold font-medium mb-1 line-clamp-1">Missing Passport</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4">
                                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="text-gray-500 text-sm font-medium mb-2">Target Destination</h4>
                                    <div className="flex items-center gap-3">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="https://flagcdn.com/w40/sg.png" alt="Singapore flag" className="w-8 rounded" />
                                        <span className="text-xl font-bold text-gray-900">Singapore</span>
                                    </div>
                                    <button onClick={() => setActiveTab('applications')} className="text-primary text-sm font-medium mt-4 hover:underline">View Universities</button>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="text-gray-500 text-sm font-medium mb-2">Application Status</h4>
                                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-semibold mt-1">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                                        In Review (NUS)
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-8">
                                <h3 className="font-bold text-lg mb-6 text-gray-900">Next Steps</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Consultation Completed</h4>
                                            <p className="text-sm text-gray-600">You completed your initial profile evaluation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 border border-gold/40 rounded-xl bg-gold/5">
                                        <div className="w-6 h-6 rounded-full border-2 border-gold flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Upload Missing Documents</h4>
                                            <p className="text-sm text-gray-600 mb-3">Please upload your valid passport bio-page.</p>
                                            <Button size="sm" variant="secondary" className="shadow-sm">Upload Document</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'applications' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
                                <Button size="sm" variant="outline">+ New Application</Button>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4 hover:bg-gray-50 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">National University of Singapore (NUS)</h3>
                                        <p className="text-sm text-gray-500">Master of Computing • Fall 2024</p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit sm:w-auto">In Review</span>
                                        <span className="text-xs text-gray-400">Submitted: Oct 12, 2023</span>
                                    </div>
                                </div>

                                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4 hover:bg-gray-50 transition-colors opacity-70">
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">Nanyang Technological University (NTU)</h3>
                                        <p className="text-sm text-gray-500">MSc Artificial Intelligence • Fall 2024</p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-2">
                                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit sm:w-auto">Drafting</span>
                                        <span className="text-xs text-gray-400">Missing SOP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-[600px] flex flex-col animate-in fade-in duration-500">
                            <div className="p-4 md:p-6 border-b border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900">Your Counselor: Sarah Smith</h2>
                            </div>
                            <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
                                <div className="flex gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs md:text-sm shrink-0">SS</div>
                                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 md:p-4 text-sm text-gray-800 max-w-[85%] md:max-w-[75%]">
                                        Hi John! We have reviewed your SOP draft. It looks great, but we need to add a bit more detail about your project experience. Could you revise paragraph 3?
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs md:text-sm shrink-0">JD</div>
                                    <div className="bg-primary rounded-2xl rounded-tr-none p-3 md:p-4 text-sm text-white max-w-[85%] md:max-w-[75%]">
                                        Sure, I will send the updated version by tonight.
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Type your message..." className="flex-1 border-gray-300 rounded-xl p-3 border focus:ring-primary focus:border-primary text-sm shadow-sm" />
                                    <Button>Send</Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'appointments' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Appointment History</h2>
                                <Link href="/book-consultation">
                                    <Button size="sm">Book New</Button>
                                </Link>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Initial Profile Evaluation</h4>
                                            <p className="text-sm text-gray-500">Video Call with Sarah Smith</p>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <div className="font-semibold text-gray-900">Oct 10, 2023</div>
                                        <div className="text-sm text-gray-500">10:00 AM EST</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
                        <button onClick={handleLogout} className="w-full flex justify-center items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100">
                            <LogOut className="w-5 h-5" /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
