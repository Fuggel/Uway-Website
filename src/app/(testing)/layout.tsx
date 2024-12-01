import Navbar from "@/components/layouts/navbar";
import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
    title: "Uway Testing",
    description: "Teste die neuesten Funktionen von Uway und hilf uns, die App zu verbessern!",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-2/3 mx-auto">
            <Navbar />
            {children}
        </div>
    );
}
