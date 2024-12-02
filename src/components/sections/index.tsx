"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

import Faq from "./Faq";
import Features from "./Features";

export default function Sections() {
    const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.25 });
    const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.25 });

    return (
        <>
            <div className="sticky top-0 flex justify-center gap-10 py-4 bg-primary h-[55px] z-[999999]">
                <Link
                    href="#features"
                    className={
                        featuresInView
                            ? 'after:content-[" "] after:h-[2px] after:bg-white after:block'
                            : "text-gray-200"
                    }
                >
                    Features
                </Link>

                <Link
                    href="#faq"
                    className={
                        faqInView ? 'after:content-[" "] after:h-[2px] after:bg-white after:block' : "text-gray-200"
                    }
                >
                    Häufig gestellte Fragen
                </Link>
            </div>

            <Features ref={featuresRef} />
            <Faq ref={faqRef} />
        </>
    );
}
