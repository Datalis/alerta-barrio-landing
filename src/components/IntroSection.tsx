import ArrowImage from "@/lib/assets/arrow.png";
import SectionTitle from "./SectionTitle";
import DoubleCircleImage from "@/lib/assets/DOBLE-CIRCULO.png";
import WifiImage from "@/lib/assets/WIFI2.png";
import WifiMobileImage from "@/lib/assets/WIFI2-MOBILE.png";
import Circle1Image from "@/lib/assets/CIRCLE-1.png";
import Circle2Image from "@/lib/assets/CIRCLE-2.png";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="que-es" className="relative">
      <Image src={DoubleCircleImage} alt="circle" width={200} className="hidden md:block absolute -left-24 top-0" />
      <Image src={DoubleCircleImage} alt="circle" width={200} className="hidden md:block absolute -right-16 top-[680px]" />

      <div className="px-14 md:px-0 container mx-auto flex flex-col items-center mt-20 md:mb-5">
        <SectionTitle>
          <span className="hidden md:inline font-[500]">
            ¿Qué es <em className="font-[900] italic text-theme-red">Alerta Barrio</em>?
          </span>
          <span className="md:hidden flex flex-col items-center font-[500] leading-tight">
            ¿Qué es <br /> <em className="font-[900] italic text-theme-red">Alerta Barrio?</em>
          </span>
        </SectionTitle>
        <div className="text-white mt-20 font-[500] rounded-2xl bg-black px-10 py-3 text-lg">
          Alerta Barrio te ofrece el control total de tu seguridad y la de tus
          seres queridos.
        </div>
        <p className="mt-10 font-light">
          <strong className="font-[500]">
            Con nuestro sistema de alarmas, activable en segundos desde tu
            celular
          </strong>
          , puedes notificar de <br /> manera inmediata sobre cualquier
          amenaza que te afecte a ti, a tu familia y a todos en el barrio.
        </p>
        <Image src={ArrowImage} alt="arrow" width={75} className="mt-20" />

      </div>
      <div className="relative mb-24">
        <Image src={Circle1Image} alt="circle" className="md:hidden absolute -left-8 top-32 object-contain h-[100px] w-[100px]" />
        <Image src={Circle2Image} alt="circle" className="md:hidden absolute -right-8 top-0 bottom-0 my-auto object-contain h-[100px] w-[100px]" />
        <div className="px-14 md:px-0 container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[38%_62%] mt-16 md:mt-5 md:pl-32 relative">
            <div className="self-center">
              <p className="font-light">
                <strong className="font-[500]">Instala nuestra caja de alarma <br className="hidden md:inline" /> inteligente en minutos:</strong> solo requiere <br  className="hidden md:inline"/> electricidad y acceso a Internet <br />
                para conectar tus sirenas.
              </p>
            </div>
            <div className="">
              <Image className="hidden md:block" src={WifiImage} alt="wifi"></Image>
              <Image className="md:hidden mt-10 px-10" src={WifiMobileImage} alt="wifi"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}