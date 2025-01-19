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
  title: "Darshan Limbani's Portfolio",
  description: "Software Developer",
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
