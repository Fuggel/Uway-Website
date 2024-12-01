"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-10 px-3 py-6 rounded-[50%] bg-foreground hover:bg-foregroundSecondary ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
                zIndex: 999999,
                transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
        >
            <Image src="/arrow.svg" alt="Scroll to Top" width={25} height={25} />
        </Button>
    );
};

export default ScrollToTop;
