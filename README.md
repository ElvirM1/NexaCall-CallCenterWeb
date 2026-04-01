# NexaCall

Prishtina-based outbound call center specializing in appointment setting and lead generation for merchant services, payment processors, and MCA providers.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Syne (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
nexacall/
├── app/
│   ├── layout.tsx          # Root layout with fonts + SEO metadata
│   ├── page.tsx            # Homepage (Navbar → Hero → Services → Process → WhyUs → Contact → Footer)
│   ├── globals.css         # Global styles, CSS variables, utility classes
│   └── careers/
│       └── page.tsx        # Careers / job application page
├── components/
│   ├── Navbar.tsx          # Fixed navigation with Services dropdown
│   ├── Hero.tsx            # Full-screen hero with parallax background
│   ├── Services.tsx        # 5 service cards (3+2 grid layout)
│   ├── Process.tsx         # 4-step campaign launch process
│   ├── WhyUs.tsx           # 8 competitive advantages
│   ├── Contact.tsx         # Contact form + office info sidebar
│   └── Footer.tsx          # Footer with CTA banner + nav links
├── lib/
│   └── utils.ts            # cn() Tailwind merge helper
├── tailwind.config.ts      # Custom brand colors, shadows, animations
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Contact

**Phone**: +383 49 725 153  
**Email**: info@nexacall.com  
**Address**: Rruga B, Prishtina, Kosovo
