export default function ProcessSection() {
    const steps = [
        { num: "01", title: "Eligibility Evaluation", desc: "We assess your profile, academic background, and career aspirations to determine the best-fit programs." },
        { num: "02", title: "University Shortlisting", desc: "Data-backed selection of universities that align with your requirements and maximize admission chances." },
        { num: "03", title: "Application Filing", desc: "Meticulous preparation of SOPs, LORs, and application forms to ensure zero errors." },
        { num: "04", title: "Visa Processing", desc: "Comprehensive guidance through the complex visa documentation and interview preparation." },
        { num: "05", title: "Pre-Departure Support", desc: "Assistance with accommodation, forex, and networking with current students before you fly." },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our 5-Step Admission Process</h2>
                    <p className="text-lg text-gray-600">A structured, transparent pathway from your first consultation to your first day on campus.</p>
                </div>

                <div className="relative max-w-5xl mx-auto pb-10">
                    {/* Vertical line connecting steps */}
                    <div className="absolute left-10 md:left-1/2 top-8 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="absolute left-10 md:left-1/2 w-14 h-14 bg-gold rounded-full border-4 border-white shadow-md flex items-center justify-center transform -translate-x-1/2 z-10">
                                    <span className="text-white text-lg font-bold">{step.num}</span>
                                </div>

                                <div className="ml-24 md:ml-0 md:w-1/2 md:px-12 w-full">
                                    <div className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative`}>
                                        <div className={`hidden md:block absolute top-1/2 -mt-3 w-6 h-6 bg-white border-t border-r border-gray-100 transform rotate-45 ${index % 2 !== 0 ? '-left-3 border-l-0 border-b-0' : '-right-3 border-b-0 border-l-0 border-r-transparent border-t-transparent'}`} style={index % 2 === 0 ? { borderRightColor: '#f3f4f6', borderTopColor: '#f3f4f6' } : { borderLeftColor: '#f3f4f6', borderBottomColor: '#f3f4f6' }}></div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
