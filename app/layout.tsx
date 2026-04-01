import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "NexaCall – Appointment Setting & Lead Generation for Merchant Services | Kosovo",
  description:
    "NexaCall is a Prishtina-based outbound call center specializing in appointment setting and lead generation for merchant services, payment processors, and MCA providers. US business hours coverage, 5-day launch, 32% avg conversion rate.",
  keywords: [
    "appointment setting",
    "lead generation",
    "merchant services",
    "merchant cash advance",
    "MCA leads",
    "payment processing leads",
    "ISO appointment setting",
    "outbound call center Kosovo",
    "BPO Kosovo",
    "inbound customer support",
  ],
  authors: [{ name: "NexaCall" }],
  openGraph: {
    title:
      "NexaCall – Appointment Setting & Lead Generation for Merchant Services",
    description:
      "Kosovo-based outbound call center booking qualified appointments for merchant services, payment providers, and MCA companies. Launch in 5 days.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-dark-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
