import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import { latoBlack, latoBold, latoRegular } from "@/constants/fonts";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Uway",
    description:
        "Dein smarter Begleiter am Steuer. Blitzerwarnungen, Echtzeit-Tankstellenpreise, Verkehrsdaten & mehr!",
    openGraph: {
        title: "Uway - Dein smarter Begleiter am Steuer",
        description: "Blitzerwarnungen, Echtzeit-Tankstellenpreise, Verkehrsdaten & mehr!",
        url: "https://uwaygo.com",
        siteName: "Uway",
        images: [
            {
                url: "/uway-thumbnail.png",
                width: 1200,
                height: 630,
                alt: "Uway App Thumbnail",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${latoBlack.variable} ${latoBold.variable} ${latoRegular.variable} antialiased`}>
                {children}
                <ScrollToTop />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
