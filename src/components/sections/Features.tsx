import Image from "next/image";

import Blurring from "../ui/Blurring";

interface FeaturesProps {
    ref: (node?: Element | null) => void;
}

export default function Features({ ref }: FeaturesProps) {
    return (
        <section id="features" ref={ref} className="my-10 px-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-4 mx-auto mb-20">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-center mb-2">Features</h2>
                        <p className="text-foregroundSecondary text-center">
                            Von Echtzeit-Daten bis hin zu personalisierten Einstellungen - <br />
                            entdecke innovative Features, die jede Fahrt komfortabler machen.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <Blurring>
                            <Image priority src="/incident-info.png" alt="Verkehrsdaten" width={350} height={350} />
                        </Blurring>

                        <div className="text-center lg:text-left lg:w-1/2">
                            <h3 className="text-3xl font-bold mb-4">Echtzeit-Verkehrsdaten</h3>
                            <p className="text-lg text-foregroundSecondary">
                                Bleibe jederzeit auf dem Laufenden: Erhalte präzise Updates zu Staus, Unfällen und
                                Baustellen in deiner Umgebung, damit du deine Route effizient und stressfrei planen
                                kannst.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <Blurring>
                            <Image
                                priority
                                src="/speed-camera-info.png"
                                alt="Blitzerwarnungen"
                                width={350}
                                height={350}
                            />
                        </Blurring>

                        <div className="text-center lg:text-left lg:w-1/2">
                            <h3 className="text-3xl font-bold mb-4">Blitzerwarnungen</h3>
                            <p className="text-lg text-foregroundSecondary">
                                Vermeide böse Überraschungen: Uway informiert dich rechtzeitig über stationäre und
                                mobile Blitzer, sodass Du sicher unterwegs bist.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <Blurring>
                            <Image
                                priority
                                src="/gas-station-info.png"
                                alt="Tankstellenpreise"
                                width={350}
                                height={350}
                            />
                        </Blurring>

                        <div className="text-center lg:text-left lg:w-1/2">
                            <h3 className="text-3xl font-bold mb-4">Aktuelle Tankstellenpreise</h3>
                            <p className="text-lg text-foregroundSecondary">
                                Spare Geld bei jedem Tankstopp: Vergleiche die aktuellen Preise in deiner Nähe und finde
                                die günstigste Tankstelle auf deinem Weg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
