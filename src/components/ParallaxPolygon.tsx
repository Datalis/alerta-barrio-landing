"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function ParallaxPolygon({
  id,
  className = "",
  speed = 1,
}: {
  id: string;
  className?: string;
  speed?: number;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.to(`#${id}`, {
        scrollTrigger: {
          trigger: `#${id}`,
          scrub: 1,
        },
        y: -100 * speed,
        ease: "none",
      });
    });
    return () => ctx?.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={id} className={`${className} parallax-polygon`}></div>;
}
