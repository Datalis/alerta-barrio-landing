import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Step1Image from "@/lib/assets/1.png";
import AppImage from "@/lib/assets/app.png";

export default function BenefitsSection1() {
    return (
        <div className="py-14 w-full flex flex-col items-center z-10 relative">
            <SectionTitle>
                <span className="font-[500] hidden lg:inline">Beneficios de <em className="font-[900] italic">Alerta Barrio</em></span>
                <span className="font-[500] lg:hidden leading-tight flex flex-col items-center">Beneficios de <br /> <em className="font-[900] italic text-white">Alerta Barrio</em></span>
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-10 mt-20 ">
                <div className="flex flex-col items-center lg:items-start">
                    <Image src={Step1Image} alt="step1" width={150} />
                    <div className="bg-black lg:bg-transparent rounded-xl text-white lg:text-black lg:p-0 mt-5 px-8 py-3">
                        <span className="font-[500] mt-5">El sistema de seguridad de Alerta Barrio está <br />
                            diseñado para que actives una alarma en segundos: </span>
                    </div>
                    <div className="lg:bg-black rounded-xl lg:text-white  px-8 py-3 mt-5 font-[500] leading-tight">
                        Solo abres la aplicación, presionas <br className="hidden lg:inline" />
                        un botón … ¡y eso es todo!
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-x-10 lg:gap-y-4 lg:ml-auto lg:mr-20 mt-5 lg:mt-28 font-[500]">
                        <span className="before:h-full before:rounded-lg before:w-1 before:-left-4 before:bg-theme-red before:absolute relative">Fácil</span>
                        <span className="before:h-full before:rounded-lg before:w-1 before:-left-4 before:bg-theme-red before:absolute relative">Inmediato</span>
                        <span className="before:h-full before:rounded-lg before:w-1 before:-left-4 before:bg-theme-red before:absolute relative">24/7</span>
                        <span className="before:h-full before:rounded-lg before:w-1 before:-left-4 before:bg-theme-red before:absolute relative">Remoto</span>
                        <span className="before:h-full before:rounded-lg before:w-1 before:-left-4 before:bg-theme-red before:absolute relative">Cobertura total</span>
                    </div>
                </div>
                <div className="self-end lg:w-auto mt-10 w-[200px] justify-self-center">
                    <Image src={AppImage} className="self-end" alt="app" />
                </div>
            </div>
        </div>
    );
}