export default function Impressum() {
    return (
        <div className="mt-10 mb-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Impressum</h1>

            <p className="mb-2">Angaben gemäß § 5 TMG:</p>
            <p className="text-foregroundSecondary mb-6">
                Furkan Ceylan
                <br />
                Ludwig-Erhard-Str. 18
                <br />
                20459 Hamburg
            </p>

            <p className="mb-2">Vertreten durch:</p>
            <p className="text-foregroundSecondary mb-6">Furkan Ceylan</p>

            <p className="mb-2">Kontakt:</p>
            <p className="text-foregroundSecondary">
                Telefon: +49 (0) 163 384 908 0
                <br />
                E-Mail:{" "}
                <a href="mailto:info@uwaygo.com" className="text-primary hover:underline">
                    info@uwaygo.com
                </a>
            </p>
        </div>
    );
}
