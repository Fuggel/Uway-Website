"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

import Faq from "./Faq";
import Features from "./Features";

export default function Sections() {
    const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.5 });
    const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.5 });

    return (
        <>
            <div className="sticky top-0 flex justify-center gap-10 py-4 border-dotted border-foreground border-y-[1px]">
                <Link href="#features" className={featuresInView ? "text-primary" : "text-foreground"}>
                    Features
                </Link>

                <Link href="#faq" className={faqInView ? "text-primary" : "text-foreground"}>
                    Häufig gestellte Fragen
                </Link>
            </div>

            <Features ref={featuresRef} />
            <Faq ref={faqRef} />
        </>
    );
}
