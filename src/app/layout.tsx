import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReviewMode from "@/components/ReviewMode";
import ScrollExperience from "@/components/ScrollExperience";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcduqueramirez.com"),
  title: {
    default: "Marc Duque Ramírez — Neuroscience",
    template: "%s — Marc Duque Ramírez",
  },
  description:
    "Neuroscientist studying how brain-wide dynamics define brain states and how circuits, neuromodulators, and drugs drive transitions between them.",
  openGraph: {
    title: "Marc Duque Ramírez — Neuroscience",
    description: "How brain-wide dynamics shape behavior—and what makes them change.",
    url: "/",
    siteName: "Marc Duque Ramírez",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Marc Duque Ramírez — research on neural dynamics and behavioral change" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Duque Ramírez — Neuroscience",
    description: "How brain-wide dynamics shape behavior—and what makes them change.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollExperience />
        {children}
        <ReviewMode />
      </body>
    </html>
  );
}
