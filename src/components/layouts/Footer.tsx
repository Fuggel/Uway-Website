import Link from "next/link";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t-primary border-t-4 py-8">
            <div className="container mx-auto flex flex-wrap justify-evenly items-center px-4 gap-6">
                <div className="order-1 flex space-x-4">
                    <Link href="mailto:info@uwaygo.com" rel="noopener noreferrer">
                        <FaEnvelope className="text-2xl hover:text-secondary transition-all duration-200 ease-in-out" />
                    </Link>
                    <Link href="https://www.instagram.com/uwaygo/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-secondary transition-all duration-200 ease-in-out" />
                    </Link>
                </div>

                <div className="order-3 sm:order-2 text-center">
                    <span>&#169; {new Date().getFullYear()} Uway</span>
                </div>

                <div className="order-2 sm:order-3 flex space-x-4">
                    <Link href="/datenschutz" className="hover:text-secondary transition-all duration-200 ease-in-out">
                        Datenschutz
                    </Link>

                    <span>|</span>

                    <Link href="/impressum" className="hover:text-secondary transition-all duration-200 ease-in-out">
                        Impressum
                    </Link>
                </div>
            </div>
        </footer>
    );
}
