import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uway | Impressum",
    description: "Impressum",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
