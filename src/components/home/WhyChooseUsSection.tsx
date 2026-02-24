import { GraduationCap, Landmark, Briefcase, FileCheck, Users, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: "Expert Counseling",
        description: "Personalized guidance to match your career goals with the right program.",
        icon: GraduationCap,
    },
    {
        title: "University Shortlisting",
        description: "Data-driven selection of top-tier universities in Singapore, Malaysia & Germany.",
        icon: Landmark,
    },
    {
        title: "Visa Guidance",
        description: "99% visa success rate with our meticulous documentation review process.",
        icon: FileCheck,
    },
    {
        title: "Scholarship Assistance",
        description: "Maximize your chances of securing merit and need-based financial aid.",
        icon: Briefcase,
    },
    {
        title: "Pre-Departure Support",
        description: "Accommodation booking, forex, and travel arrangements made easy.",
        icon: Users, // Changed from PlaneTakeoff
    },
    {
        title: "Alumni Network",
        description: "Connect with current students and alumni in your target country.",
        icon: ShieldCheck, // Changed from UserCheck
    }
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Green Box</h2>
                    <p className="text-lg text-gray-600">
                        We don't just process applications; we engineer your entire international career pathway.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
