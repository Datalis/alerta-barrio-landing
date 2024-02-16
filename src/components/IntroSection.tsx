import ArrowImage from "@/lib/assets/arrow.png";
import SectionTitle from "./SectionTitle";
import DoubleCircleImage from "@/lib/assets/DOBLE-CIRCULO.png";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section id="que-es" className="relative">
        <Image src={DoubleCircleImage} alt="circle" width={200} className="hidden lg:block absolute -left-24 top-0" />
        <Image src={DoubleCircleImage} alt="circle" width={200} className="hidden lg:block absolute -right-16 top-72" />

        <div className="px-14 lg:px-0 container mx-auto flex flex-col items-center mt-20">
          <SectionTitle>
            <span className="hidden lg:inline font-[500]">
              ¿Qué es <em className="font-[900] italic">Alerta Barrio</em>?
            </span>
            <span className="lg:hidden flex flex-col items-center font-[500] leading-tight">
              ¿Qué es <br /> <em className="font-[900] italic">Alerta Barrio?</em>
            </span>
          </SectionTitle>
          <div className="text-white mt-20 font-[500] rounded-2xl bg-black px-5 py-2 text-lg">
            Alerta Barrio te ofrece el control total de tu seguridad y la de tus
            seres queridos.
          </div>
          <p className="mt-10 font-light">
            <strong className="font-bold">
              Con nuestro sistema de alarmas, activable en segundos desde tu
              celular
            </strong>
            , puedes notificar <br /> de manera inmediata sobre cualquier
            amenaza que te afecte a ti, a tu familia y a todos en el barrio.
          </p>
          <Image src={ArrowImage} alt="arrow" width={50} className="mt-20" />
        </div>
      </section>
    )
}