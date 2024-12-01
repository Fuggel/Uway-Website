import { latoBlack, latoBold, latoRegular } from "@/constants/fonts";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Uway",
    description:
        "Dein smarter Begleiter am Steuer. Blitzerwarnungen, Echtzeit-Tankstellenpreise, Verkehrsdaten & mehr!",
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
            </body>
        </html>
    );
}
