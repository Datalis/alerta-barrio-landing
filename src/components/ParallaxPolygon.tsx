'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function ParallaxPolygon({
    id,
    className = "",
    speed = 1
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
                    // start: "top top",
                    // end: "+=100%",
                    scrub: 1,
                    // markers: true,
                    // onUpdate: (self) => {
                    //     gsap.to(`#${id}`, {
                    //         clipPath: `polygon(0 ${50 - self.progress * 50}%, 100% 0%, 100% ${50 + self.progress * 50}%, 0 100%)`
                    //     });
                    // }
                },
                // y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.01,
                y: -100 * speed,
                ease: "none"
            });
        });
        return () => ctx?.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div id={id} className={`${className} parallax-polygon`} style={{
            clipPath: "polygon(0 50%, 100% 0%, 100% 50%, 0 100%)"
        }}></div>
    );
}