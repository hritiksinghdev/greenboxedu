import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rahul S.",
        country: "Germany",
        program: "MSc Informatik, TU Munich",
        quote: "Green Box made the impossible possible. Their precision in sorting out my German public university application and blocked account saved me months of stress.",
        image: "https://ui-avatars.com/api/?name=Rahul+S&background=C6A75E&color=fff",
    },
    {
        name: "Priya M.",
        country: "Singapore",
        program: "Master of Finance, NUS",
        quote: "From profiling to visa, their process is incredibly transparent. Getting into NUS felt seamless with their expert counselors backing every step.",
        image: "https://ui-avatars.com/api/?name=Priya+M&background=0F3D2E&color=fff",
    },
    {
        name: "Anand K.",
        country: "Australia",
        program: "Master of Data Science, UniMelb",
        quote: "Their pre-departure briefing was a lifesaver. I landed in Melbourne already knowing how to handle my accommodation and bank setup.",
        image: "https://ui-avatars.com/api/?name=Anand+K&background=0F3D2E&color=fff",
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
                    <p className="text-lg text-gray-600">Don't take our word for it. Here is what our successfully placed students have to say.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100/50 relative flex flex-col h-full">
                            <div className="text-gold text-5xl font-serif absolute -top-2 left-6 opacity-30">"</div>
                            <p className="text-gray-700 italic relative z-10 mb-8 pt-6 leading-relaxed flex-grow">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full shadow-sm ring-2 ring-white" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{testimonial.program} • <span className="text-primary font-semibold">{testimonial.country}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
