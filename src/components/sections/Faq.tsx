interface FeaturesProps {
    ref: (node?: Element | null) => void;
}

export default function Faq({ ref }: FeaturesProps) {
    return <section id="faq" ref={ref} className="my-[100px]"></section>;
}
