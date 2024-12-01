import Navbar from "@/components/layouts/navbar";

export default function Testing() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-[90%] md:w-4/5 mx-auto">
                <h1>Testing</h1>
            </div>
        </div>
    );
}
