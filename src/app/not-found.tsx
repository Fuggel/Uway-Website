import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-lg font-medium">Seite nicht gefunden.</p>
            <Link href="/" className="mt-6 px-6 py-2 bg-primary rounded-3xl shadow-md hover:bg-primary-dark transition">
                Zurück zur Startseite
            </Link>
        </div>
    );
}
