import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uway Testing",
    description: "Teste die neuesten Funktionen von Uway und hilf uns, die App zu verbessern!",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
