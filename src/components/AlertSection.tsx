"use client";
import SectionTitle from "./SectionTitle";
import Cell911Image from "@/lib/assets/cell-911.png";
import CellSilenceImage from "@/lib/assets/cell-silence.png";
import CellSoundImage from "@/lib/assets/cell-sound.png";
import DottedLine1 from "@/lib/assets/dotted-line-1.png";
import DottedLine2 from "@/lib/assets/dotted-black-1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import CirclesImage from "@/lib/assets/CIRCULO-CIRCULITO.png";

export default function AlertSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.to("#alerts", {
        scrollTrigger: {
          trigger: "#alerts",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          // markers: true,
          pin: true,
          onUpdate: (self) => {
            if (self.progress < 1 / 3) {
              gsap.to(".scroll:nth-child(1)", {
                opacity: 1,
              });
            } else {
              gsap.to(".scroll:nth-child(1)", {
                opacity: 0,
              });
            }
            if (self.progress > 1 / 3 && self.progress < 2 / 3) {
              gsap.to(".scroll:nth-child(2)", {
                opacity: 1,
              });
            } else {
              gsap.to(".scroll:nth-child(2)", {
                opacity: 0,
              });
            }
            if (self.progress > 2 / 3) {
              gsap.to(".scroll:nth-child(3)", {
                opacity: 1,
              });
            } else {
              gsap.to(".scroll:nth-child(3)", {
                opacity: 0,
              });
            }
          }
        },
        opacity: 1,
      })
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section id="alerts" className="relative h-screen pt-10 z-10">
      <div className="section-clip-3"></div>
      <Image src={CirclesImage} alt="circle" width={200} className="absolute -left-16 -top-20" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center">
        <SectionTitle>
          <span className="text-theme-red font-[500]">
            Alarmas y <em className="italic font-[900]">llamadas</em>
          </span>
        </SectionTitle>
        <div className="relative h-full w-full flex-1">
          <div className="scroll absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0">
            <div className="relative">
              <Image src={CellSoundImage} alt="911" width={350} />
              <Image src={DottedLine1} alt="dotted line" className="absolute -right-32 top-0 bottom-0 my-auto" width={150} />
              <p className="absolute bottom-28 left-[100%] whitespace-nowrap text-white font-[500]">
                Presionas el botón en el aplicativo <br /> y de inmediato las{" "}
                sirenas distribuidas <br /> en el barrio emiten un fuerte
                sonido.
              </p>
            </div>
          </div>
          <div className="scroll absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0">
            <div className="relative">
              <Image src={CellSilenceImage} alt="911" width={350} />
              <Image src={DottedLine2} alt="dotted line" className="absolute -left-32 top-0 bottom-0 my-auto" width={150} />
              <p className="absolute top-28 right-[100%] whitespace-nowrap font-[500]">
                Presionas el botón en el aplicativo <br /> y se envía de inmediato
                un mensaje de <br />
                alarma al grupo de Whatsapp del <br />
                barrio con tu ubicación GPS.
              </p>
            </div>
          </div>
          <div className="scroll flex h-full w-full items-center justify-center">
            <div className="relative">
              <Image src={Cell911Image} alt="911" width={350} className="mt-11" />
              <Image src={DottedLine1} alt="dotted line" className="absolute -right-32 -scale-y-[1] bottom-28 my-auto" width={150} />
              <p className="absolute bottom-60 align-middle left-[100%] whitespace-nowrap text-white font-[500] ">
                Alerta Barrio integra una característica <br /> escencial para tu seguridad, un botón <br /> directo de llamada al ECU 911.
                Con solo <br /> un toque, puedes conectarte rapidamente <br /> con los servicios de emergencia.
              </p>
              {/* <Image src={DottedLine1} alt="dotted line" className="absolute -right-32 top-0 bottom-0 my-auto" width={150} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
