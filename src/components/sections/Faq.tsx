import { FAQ_ITEMS } from "@/constants/faq";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";

interface FeaturesProps {
    ref: (node?: Element | null) => void;
}

export default function Faq({ ref }: FeaturesProps) {
    return (
        <section id="faq" ref={ref} className="mt-10 mb-20 px-4 scroll-mt-[65px]">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-4 mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-center">Häufig gestellte Fragen</h2>
                </div>

                <Accordion type="single" collapsible>
                    {FAQ_ITEMS.map((item, i) => (
                        <AccordionItem key={i} value={i.toString()}>
                            <AccordionTrigger>
                                <h3 className="text-lg font-bold">{item.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-[1rem] leading-6 text-foregroundSecondary">{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
