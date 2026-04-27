# Bimal Jayakumar — Personal Portfolio

> A cinematic, interactive developer portfolio built to make a lasting impression.

**Live at:** [bimaljayakumar.vercel.app](https://bimaljayakumar.vercel.app) <!-- update once deployed -->

---

## About

This is my personal developer portfolio — built from scratch to showcase my projects, skills, and journey as a developer. It's not just a static page. It features a cinematic scrollytelling hero with video scrubbing, a bento-style projects grid with modal detail views, an infinite testimonials marquee, an interactive career timeline, a blog/insights section, and a WhatsApp-integrated contact form — all wrapped in a dark, glassmorphism aesthetic with smooth Framer Motion animations.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| 3D | Three.js + React Three Fiber |
| Icons | Custom SVG |
| Video | HTML5 Video + FFmpeg |
| Font | Inter (Google Fonts) |

---

## Features

### Scrollytelling Hero
The landing section uses a full-screen video that scrubs forward based on scroll position. Three animated text overlays fade in and out at different scroll depths using Framer Motion's `useTransform` and `useSpring`. Built with a custom `ScrollyVideo` component that ties `scrollYProgress` directly to `video.currentTime`.

### Projects Grid (Bento Layout)
A responsive bento-style grid showcasing 7 real projects. Each card has:
- A looping background video preview
- Gradient color overlays unique to each project
- Tech stack tags that appear on hover
- A smooth Framer Motion `layoutId` shared element transition into a full modal
- Modal with project description, tech stack, GitHub link, and live demo link
- "View More / Show Less" pagination

### Skills Section
Three categorized skill groups displayed as pill tags:
- **Frontend** — React, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap
- **Backend** — Django, Python, PHP, MySQL, SQLite, REST APIs, Kotlin, Android SDK
- **AI Tools** — ChatGPT, GitHub Copilot, Amazon Q, Cursor, Git, GitHub, VS Code

### Journey / Timeline
An interactive vertical timeline with alternating left/right cards showing my education and career milestones — from 10th standard (2021) to present freelance work. Each card has a glowing dot on the timeline line, year badge, title, organization, and description.

### Testimonials Marquee
An infinite auto-scrolling horizontal marquee of 6 testimonials from real clients and collaborators. Cards include name, role, initials avatar, and quote. Edge fade effect using CSS gradient masks.

### Blog / Insights
Three article cards with gradient header accents, category badges, read time, title, excerpt, and a "Read Article" link. Topics cover my coding journey, building Zafe, and using AI tools.

### Contact
A two-column layout with:
- Left: Heading, availability note, email link, social icons (GitHub, LinkedIn, Twitter)
- Right: A form (Name, Email, Message) that on submit opens WhatsApp with a pre-filled professional message directly to my number

### Floating Dock
A macOS-style floating dock fixed at the bottom center of the screen. Icons magnify on hover (spring physics). Navigates to: Home, Projects, Testimonials, Blog, Skills, Journey, Contact.

---

## Projects Showcased

### 1. SkillMint — Job Portal
Full-featured job portal connecting job seekers and recruiters through an intuitive, modern interface. Delivers a complete recruitment ecosystem with advanced features for both candidates and employers.
- **Stack:** Django, Python, HTML, CSS, JavaScript, SQLite
- **Repo:** [github.com/bimaljayakumar/SkillMint-JobPortal-Django](https://github.com/bimaljayakumar/SkillMint-JobPortal-Django)

### 2. Zafe — Women Safety App
Django-based web application designed to empower women's safety through cutting-edge technology. Combines real-time emergency response, incident reporting, community-driven safety features, and location-based services.
- **Stack:** Django, Python, HTML, CSS, JavaScript, GPS API
- **Repo:** [github.com/bimaljayakumar/Zafe-Web-Django](https://github.com/bimaljayakumar/Zafe-Web-Django)
- **Live:** [bimaljayakumar.pythonanywhere.com](https://bimaljayakumar.pythonanywhere.com/)

### 3. CarePoint — Hospital Management System
Comprehensive Django-based healthcare management platform that digitizes hospital operations. Features multi-role dashboards for Patients, Doctors, Administrators, Pharmacists, and Lab Technicians with appointment scheduling, digital prescriptions, medical reports, and pharmacy management.
- **Stack:** Django, Python, HTML, CSS, JavaScript, SQLite
- **Repo:** [github.com/bimaljayakumar/CarePoint-Health-Management-System](https://github.com/bimaljayakumar/CarePoint-Health-Management-System)

### 4. Weather App — Android
Native Android weather application that fetches real-time weather data. Features current conditions, hourly and weekly forecasts, location-based weather detection, and a clean modern UI.
- **Stack:** Kotlin, Android SDK, Retrofit, Weather API, XML

### 5. Car Rental System — PHP
Full-featured car rental system with vehicle listing, booking management, user authentication, admin dashboard for fleet and reservation management, and invoice generation.
- **Stack:** PHP, MySQL, HTML, CSS, JavaScript, Bootstrap

### 6. Medicine Reminder — Android
Native Android medicine reminder app. Users can add medicines, set custom alarm times, and receive push notifications reminding them to take their medication. Features alarm management and notification scheduling.
- **Stack:** Kotlin, Android SDK, AlarmManager, Notifications, Room DB

### 7. Real Estate Platform — Django
Django-based real estate web platform for listing, browsing, buying, and selling properties. Includes detailed listings, search filters, image uploads, and an admin panel for managing properties and users.
- **Stack:** Django, Python, MySQL, HTML, CSS, JavaScript

---

## Project Structure

```
personal-portfolio/
├── public/
│   ├── hero-video.mp4              # Scrollytelling hero video
│   ├── hero-video-optimized.mp4    # Optimized version
│   ├── vid-coding.mp4              # Project card background video
│   ├── vid-digital.mp4             # Project card background video
│   └── vid-hitech.mp4              # Project card background video
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── send-email/         # Email API route (Nodemailer)
│   │   │   └── submit-testimonial/ # Testimonial submission route
│   │   ├── globals.css             # Global styles, scrollbar hide
│   │   ├── layout.tsx              # Root layout, metadata, fonts
│   │   └── page.tsx                # Main page, section order
│   └── components/
│       ├── Hero.tsx                # Scrollytelling hero section
│       ├── ScrollyVideo.tsx        # Video scrub on scroll component
│       ├── Overlay.tsx             # Animated text overlays on hero
│       ├── Projects.tsx            # Bento grid + modal
│       ├── Skills.tsx              # Skills categorized section
│       ├── Timeline.tsx            # Career & education timeline
│       ├── Testimonials.tsx        # Infinite scrolling marquee
│       ├── Blog.tsx                # Insights / articles section
│       ├── Contact.tsx             # WhatsApp contact form
│       └── Dock.tsx                # macOS-style floating nav dock
├── .env.local                      # Environment variables (not committed)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/bimaljayakumar/Personal-Portfolio.git
cd Personal-Portfolio

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

---

## Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add environment variables if needed
4. Deploy — done

---

## Contact

**Bimal Jayakumar**
- Email: [bimaljayakumar18@gmail.com](mailto:bimaljayakumar18@gmail.com)
- GitHub: [github.com/bimaljayakumar](https://github.com/bimaljayakumar)
- WhatsApp: +91 9778707336

---

© 2025 Bimal Jayakumar. All rights reserved.
