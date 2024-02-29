"use client";
import SectionTitle from "./SectionTitle";
import Cell911Image from "@/lib/assets/cell-911.png";
import CellSilenceImage from "@/lib/assets/cell-silence.png";
import CellSoundImage from "@/lib/assets/cell-sound.png";
import DottedLine1 from "@/lib/assets/dotted-line-1.png";
import DottedLine2 from "@/lib/assets/dotted-black-1.png";
import DottedLine3 from "@/lib/assets/LINEA-ALARMAS.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import CirclesImage from "@/lib/assets/CIRCULO-CIRCULITO.png";
import ParallaxPolygon from "./ParallaxPolygon";

export default function AlarmsSection() {
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
          invalidateOnRefresh: true,
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
          },
        },
        opacity: 1,
      });
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="alerts"
      className="h-[calc[100svh - 80px]] relative z-10 pt-10"
    >
      <ParallaxPolygon
        id="red-polygon"
        className="bg-theme-red absolute bottom-[calc(-80%)] z-0 h-[200vh] w-full md:-bottom-[calc(100%+100px)]"
      ></ParallaxPolygon>
      <Image
        src={CirclesImage}
        alt="circle"
        width={200}
        className="absolute -left-16 -top-20 hidden md:block"
      />
      <Image
        src={DottedLine3}
        alt="lines"
        width={5}
        className="absolute -top-10 left-0 right-0 mx-auto md:hidden"
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center">
        <div className="hidden md:block">
          <SectionTitle>
            <span className="font-[500]">
              Alarmas y{" "}
              <em className="text-theme-red font-[900] italic">llamadas</em>
            </span>
          </SectionTitle>
        </div>
        <div className="relative h-full w-full flex-1">
          <div className="scroll absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0">
            <div className="relative">
              <Image
                src={CellSoundImage}
                alt="911"
                className="w-[300px] md:w-[350px]"
              />
              <Image
                src={DottedLine1}
                alt="dotted line"
                className="absolute -right-32 bottom-0 top-0 my-auto hidden md:block"
                width={150}
              />
              <p className="mt-10 w-full whitespace-nowrap text-center text-sm font-[500] text-white md:absolute md:bottom-28 md:left-[100%] md:mt-0 md:text-left md:text-base">
                Presionas el botón en el aplicativo <br /> y de inmediato las{" "}
                sirenas distribuidas <br /> en el barrio emiten un fuerte
                sonido.
              </p>
            </div>
          </div>
          <div className="scroll absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0">
            <div className="relative">
              <Image
                src={CellSilenceImage}
                alt="911"
                className="w-[300px] md:w-[350px]"
              />
              <Image
                src={DottedLine2}
                alt="dotted line"
                className="absolute -left-32 bottom-0 top-0 my-auto hidden md:block"
                width={150}
              />
              <p className="mt-10 w-full whitespace-nowrap text-center text-sm font-[500] text-white md:absolute md:right-[100%] md:top-28 md:mt-0 md:text-left md:text-base md:text-black">
                Presionas el botón en el aplicativo <br /> y se envía de
                inmediato un mensaje de <br />
                alarma al grupo de Whatsapp del <br />
                barrio con tu ubicación GPS.
              </p>
            </div>
          </div>
          <div className="scroll flex h-full w-full items-center justify-center">
            <div className="relative">
              <Image
                src={Cell911Image}
                alt="911"
                className="w-[300px] md:mt-11 md:w-[350px]"
              />
              <Image
                src={DottedLine1}
                alt="dotted line"
                className="absolute -right-32 bottom-28 my-auto hidden -scale-y-[1] md:block"
                width={150}
              />
              <p className="w-full whitespace-nowrap text-center text-sm font-[500] text-white md:absolute md:bottom-60 md:left-[100%] md:text-left md:align-middle md:text-base ">
                Alerta Barrio integra una característica <br /> escencial para
                tu seguridad, un botón <br /> directo de llamada al ECU 911. Con
                solo <br /> un toque, puedes conectarte rapidamente <br /> con
                los servicios de emergencia.
              </p>
              {/* <Image src={DottedLine1} alt="dotted line" className="absolute -right-32 top-0 bottom-0 my-auto" width={150} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
