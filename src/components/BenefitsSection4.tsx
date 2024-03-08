import Image from "next/image";
import GroupoSombraImage from "@/lib/assets/GRUPO-SOMBRA.webp";
import MujerSeguridadImage from "@/lib/assets/MUJER-SEGURIDAD.webp";
import Step4Image from "@/lib/assets/4.webp";

export default function BenefitsSection4() {
    return (
        <div className="py-14 flex flex-col z-10 relative">
            <Image className="self-center md:self-end" src={Step4Image} alt="step1" width={150} />
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-x-10">
                <div className="flex flex-col">
                    <span className="font-light my-10 md:my-0"><span className="font-[500]">Alerta Barrio</span> proporciona un sistema de <br className="hidden md:inline" /> administración práctico y muy fácil de usar.</span>
                    <Image src={GroupoSombraImage} alt="group" width={400} className="my-20 hidden md:block" />
                    <span className="block self-end mt-auto bg-black px-8 py-3 rounded-2xl text-white text-lg font-[500] leading-tight">
                        Ideal para los responsables de <br className="hidden md:inline" />
                        la
                        seguridad en la comunidad.</span>
                </div>
                <div className="self-end justify-self-end">
                    <Image src={MujerSeguridadImage} alt="group" width={400} className="mt-20" />
                </div>
            </div>
        </div>
    );
}