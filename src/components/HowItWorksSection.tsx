import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Group2Image from "@/lib/assets/group-2.png";
import DottedRed3Image from "@/lib/assets/dotted-red-3.png";
import DottedRed2Image from "@/lib/assets/dotted-red-2.png";
import AlertImage from "@/lib/assets/alert.png";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative">
      <div className="px-14 md:px-0 container relative z-10 mx-auto flex flex-col items-center py-20 max-w-5xl">
        <SectionTitle>
          <span className="hidden md:inline font-[500]">¿Cómo <span className="text-theme-red font-[900] italic">funciona</span>?</span>
          <span className="md:hidden flex flex-col items-center font-[500] leading-tight">
            ¿Como <br /> <span><em className="font-[900] italic text-theme-red">funciona</em>?</span>
          </span>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10">
          <div className="md:block hidden">
            <Image src={AlertImage} alt="alert" width={350} />
          </div>
          <div className="self-center">
            <p className="font-light text-center md:text-left leading-tight">Con Alerta Barrio, tienes <br />
              acceso a un aplicativo móvil <br />
              que te permite activar <span className="font-[500] md:hidden">2 tipos diferentes de alarma</span> </p>
            <div className="relative hidden md:block">
              <span className="text-5xl font-[500] block mt-5 text-theme-red">2 tipos</span>
              <span className="font-[500]">diferentes de alarmas</span>
              <Image src={DottedRed2Image} alt="dotted" width={150} className="absolute -right-5 top-0 bottom-0 my-auto" />
            </div>
            <div className="relative hidden md:block">
              <p className="mt-20 font-light leading-tight">
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
          <div className="relative md:hidden">
            <p className="font-light text-center">
              También
              <span className="font-[500]"> puedes comunicarte
                rápidamente con el ECU 911</span>.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}