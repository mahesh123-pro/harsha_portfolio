import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harish Reddy Jonnalagadda | Global Mobility Strategist & Founder of VisaEnsure",
  description: "Official portfolio of Harish Reddy Jonnalagadda, Founder & CEO of VisaEnsure. A premier Global Mobility Strategist helping individuals turn international ambitions into reality through strategic visa consulting and education guidance for over 14 years.",
  keywords: [
    "Harish Reddy Jonnalagadda",
    "Global Mobility Strategist",
    "Immigration Advisor",
    "International Education Expert",
    "Founder of VisaEnsure",
    "Visa Consultant",
    "Study Abroad Expert"
  ],
  authors: [{ name: "Harish Reddy Jonnalagadda" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-charcoal text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

