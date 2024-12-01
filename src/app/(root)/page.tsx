import Navbar from "@/components/layouts/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="bg-[url('/traffic.png')] bg-cover bg-center bg-no-repeat">
                <Navbar />

                <section className="flex flex-col lg:flex-row items-center justify-between gap-10 w-[90%] md:w-4/5 mx-auto">
                    <div className="lg:w-3/4 max-w-2xl mx-auto text-center lg:text-left">
                        <h1 className="text-foreground text-5xl font-bold mb-6">
                            Uway - Dein smarter Begleiter am Steuer
                        </h1>
                        <p className="text-foregroundSecondary text-lg mb-10">
                            Mit Uway erhältst du Blitzerwarnungen, Echtzeit-Verkehrsinfos, aktuelle Tankstellenpreise
                            und eine optimierte Navigation - alles, was du brauchst, um stressfrei ans Ziel zu kommen.
                        </p>

                        <div>
                            <p className="text-foregroundSecondary text-md mb-4">
                                Starte jetzt mit einem{" "}
                                <span className="text-foreground font-bold">30-tägigen Testzeitraum</span>.
                                <br />
                                Anschließend erhältst du vollen Zugriff auf die App für nur{" "}
                                <span className="text-foreground font-bold">1,49 €</span> monatlich!
                            </p>

                            <div className="flex gap-4 justify-center lg:justify-start">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-40 rounded-3xl text-md font-bold border-foreground bg-transparent hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Image src="/apple.svg" alt="App Store Badge" width={15} height={15} />
                                    iOS
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-40 rounded-3xl text-md font-bold border-foreground bg-transparent hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Image src="/android.svg" alt="Google Play Badge" width={20} height={20} />
                                    Android
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mb-10">
                        <Image
                            priority
                            src="/hero-app-screenshots.png"
                            alt="Uway Screenshots"
                            width={500}
                            height={700}
                        />
                    </div>
                </section>
            </div>

            <div className="sticky top-0 flex justify-center gap-10 py-4 border-dotted border-foreground border-y-[1px]">
                <p>Features</p>
                <p>Häufig gestellte Fragen</p>
            </div>
        </div>
    );
}
