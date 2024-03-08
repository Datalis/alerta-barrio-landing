import Image from "next/image";
import Step2Image from "@/lib/assets/2.webp";
import PlayaImage from "@/lib/assets/PLAYA.webp";
import PlayaImageMobile from '@/lib/assets/PLAYA-MOBILE.webp';
import ViajeImage from "@/lib/assets/VIAJE.webp";
import WifiLogo from "@/lib/assets/wifi.webp";

export default function BenefitsSection2() {
    return (
        <div className="py-14 z-10 relative">
            <div className="flex justify-center md:justify-end">
                <Image src={Step2Image} alt="step1" width={150} />
            </div>
            <div className="flex md:flex-row flex-col items-center gap-20 mt-10">
                <p className="inline font-light">Puedes activar las alarmas en
                    <span className="font-[500]"> cualquier momento y desde <br />
                        cualquier lugar</span>
                    , ya sea mientras disfrutas de unas vacaciones <br />
                    en la playa o incluso desde otro país.</p>
                <span className="hidden md:block bg-black px-8 py-3 rounded-2xl text-white text-lg font-[500] leading-tight">
                    Lo único que necesitas es tener <br />
                    conexión a internet.</span>
            </div>
            <div className="flex justify-center md:hidden mt-10">
                <Image src={PlayaImageMobile} alt="playa" />
            </div>
            <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] mt-10">
                <div className="justify-self-start">
                    <Image src={PlayaImage} alt="playa" width={250} />
                </div>
                <div className="">
                    <Image src={WifiLogo} alt="playa" />
                </div>
                <div className="justify-self-end self-end">
                    <Image src={ViajeImage} alt="playa" width={250} />
                </div>
            </div>
        </div>
    );
}