import Navbar from "@/components/layouts/navbar";

import "../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[url('/traffic.png')] bg-cover bg-center bg-no-repeat">
            <div className="w-2/3 mx-auto">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
