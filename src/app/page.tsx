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
      <section id="beneficios" className="relative">
        <Image src={CirclesImage} alt="circle" width={200} className="absolute -right-20 -scale-x-[1] top-[200vh] z-10" />
        <div className="section-clip-1"></div>
        <div className="section-clip-2"></div>
        {/* <div className="section-clip-3"></div> */}
        <div className="px-14 lg:px-0 container mx-auto py-10 max-w-5xl">
          <div className="min-h-screen w-full flex flex-col items-center z-10 relative">
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
                  Solo abres la aplicación, presionas
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
          <div className="min-h-[90vh] z-10 relative">
            <Image src={Step2Image} alt="step1" width={150} />
            <div className="flex items-center gap-20 mt-10">
              <p className="inline font-light">Puedes activar las alarmas en
                <span className="font-[500]"> cualquier momento y desde <br />
                  cualquier lugar</span>
                , ya sea mientras disfrutas de unas vacaciones <br />
                en la playa o incluso desde otro país.</p>
              <span className="bg-black px-8 py-3 rounded-2xl text-white text-lg font-[500] leading-tight">
                Lo único que necesitas es tener <br />
                conexión a internet.</span>
            </div>
            <div className="grid grid-cols-[1fr_2fr_1fr] mt-10">
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
          <div className="min-h-screen flex flex-col z-10 relative">
            <div className="grid grid-cols-2 h-full flex-1 pt-0 pb-10">
              <div className="flex flex-col">
                <Image src={Step3Image} alt="step1" width={150} />
                <p className="mt-10 font-light">
                  Cada comunidad puede disfrutar de una cobertura <br />
                  completa, con la posibilidad de incluir hasta <br />
                  <span className="font-[500]"> 5
                    sirenas por cada alarma.</span>
                </p>
                <Image src={AlarmaX5Image} alt="alarma" width={200} className="mt-10" />
              </div>
              <div className="self-end">
                <p className="max-w-prose font-light ml-20">
                  Además,
                  <span className="font-[500]"> es posible conectar al servicio a tantos
                    residentes como sea necesario</span>,
                  de acuerdo con los
                  términos del acuerdo comercial.
                </p>
                <Image src={GroupImage} alt="group" className="w-full mt-10" />
              </div>
            </div>
          </div>
          <div className="min-h-screen flex flex-col z-10 relative">
            <div className="grid grid-cols-2 flex-1 py-20 gap-x-10">
              <div className="flex flex-col">
                <Image src={Step4Image} alt="step1" width={150} />
                <Image src={GroupoSombraImage} alt="group" width={400} className="my-20" />
                <span className="block self-end mt-auto bg-black px-8 py-3 rounded-2xl text-white text-lg font-[500] leading-tight">
                  Ideal para los responsables de <br />
                  la
                  seguridad en la comunidad.</span>
              </div>
              <div className="self-end justify-self-end">
                <Image src={MujerSeguridadImage} alt="group" width={400} className="mt-10" />
              </div>
            </div>
          </div>
        </div>
        <ContactForm></ContactForm>
      </section>

    </main>
  );
}
