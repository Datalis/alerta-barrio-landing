import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Step1Image from "@/lib/assets/1.png";
import AppImage from "@/lib/assets/app.png";

export default function BenefitsSection1() {
  return (
    <div className="relative z-10 flex w-full flex-col items-center pb-14 pt-28">
      <SectionTitle>
        <span className="hidden font-[500] md:inline">
          Beneficios de{" "}
          <em className="font-[900] italic text-white">Alerta Barrio</em>
        </span>
        <span className="flex flex-col items-center font-[500] leading-none md:hidden">
          Beneficios de <br />{" "}
          <em className="font-[900] italic text-white">Alerta Barrio</em>
        </span>
      </SectionTitle>
      <div className="mt-20 grid grid-cols-1 gap-x-10 md:grid-cols-[2fr_1fr] ">
        <div className="flex flex-col items-center md:items-start">
          <Image src={Step1Image} alt="step1" width={150} />
          <div className="mt-5 rounded-xl bg-black px-8 py-3 text-white md:bg-transparent md:p-0 md:text-black">
            <span className="mt-5 font-[500] leading-tight text-white">
              El sistema de seguridad de Alerta Barrio está <br />
              diseñado para que actives una alarma en segundos:{" "}
            </span>
          </div>
          <div className="mt-5 rounded-xl px-5 py-3 font-[500] leading-tight md:bg-black md:text-white">
            Solo abres la aplicación, presionas{" "}
            <br className="hidden md:inline" />
            un botón … ¡y eso es todo!
          </div>
          <div className="mt-5 grid grid-cols-2 grid-rows-3 gap-x-10 font-[500] md:ml-auto md:mr-20 md:mt-32 md:gap-y-4">
            <span className="before:bg-theme-red relative before:absolute before:-left-4 before:h-full before:w-1 before:rounded-lg">
              Fácil
            </span>
            <span className="before:bg-theme-red relative before:absolute before:-left-4 before:h-full before:w-1 before:rounded-lg">
              Inmediato
            </span>
            <span className="before:bg-theme-red relative before:absolute before:-left-4 before:h-full before:w-1 before:rounded-lg">
              24/7
            </span>
            <span className="before:bg-theme-red relative before:absolute before:-left-4 before:h-full before:w-1 before:rounded-lg">
              Remoto
            </span>
            <span className="before:bg-theme-red relative before:absolute before:-left-4 before:h-full before:w-1 before:rounded-lg">
              Cobertura total
            </span>
          </div>
        </div>
        <div className="mt-10 w-[200px] self-end justify-self-center md:w-auto">
          <Image src={AppImage} className="self-end" alt="app" />
        </div>
      </div>
    </div>
  );
}
