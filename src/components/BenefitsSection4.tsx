import Image from "next/image";
import GroupoSombraImage from "@/lib/assets/GRUPO-SOMBRA.png";
import MujerSeguridadImage from "@/lib/assets/MUJER-SEGURIDAD.png";
import Step4Image from "@/lib/assets/4.png";

export default function BenefitsSection4() {
    return (
        <div className="py-14 flex flex-col z-10 relative">
            <Image className="self-end" src={Step4Image} alt="step1" width={150} />
            <div className="grid grid-cols-2 flex-1 gap-x-10">
                <div className="flex flex-col">
                    <span className="font-light"><span className="font-[500]">Alerta Barrio</span> proporciona un sistema de <br /> administración práctico y muy fácil de usar.</span>
                    <Image src={GroupoSombraImage} alt="group" width={400} className="my-20" />
                    <span className="block self-end mt-auto bg-black px-8 py-3 rounded-2xl text-white text-lg font-[500] leading-tight">
                        Ideal para los responsables de <br />
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