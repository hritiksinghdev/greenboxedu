"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 pb-24 bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full border border-gray-100">
                <h2 className="text-3xl font-bold text-primary mb-2 text-center">Create Account</h2>
                <p className="text-gray-500 text-center mb-8">Track your university applications</p>

                <form onSubmit={handleSignUp} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg mt-4 shadow-md hover:shadow-xl transition-all" disabled={loading}>
                        {loading ? "Creating Account..." : "Sign Up"}
                    </Button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account? <Link href="/auth/sign-in" className="text-primary font-semibold hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
