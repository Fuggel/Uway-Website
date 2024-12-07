import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-[90%] md:w-4/5 mx-auto mb-10 pt-6">
            <div className="flex justify-between items-center w-full">
                <Link href="/">
                    <Image
                        src="/uway.png"
                        alt="Uway Logo"
                        width={125}
                        height={125}
                        quality={100}
                        unoptimized
                        className="w-[100px] md:w-[125px]"
                        sizes="(max-width: 640px) 100px, 125px"
                    />
                </Link>
            </div>
        </nav>
    );
}
