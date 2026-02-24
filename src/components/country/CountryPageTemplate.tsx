import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Building2, Banknote, MapPin, GraduationCap, Briefcase, FileText } from 'lucide-react';

interface CountryData {
    name: string;
    image: string;
    heroDesc: string;
    universities: string[];
    tuitionFees: string;
    livingCost: string;
    entryReq: string;
    visaProcess: string;
    workOps: string;
}

export function CountryPageTemplate({ data }: { data: CountryData }) {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.image})` }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Why Study in {data.name}?</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
                        {data.heroDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/book-consultation">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-bold shadow-xl">
                                Book Consultation for {data.name}
                            </Button>
                        </Link>
                        <Link href="/#eligibility">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                                Check Eligibility
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Top Universities</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                {data.universities.map((uni, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-gold mr-2">•</span> {uni}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Banknote className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Tuition Fees</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{data.tuitionFees}</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Living Cost</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{data.livingCost}</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Entry Requirements</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{data.entryReq}</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Visa Process</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{data.visaProcess}</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Work Opportunities</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{data.workOps}</p>
                        </div>
                    </div>

                    <div className="bg-primary rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Apply to {data.name}?</h2>
                        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto relative z-10">
                            Our expert counselors are ready to help you navigate the entire admission and visa process.
                        </p>
                        <div className="flex justify-center gap-4 relative z-10">
                            <Link href="/book-consultation">
                                <Button size="lg" variant="secondary" className="font-bold px-10 py-6 text-lg shadow-xl">Apply Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
