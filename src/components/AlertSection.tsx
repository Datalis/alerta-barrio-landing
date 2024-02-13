"use client";
import SectionTitle from "./SectionTitle";
import Cell911Image from "@/lib/assets/cell-911.png";
import CellSilenceImage from "@/lib/assets/cell-silence.png";
import CellSoundImage from "@/lib/assets/cell-sound.png";
import DottedLine1 from "@/lib/assets/dotted-line-1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

export default function AlertSection() {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // let ctx = gsap.context(() => {
    //   const panels = gsap.utils.toArray(".scroll") as HTMLElement[];
    //   let tops = panels.map((panel) =>
    //     ScrollTrigger.create({ trigger: panel, start: "top top" })
    //   );
    //   panels.forEach((panel, i) => {
    //     ScrollTrigger.create({
    //       trigger: panel,
    //       start: () =>
    //         panel.offsetHeight < window.innerHeight
    //           ? "top top"
    //           : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    //       pin: true,
    //       pinSpacing: false,
    //     });
    //     ScrollTrigger.create({
    //       snap: {
    //         snapTo: (progress, self: any) => {
    //           let panelStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
    //             snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
    //           return gsap.utils.normalize(
    //             0,
    //             ScrollTrigger.maxScroll(window),
    //             snapScroll
    //           ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    //         },
    //         duration: 0.5,
    //       },
    //     });
    //   });
    // });
    // return () => ctx?.revert();
  }, []);

  return (
    <section id="alerts" className="relative h-screen">
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center pt-10">
        <SectionTitle>
          <span className="text-theme-red">
            Alarmas y <em>llamadas</em>
          </span>
        </SectionTitle>
        <div className="relative h-full w-full flex-1">
          <div className="scroll flex h-full w-full items-center justify-center">
            <div className="relative">
              <Image src={Cell911Image} alt="911" width={300} />
              <p className="absolute bottom-28 left-[100%] whitespace-nowrap text-sm">
                Presionas el botón en el aplicativo <br /> y de inmediato las{" "}
                <span className="font-bold">
                  sirenas distribuidas <br /> en el barrio emiten un fuerte
                  sonido.
                </span>
              </p>
              {/* <Image src={DottedLine1} alt="dotted line" className="absolute -right-32 top-0 bottom-0 my-auto" width={150} /> */}
            </div>
          </div>
          {/* <div className="scroll absolute top-0 left-0 flex items-center justify-center bg-blue-500 w-full h-full opacity-0">
            <div className="">
              <Image src={CellSilenceImage} alt="911" width={300} />
            </div>
          </div>
          <div className="scroll absolute top-0 left-0 flex items-center justify-center bg-yellow-500 w-full h-full opacity-0">
            <div className="">
              <Image src={CellSoundImage} alt="911" width={300} />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
