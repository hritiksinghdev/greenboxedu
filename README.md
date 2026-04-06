<div align="center">

# 🎓 Greenbox Edu

**A full-featured international study consultancy platform — destinations, university discovery, scholarship tracking, student dashboard, and free consultation booking, all in one place.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Status](https://img.shields.io/badge/Status-In_Development-orange?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

> 🌍 Helping students find, apply to, and fund international education across **9 countries** and **500+ partner universities.**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Vision](#-vision)
- [Features](#-features)
- [Pages & Routes](#-pages--routes)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Student Dashboard](#-student-dashboard)
- [Getting Started](#-getting-started)
- [Roadmap](#-roadmap)

---

## 🌟 Overview

Greenbox Edu is a **study abroad consultancy web platform** that gives students everything they need to navigate international education — from exploring destinations and comparing universities, to discovering scholarships and booking a free consultation with an advisor.

The platform is built as a performant Next.js 14 application with a fully responsive UI, animated page transitions, dropdown mega-nav, and a complete student-facing dashboard — all designed to match the quality and depth of the best study consultancies in the market.

> ⚠️ **This project is actively under development.** Auth, dashboard persistence, and backend integration are planned for upcoming milestones.

---

## 🎯 Vision

Greenbox Edu is being built to compete directly with top study consultancy platforms. The target feature set includes:

- ✅ Full public website with destinations, universities, services, scholarships
- ✅ Student dashboard with applications, messages, and appointments
- ✅ Free consultation booking flow (multi-step, date + time + details)
- 🔜 Real auth with Firebase / Supabase (sign-up, sign-in, OTP)
- 🔜 Live application tracker synced to backend
- 🔜 Counselor messaging with real-time chat
- 🔜 Admin panel for counselors to manage students
- 🔜 Document upload for SOP, passport, transcripts
- 🔜 Notification system (email + in-app)
- 🔜 Scholarship application tracking

---

## ✨ Features

| Area | Feature | Description |
|---|---|---|
| 🌐 Public | **Hero Section** | Animated hero with CTA for free consultation |
| 🌐 Public | **Destinations (9 countries)** | Dedicated pages for Singapore, Malaysia, UK, Germany, Canada, Australia, USA, Ireland, New Zealand |
| 🌐 Public | **Universities Hub** | Browse Partner, Top-Ranked, and Private institutions — 500+ total |
| 🌐 Public | **University Comparison Tool** | Select up to 5 universities and compare side-by-side: ranking, tuition, country, intake, duration |
| 🌐 Public | **Services (6 types)** | Eligibility, Shortlisting, Application Support, Visa, Scholarship Guidance, Pre-Departure |
| 🌐 Public | **Scholarships Directory** | 8 major scholarships with amount, deadline, country, and eligibility criteria |
| 🌐 Public | **About Section** | Mission, metrics (5,000+ students placed, 98% visa rate), team, success stories |
| 🌐 Public | **Contact Page** | Enquiry form with location and contact details |
| 📅 Booking | **Free Consultation Booking** | 2-step flow: date + time slot selection → personal details → confirmation |
| 🔐 Auth | **Sign In / Sign Up** | Auth pages (backend integration planned) |
| 🎓 Dashboard | **Overview** | Profile completeness, target destination, live application status |
| 🎓 Dashboard | **My Applications** | Application list with status badges (In Review, Drafting, etc.) |
| 🎓 Dashboard | **Messages** | In-app counselor chat thread UI |
| 🎓 Dashboard | **Appointments** | Appointment history + link to book new session |

---

## 🗺️ Pages & Routes

```
/                               # Homepage
│
├── /destinations               # All 9 destinations overview
│   └── /destinations/[country] # Individual country page (dynamic)
│       → singapore, malaysia, germany, uk, canada,
│         australia, usa, ireland, new-zealand
│
├── /universities               # University hub (partner / top-ranked / private / compare)
│   ├── /universities/partnered
│   ├── /universities/top-ranked
│   ├── /universities/private
│   └── /universities/compare   # Side-by-side comparison (up to 5)
│
├── /services                   # Services overview
│   ├── /services/eligibility
│   ├── /services/shortlisting
│   ├── /services/application-support
│   ├── /services/visa
│   ├── /services/scholarship-guidance
│   └── /services/pre-departure
│
├── /scholarships               # Scholarship directory (8 listings)
│
├── /about                      # About Greenbox Edu
│   ├── /about/why-choose-us
│   ├── /about/success-stories
│   └── /about/team
│
├── /contact                    # Contact form + office info
├── /book-consultation          # 2-step consultation booking
│
├── /auth
│   ├── /auth/sign-in
│   └── /auth/sign-up
│
└── /dashboard                  # Student portal (auth-protected)
    ├── Overview
    ├── My Applications
    ├── Messages (counselor chat)
    └── Appointments
```

---

## 🛠️ Tech Stack

### Core

[![Next.js](https://img.shields.io/badge/Next.js-14.2_App_Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

### Animation & UI

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-F97316?style=flat-square)](https://lucide.dev/)
[![clsx](https://img.shields.io/badge/clsx-Class_Utility-6B7280?style=flat-square)](https://github.com/lukeed/clsx)
[![tailwind-merge](https://img.shields.io/badge/tailwind--merge-3.5-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://github.com/dcastil/tailwind-merge)

### Planned Integrations

[![Firebase](https://img.shields.io/badge/Firebase-Auth_+_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Resend](https://img.shields.io/badge/Resend-Transactional_Email-000000?style=flat-square)](https://resend.com/)

---

## 📁 Project Structure

```
greenboxedu/
│
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout (Navbar + Footer)
│   │   ├── loading.tsx               # Global loading splash
│   │   │
│   │   ├── [slug]/                   # Catch-all dynamic page
│   │   ├── destinations/
│   │   │   ├── page.tsx              # All destinations grid
│   │   │   └── [country]/page.tsx    # Country detail (dynamic, 9 routes)
│   │   │
│   │   ├── universities/
│   │   │   ├── page.tsx              # Hub: partner / top-ranked / private / compare
│   │   │   ├── partnered/
│   │   │   ├── top-ranked/
│   │   │   ├── private/
│   │   │   └── compare/              # Interactive comparison table (up to 5)
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx              # Services overview (6 cards)
│   │   │   ├── eligibility/
│   │   │   ├── shortlisting/
│   │   │   ├── application-support/
│   │   │   ├── visa/
│   │   │   ├── scholarship-guidance/
│   │   │   └── pre-departure/
│   │   │
│   │   ├── scholarships/             # 8 scholarship listings
│   │   ├── about/                    # About, Why Choose Us, Success Stories, Team
│   │   ├── contact/
│   │   ├── book-consultation/        # 2-step booking (date/time → details → confirm)
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   └── dashboard/                # Student portal (4 tabs)
│   │
│   ├── components/
│   │   ├── home/                     # Homepage section components
│   │   │   ├── HeroSection.tsx       # Main hero with CTA
│   │   │   ├── DestinationsSection.tsx
│   │   │   ├── EligibilitySection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── FinalCtaSection.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Dropdown mega-nav (7 items, 4 with dropdowns)
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── country/
│   │   │   └── CountryPageTemplate.tsx  # Reusable template for all 9 country pages
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── PageHero.tsx          # Reusable page hero (badge + title + subtitle)
│   │       ├── LoadingSplash.tsx
│   │       └── FloatingSection.tsx   # (in sections)
│   │
│   └── app/globals.css
│
├── public/
│   ├── images/
│   │   ├── destination/              # Banner + gallery + hero per country (9 countries)
│   │   ├── universities/             # Logos (NUS, Melbourne, Toronto, TU Munich, RWTH)
│   │   └── hero1–6.jpg               # Homepage hero images
│   └── greenbox-mark.svg
│
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🎓 Student Dashboard

The dashboard is a fully built, tab-based student portal — currently running on mock data, with backend integration planned.

```
┌─────────────────────────────────────────────────────────┐
│  Sidebar                                                 │
│  ─────────────────────────────────────────────────────  │
│  👤  Overview       📄  My Applications                  │
│  💬  Messages  (1)  📅  Appointments                     │
└─────────────────────────────────────────────────────────┘
```

### Overview Tab
- **Profile completeness** progress bar (e.g. 85% — Missing Passport)
- **Target destination** card with country flag
- **Live application status** badge (In Review, Drafting, etc.)
- **Next Steps** checklist — completed steps + pending action items with document upload CTA

### My Applications Tab
- Application cards per university with program, intake year, and status badge
- Status states: `In Review` · `Drafting` · `Submitted` · `Offer Received` · `Rejected`
- Inline missing document warnings (e.g. "Missing SOP")

### Messages Tab
- Counselor chat thread UI (counselor name, avatar initials, message bubbles)
- Counselor messages on left, student messages on right (styled separately)
- Message input with send button

### Appointments Tab
- Appointment history cards (session type, counselor, date, time)
- Direct link to `/book-consultation` for new bookings

---

## 🚀 Getting Started

### Prerequisites

[![Node.js](https://img.shields.io/badge/Node.js-≥18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)

### Installation

```bash
git clone <your-repo-url>
cd greenboxedu
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🗓️ Roadmap

### ✅ Phase 1 — Public Website (Complete)
- All destination pages (9 countries with gallery, stats, universities)
- Services section (6 service pages)
- Scholarships directory
- University hub + comparison tool
- About, team, success stories
- Contact + consultation booking flow

### 🔄 Phase 2 — Auth & Dashboard (In Progress)
- Firebase / Supabase authentication (sign-up, sign-in, OTP email verification)
- Protected dashboard routes with real session management
- Application tracker synced to Firestore
- Document upload (passport, SOP, transcripts) via AWS S3 or Supabase Storage

### 🔜 Phase 3 — Full Platform
- Real-time counselor messaging (WebSockets or Supabase Realtime)
- Admin / counselor back-office panel
- Scholarship application tracker
- Transactional email system (Resend) — booking confirmation, application updates
- In-app notification centre
- Mobile app (React Native / Expo)

---

<div align="center">

**Built with ❤️ by Hritik Singh**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/hritik-singh-4b85783b2/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/hritik2006singh-wq)

</div>
