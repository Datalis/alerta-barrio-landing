import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import ArrowImage from "@/lib/assets/arrow.png";
import AlertImage from "@/lib/assets/alert.png";
import AlertSection from "@/components/AlertSection";
import Step1Image from "@/lib/assets/1.png";
import Step2Image from "@/lib/assets/2.png";
import Step3Image from "@/lib/assets/3.png";
import Step4Image from "@/lib/assets/4.png";
import AppImage from "@/lib/assets/app.png";
import PlayaImage from "@/lib/assets/PLAYA.png";
import ViajeImage from "@/lib/assets/VIAJE.png";
import WifiLogo from "@/lib/assets/wifi.png";
import AlarmaX5Image from "@/lib/assets/ALARMA-X5.png";
import GroupImage from "@/lib/assets/group.png";
import GroupoSombraImage from "@/lib/assets/GRUPO-SOMBRA.png";
import MujerSeguridadImage from "@/lib/assets/MUJER-SEGURIDAD.png";
import Group2Image from "@/lib/assets/group-2.png";
import DottedRed3Image from "@/lib/assets/dotted-red-3.png";
import DottedRed2Image from "@/lib/assets/dotted-red-2.png";
// import DottedRed1Image from "@/lib/assets/dotted-red-1.png";
import DoubleCircleImage from "@/lib/assets/DOBLE-CIRCULO.png";
import CirclesImage from "@/lib/assets/CIRCULO-CIRCULITO.png";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header></Header>
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
      <section className="relative">
        <div className="px-14 lg:px-0 container relative z-10 mx-auto flex flex-col items-center py-20 max-w-5xl">
          <SectionTitle>
            <span className="hidden lg:inline font-[500]">¿Cómo funciona?</span>
            <span className="lg:hidden flex flex-col items-center font-[500] leading-tight">
              ¿Como <br /> <span><em className="font-[900] italic text-theme-red">funciona</em>?</span>
            </span>
          </SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-10">
            <div className="lg:block hidden">
              <Image src={AlertImage} alt="alert" width={350} />
            </div>
            <div className="self-center">
              <p className="font-light text-center lg:text-left">Con Alerta Barrio, tienes <br />
                acceso a un aplicativo móvil <br />
                que te permite activar <span className="font-[500] lg:hidden">2 tipos diferentes de alarma</span> </p>
              <div className="relative hidden lg:block">
                <span className="text-5xl font-[500] block mt-5">2 tipos</span>
                <span className="font-[500]">diferentes de alarmas</span>
                <Image src={DottedRed2Image} alt="dotted" width={150} className="absolute -right-5 top-0 bottom-0 my-auto" />
              </div>
              <div className="relative hidden lg:block">
                <p className="mt-20 font-light">
                  También
                  <span className="font-[500]"> puedes comunicarte
                    rápidamente con el ECU 911</span>.
                </p>
                <Image src={DottedRed3Image} alt="dotted" width={400} className="absolute -right-[55%] top-[100%]" />
              </div>
            </div>
            <div className="self-center">
              <Image src={Group2Image} alt="group" width={400} />
            </div>
            <div className="relative lg:hidden">
              <p className="font-light text-center">
                También
                <span className="font-[500]"> puedes comunicarte
                  rápidamente con el ECU 911</span>.
              </p>

            </div>
          </div>
        </div>
      </section>
      <AlertSection></AlertSection>
      <section id="beneficios" className="relative bg-theme-gray-light">
        <Image src={CirclesImage} alt="circle" width={200} className="hidden lg:block absolute -right-20 -scale-x-[1] top-[180vh] z-10" />
        <div className="relative">
          <ParallaxPolygon id="white-polygon" speed={1.5} className="bg-white h-[200vh] absolute w-full z-0 bottom-20"></ParallaxPolygon>
          <div className="px-14 lg:px-0 container mx-auto max-w-5xl relative">
            <BenefitsSection1></BenefitsSection1>
            <BenefitsSection2></BenefitsSection2>
            <BenefitsSection3></BenefitsSection3>
            <BenefitsSection4></BenefitsSection4>
          </div>
        </div>
        <ContactForm></ContactForm>
      </section>

    </main>
  );
}
