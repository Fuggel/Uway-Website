import Navbar from "@/components/layouts/navbar";
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
            <body
                className={`${latoBlack.variable} ${latoBold.variable} ${latoRegular.variable} antialiased w-2/3 mx-auto bg-[url('/traffic.png')] bg-cover bg-center bg-no-repeat`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
