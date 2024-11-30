import Image from "next/image";

import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="mb-10">
            <div className="flex justify-between items-center w-full">
                <Image src="/uway.png" alt="Uway Logo" width={125} height={125} />
                <Button variant="default" className="w-36 rounded-3xl text-md">
                    Beta-Test
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
