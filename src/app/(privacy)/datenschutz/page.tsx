import Link from "next/link";

export default function Privacy() {
    return (
        <div className="mt-10 mb-20 px-4 max-w-6xl mx-auto w-[90%] md:w-4/5">
            <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Diese Datenschutzerklärung beschreibt unsere Richtlinien und Verfahren zur Erhebung, Nutzung und
                Offenlegung Ihrer Informationen, wenn Sie unseren Dienst nutzen, und informiert Sie über Ihre
                Datenschutzrechte und wie das Gesetz Sie schützt.
            </p>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Wir verwenden keine personenbezogenen Daten und speichern keine Informationen über Sie. Für die
                Darstellung von Tankstellen und Preisen verwenden wir den Service{" "}
                <Link
                    href="https://creativecommons.tankerkoenig.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Tankerkoenig
                </Link>
                . Bitte beachten Sie, dass wir keine Kontrolle über die Datenschutzerklärungen und Praktiken von
                Drittanbietern wie Tankerkoenig haben.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Interpretation und Definitionen</h2>
            <h3 className="text-xl font-medium mb-2">Interpretation</h3>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Begriffe, deren Anfangsbuchstaben großgeschrieben sind, haben die unten definierten Bedeutungen. Diese
                Definitionen gelten unabhängig davon, ob sie im Singular oder Plural erscheinen.
            </p>

            <h3 className="text-xl font-medium mb-2">Definitionen</h3>
            <p className="text-foregroundSecondary leading-relaxed mb-4">Für die Zwecke dieser Datenschutzerklärung:</p>
            <ul className="list-disc pl-6 text-foregroundSecondary mb-6">
                <li>
                    <strong>Gerät:</strong> Jedes Gerät, das auf den Dienst zugreifen kann, wie ein Computer, ein
                    Mobiltelefon oder ein digitales Tablet.
                </li>
                <li>
                    <strong>Dienst:</strong> Bezieht sich auf die Anwendung Uway.
                </li>
                <li>
                    <strong>Sie:</strong> Die Person, die auf den Dienst zugreift oder diesen nutzt.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Erhebung und Nutzung Ihrer Daten</h2>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Unsere Anwendung erhebt keine personenbezogenen Daten. Die Standortinformationen, die von Ihrem Gerät
                bereitgestellt werden, werden ausschließlich lokal verwendet, um Ihnen den Dienst anzubieten (z. B. die
                Anzeige von Tankstellen in Ihrer Nähe). Es erfolgt keine Speicherung dieser Informationen auf unseren
                Servern oder bei Drittanbietern.
            </p>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Standortzugriff kann jederzeit in den Einstellungen Ihres Geräts aktiviert oder deaktiviert werden.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Sicherheit Ihrer Daten</h2>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Wir setzen alles daran, Ihre Informationen zu schützen. Da wir jedoch keine Daten speichern oder
                verarbeiten, sind Sicherheitsrisiken durch unsere App minimal.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Datenschutz von Kindern</h2>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Unser Dienst richtet sich nicht an Personen unter 13 Jahren. Wir sammeln wissentlich keine
                personenbezogenen Daten von Kindern. Sollten uns versehentlich über Drittanbieter Daten von Kindern
                übermittelt werden, wenden Sie sich bitte an uns, damit wir diese umgehend löschen können.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Links zu anderen Websites</h2>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Unsere App enthält möglicherweise Links zu Websites von Drittanbietern (z. B. Tankerkoenig). Wir haben
                keine Kontrolle über den Inhalt, die Datenschutzerklärungen oder die Praktiken dieser Websites. Wir
                empfehlen Ihnen, die Datenschutzerklärungen jeder von Ihnen besuchten Website zu überprüfen.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-foregroundSecondary leading-relaxed mb-6">
                Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden durch die
                Veröffentlichung der aktualisierten Datenschutzerklärung auf dieser Seite wirksam. Bitte überprüfen Sie
                diese Seite regelmäßig.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-foregroundSecondary leading-relaxed">
                Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns per E-Mail kontaktieren:{" "}
                <Link href="mailto:info@uwaygo.com" rel="noopener noreferrer" className="text-primary hover:underline">
                    info@uwaygo.com
                </Link>
                .
            </p>

            <p className="text-sm text-primary my-6">
                <i>Letzte Aktualisierung: 2. Dezember 2024.</i>
            </p>
        </div>
    );
}
