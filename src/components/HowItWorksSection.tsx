import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Group2Image from "@/lib/assets/group-2.png";
import DottedRed3Image from "@/lib/assets/dotted-red-3.png";
import DottedRed2Image from "@/lib/assets/dotted-red-2.png";
import AlertImage from "@/lib/assets/alert.png";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative">
      <div className="container relative z-20 mx-auto flex max-w-5xl flex-col items-center px-14 pb-20 md:px-0 md:pt-20">
        <SectionTitle>
          <span className="hidden font-[500] md:inline">
            ¿Cómo{" "}
            <span className="text-theme-red font-[900] italic">funciona</span>?
          </span>
          <span className="flex flex-col items-center font-[500] leading-none md:hidden">
            ¿Como <br />{" "}
            <span>
              <em className="text-theme-red font-[900] italic">funciona</em>?
            </span>
          </span>
        </SectionTitle>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="hidden md:block">
            <Image src={AlertImage} alt="alert" width={350} />
          </div>
          <div className="self-center">
            <p className="text-center font-light leading-tight md:text-left">
              Con Alerta Barrio, tienes <br />
              acceso a un aplicativo móvil <br />
              que te permite activar{" "}
              <span className="font-[500] md:hidden">
                2 tipos diferentes de alarma
              </span>{" "}
            </p>
            <div className="relative hidden md:block">
              <span className="text-theme-red mt-5 block text-5xl font-[500]">
                2 tipos
              </span>
              <span className="font-[500]">diferentes de alarmas</span>
              <Image
                src={DottedRed2Image}
                alt="dotted"
                width={150}
                className="absolute -right-5 bottom-0 top-0 my-auto"
              />
            </div>
            <div className="relative hidden md:block">
              <p className="mt-20 font-light leading-tight">
                También
                <span className="font-[500]">
                  {" "}
                  puedes comunicarte rápidamente con el ECU 911
                </span>
                .
              </p>
              <Image
                src={DottedRed3Image}
                alt="dotted"
                width={400}
                className="absolute -right-[55%] top-[100%]"
              />
            </div>
          </div>
          <div className="self-center">
            <Image src={Group2Image} alt="group" width={400} />
          </div>
          <div className="relative md:hidden">
            <p className="text-center font-light">
              También
              <span className="font-[500]">
                {" "}
                puedes comunicarte rápidamente con el ECU 911
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
