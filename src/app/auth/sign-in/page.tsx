"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function SignIn() {
    const [loading, setLoading] = useState(false);

    const handleSignIn = (e: React.FormEvent) => {
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
                <h2 className="text-3xl font-bold text-primary mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-500 text-center mb-8">Sign in to your student portal</p>

                <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input type="email" placeholder="student@example.com" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-700">Password</label>
                            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                        </div>
                        <input type="password" placeholder="••••••••" className="w-full border-gray-300 rounded-xl shadow-sm focus:ring-primary focus:border-primary p-3 border bg-gray-50 hover:bg-white transition-colors" required />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg shadow-md hover:shadow-xl transition-all" disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                    Don't have an account? <Link href="/auth/sign-up" className="text-primary font-semibold hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
