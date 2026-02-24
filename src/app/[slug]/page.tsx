import { notFound } from 'next/navigation';
import { CountryPageTemplate } from '@/components/country/CountryPageTemplate';

const countryDataMap: Record<string, any> = {
    singapore: {
        name: "Singapore",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000",
        heroDesc: "A global hub for education and innovation with world-class universities and a booming economy.",
        universities: ["National University of Singapore (NUS)", "Nanyang Technological University (NTU)", "Singapore Management University (SMU)", "INSEAD Asia Campus"],
        tuitionFees: "SGD 15,000 - SGD 50,000 per year depending on the program and institution.",
        livingCost: "SGD 1,500 - SGD 2,500 per month (Accommodation, food, transport, and personal expenses).",
        entryReq: "Strong academic record, IELTS/TOEFL scores, and SOP/LORs. Standardized tests (SAT/GRE/GMAT) for specific programs.",
        visaProcess: "Student Pass (STP) application via SOLAR system. Highly streamlined process taking 2-4 weeks. Approval is generally high for admitted students.",
        workOps: "Part-time work permitted up to 16 hours/week during term. Full-time during vacations. Strong post-study work options in tech and finance.",
    },
    malaysia: {
        name: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-74c6c221b61c?auto=format&fit=crop&q=80&w=2000",
        heroDesc: "High-quality international degrees at competitive costs in a culturally diverse environment.",
        universities: ["Universiti Malaya (UM)", "Monash University Malaysia", "University of Nottingham Malaysia", "Taylor's University"],
        tuitionFees: "MYR 20,000 - MYR 60,000 per year. Excellent value for foreign degrees.",
        livingCost: "MYR 1,500 - MYR 2,500 per month. One of the most affordable study destinations.",
        entryReq: "Recognized prior qualifications, English proficiency (IELTS/PTE). Lower barrier compared to Western destinations.",
        visaProcess: "EMGS manages all international student passes. Simple tracking system and high approval rate. Takes 4-6 weeks.",
        workOps: "Allowed to work part-time up to 20 hours/week during semester breaks. Expanding opportunities in multinational regional hubs.",
    },
    germany: {
        name: "Germany",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000",
        heroDesc: "Engineering excellence with minimal tuition fees and a robust industrial economy.",
        universities: ["Technical University of Munich (TUM)", "LMU Munich", "RWTH Aachen", "University of Heidelberg"],
        tuitionFees: "EUR 0 - EUR 1,500 per semester in public universities. Private universities charge EUR 10,000 - 20,000 per year.",
        livingCost: "EUR 850 - EUR 1,200 per month. Blocked account required for visa processing.",
        entryReq: "Excellent academics, APS certificate (for some countries), IELTS/TOEFL. German language proficiency (B1/B2) required for many undergrad courses.",
        visaProcess: "Thorough documentation needed. Requires Blocked Account, travel insurance, and admission letter. Processing takes 4-8 weeks.",
        workOps: "Post-study work visa for 18 months. Part-time work allowed for 120 full days or 240 half days per year.",
    },
    // Adding placeholder data for other requested countries
    uk: {
        name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000", heroDesc: "Historic prestige and fast-tracked master's programs in a global cultural hub.", universities: ["Oxford", "Cambridge", "Imperial College", "UCL"], tuitionFees: "£15,000 - £35,000 / year", livingCost: "£1,000 - £1,500 / month", entryReq: "Good academic standing, IELTS", visaProcess: "Tier 4 Student Visa (Points based)", workOps: "2-year Graduate Route post-study work visa."
    },
    canada: {
        name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=2000", heroDesc: "Welcoming and diverse with clear pathways to permanent residency.", universities: ["Toronto", "UBC", "McGill", "Waterloo"], tuitionFees: "CAD 20,000 - CAD 50,000 / year", livingCost: "CAD 1,200 - CAD 1,800 / month", entryReq: "Strong academics, IELTS, SOP", visaProcess: "Study Permit via SDS/Non-SDS", workOps: "PGWP up to 3 years."
    },
    australia: {
        name: "Australia", image: "https://images.unsplash.com/photo-1523482580662-fcc65ba5ab07?auto=format&fit=crop&q=80&w=2000", heroDesc: "Top global rankings, brilliant weather, and excellent student lifestyle.", universities: ["Melbourne", "Sydney", "UNSW", "ANU"], tuitionFees: "AUD 30,000 - AUD 50,000 / year", livingCost: "AUD 1,800 - AUD 2,500 / month", entryReq: "Recognized qualifications, IELTS/PTE", visaProcess: "Subclass 500 Student Visa", workOps: "Temporary Graduate Visa (Subclass 485)."
    },
    usa: {
        name: "USA", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000", heroDesc: "Innovation leader with flexible curriculums and massive research budgets.", universities: ["MIT", "Stanford", "Harvard", "Caltech"], tuitionFees: "USD 25,000 - USD 65,000 / year", livingCost: "USD 1,500 - USD 2,500 / month", entryReq: "SAT/ACT/GRE/GMAT, strong SOPs, LORs", visaProcess: "F1 Student Visa with interview", workOps: "OPT for 1-3 years post-graduation."
    },
    ireland: {
        name: "Ireland", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=2000", heroDesc: "The tech headquarters of Europe offering English-taught degrees.", universities: ["Trinity College", "UCD", "NUI Galway", "UCC"], tuitionFees: "EUR 10,000 - EUR 25,000 / year", livingCost: "EUR 1,200 - EUR 1,800 / month", entryReq: "Academic transcripts, IELTS", visaProcess: "Stamp 2 Student permission", workOps: "2-year post-study work visa for masters."
    },
    "new-zealand": {
        name: "New Zealand", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&q=80&w=2000", heroDesc: "High quality of life and focus on practical, research-based learning.", universities: ["Auckland", "Otago", "Wellington", "Canterbury"], tuitionFees: "NZD 25,000 - NZD 40,000 / year", livingCost: "NZD 1,300 - NZD 1,800 / month", entryReq: "Academic qualifications, IELTS", visaProcess: "Fee Paying Student Visa", workOps: "Post-study work visa up to 3 years."
    }
};

export default function DynamicCountryPage({ params }: { params: { slug: string } }) {
    if (!params.slug.startsWith('study-in-')) {
        notFound();
    }

    const countryKey = params.slug.replace('study-in-', '');
    const data = countryDataMap[countryKey];

    if (!data) {
        notFound();
    }

    return <CountryPageTemplate data={data} />;
}
