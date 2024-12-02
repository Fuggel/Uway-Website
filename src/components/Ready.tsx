import { FaAndroid, FaApple } from "react-icons/fa";

import { Button } from "./ui/Button";

export default function Ready() {
    return (
        <section className="mt-10 mb-20 px-4 scroll-mt-[65px]">
            <div className="w-full max-w-6xl mx-auto bg-primary p-10 rounded-3xl">
                <div className="flex flex-col items-center gap-4 mx-auto mb-6">
                    <h2 className="text-3xl font-bold text-center">Bereit für eine stressfreiere Fahrt?</h2>
                    <p className="text-center text-md">
                        Starte jetzt mit einem <span className="font-bold">30-tägigen Testzeitraum</span>.
                        <br />
                        Anschließend erhältst du vollen Zugriff auf die App für nur{" "}
                        <span className="font-bold">1,49 €</span> monatlich!
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-40 rounded-3xl text-md font-bold border-foreground bg-primary hover:text-primary-foreground hover:bg-primary-dark"
                    >
                        <FaApple />
                        iOS
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="w-40 rounded-3xl text-md font-bold border-foreground bg-primary hover:text-primary-foreground hover:bg-primary-dark"
                    >
                        <FaAndroid />
                        Android
                    </Button>
                </div>
            </div>
        </section>
    );
}
