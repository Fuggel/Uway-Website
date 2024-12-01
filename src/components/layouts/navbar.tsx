import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/Button";

const Navbar = () => {
    return (
        <nav className="w-[90%] md:w-4/5 mx-auto mb-10">
            <div className="flex justify-between items-center w-full">
                <Link href="/">
                    <Image src="/uway.png" alt="Uway Logo" width={125} height={125} />
                </Link>

                <Link href="/testing">
                    <Button variant="default" className="w-36 rounded-3xl text-md">
                        Beta-Test
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
