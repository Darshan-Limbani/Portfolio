import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import PageTransition from "@/components/ui/PageTransition";
import StairEffect from "@/components/ui/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
    title: "Darshan Limbani - Software Developer & MERN Stack Engineer",
    description:
        "Experienced Software Developer specializing in the MERN stack. Explore my portfolio showcasing 3+ years of expertise in web and software solutions.",
    keywords: [
        "Darshan Limbani",
        "Software Developer",
        "MERN Stack Developer",
        "Freelance Developer",
        "Web Development",
        "Android Development",
    ],
    authors: [{ name: "Darshan Limbani", url: "https://darshan-limbani.vercel.app" }],
    openGraph: {
        title: "Darshan Limbani - Software Developer & MERN Stack Engineer",
        description:
            "Experienced Software Developer specializing in the MERN stack with 3+ years of expertise in building web and software solutions.",
        url: "https://darshan-limbani.vercel.app",
        siteName: "Darshan Limbani - Software Developer | Portfolio",
        images: [
            {
                url: "/d_profile.png",
                width: 800,
                height: 600,
                alt: "Darshan Limbani Portfolio Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        creator: "@DarshanLimbani0",
        card: "summary_large_image",
        title: "Darshan Limbani - Software Developer",
        description:
            "Specializing in the MERN stack with 3+ years of expertise in building web and software solutions.",
        images: ["/profile.jpeg","/d_profile.png"],
    },
    icons: {
        icon: "/logo.png",
    },
    verification: {
        google: "NeuRGGHiLK9NSMreOHbqqUVKzjU8uI3-rXO7EdgqKXA",
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Darshan Limbani",
    jobTitle: "Software Developer",
    url: "https://darshan-limbani.vercel.app",
    sameAs: [
        "https://www.linkedin.com/in/darshan-limbani",
        "https://github.com/Darshan-Limbani",
    ],
    worksFor: {
        "@type": "Organization",
        name: "Freelance",
    },
    skill: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Material-UI",
        "Tailwind CSS",
        "Git",
        "Agile Development",
        "Full-stack Development",
        "Software Development"
    ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/logo.png"/>
        <meta name="google-site-verification" content="NeuRGGHiLK9NSMreOHbqqUVKzjU8uI3-rXO7EdgqKXA"/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    </head>
    <body className={jetbrainsMono.variable}>
    <StairEffect/>
    <PageTransition>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
