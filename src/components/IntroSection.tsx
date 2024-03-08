import ArrowImage from "@/lib/assets/arrow.webp";
import SectionTitle from "./SectionTitle";
import DoubleCircleImage from "@/lib/assets/DOBLE-CIRCULO.webp";
import WifiImage from "@/lib/assets/WIFI2.webp";
import WifiMobileImage from "@/lib/assets/WIFI2-MOBILE.webp";
import Circle1Image from "@/lib/assets/CIRCLE-1.webp";
import Circle2Image from "@/lib/assets/CIRCLE-2.webp";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="que-es" className="relative">
      <Image
        src={DoubleCircleImage}
        alt="circle"
        width={200}
        className="absolute -left-24 top-0 hidden md:block"
      />
      <Image
        src={DoubleCircleImage}
        alt="circle"
        width={200}
        className="absolute -right-16 top-[680px] hidden md:block"
      />

      <div className="container mx-auto mt-20 flex flex-col items-center px-14 md:mb-5 md:px-0">
        <SectionTitle>
          <span className="hidden font-[500] md:inline">
            ¿Qué es{" "}
            <em className="text-theme-red font-[900] italic">Alerta Barrio</em>?
          </span>
          <span className="flex flex-col items-center font-[500] leading-none md:hidden">
            ¿Qué es <br />{" "}
            <em className="text-theme-red font-[900] italic">Alerta Barrio?</em>
          </span>
        </SectionTitle>
        <div className="mt-20 rounded-2xl bg-black px-10 py-3 text-lg font-[500] text-white">
          Alerta Barrio te ofrece el control total de tu seguridad y la de tus
          seres queridos.
        </div>
        <p className="mt-10 font-light">
          <strong className="font-[500]">
            Con nuestro sistema de alarmas, activable en segundos desde tu
            celular
          </strong>
          , puedes notificar de <br /> manera inmediata sobre cualquier amenaza
          que te afecte a ti, a tu familia y a todos en el barrio.
        </p>
        <Image src={ArrowImage} alt="arrow" width={75} className="mt-20" />
      </div>
      <div className="relative mb-24">
        <Image
          src={Circle1Image}
          alt="circle"
          className="absolute -left-8 top-32 h-[100px] w-[100px] object-contain md:hidden"
        />
        <Image
          src={Circle2Image}
          alt="circle"
          className="absolute -right-8 bottom-0 top-0 my-auto h-[100px] w-[100px] object-contain md:hidden"
        />
        <div className="container mx-auto max-w-5xl px-14 md:px-0">
          <div className="relative mt-16 grid grid-cols-1 md:mt-5 md:grid-cols-[38%_62%] md:pl-32">
            <div className="self-center">
              <p className="font-light">
                <strong className="font-[500]">
                  Instala nuestra caja de alarma{" "}
                  <br className="hidden md:inline" /> inteligente en minutos:
                </strong>{" "}
                solo requiere <br className="hidden md:inline" /> electricidad y
                acceso a Internet <br />
                para conectar tus sirenas.
              </p>
            </div>
            <div className="">
              <Image
                className="hidden md:block"
                src={WifiImage}
                alt="wifi"
              ></Image>
              <Image
                className="mt-10 px-10 md:hidden"
                src={WifiMobileImage}
                alt="wifi"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
