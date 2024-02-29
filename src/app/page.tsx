import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Image from "next/image";
import AlarmsSection from "@/components/AlarmsSection";
import CirclesImage from "@/lib/assets/CIRCULO-CIRCULITO.png";
import IntroSection from "@/components/IntroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection1 from "@/components/BenefitsSection1";
import BenefitsSection2 from "@/components/BenefitsSection2";
import BenefitsSection3 from "@/components/BenefitsSection3";
import BenefitsSection4 from "@/components/BenefitsSection4";
import ParallaxPolygon from "@/components/ParallaxPolygon";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header></Header>
      <IntroSection></IntroSection>
      <HowItWorksSection></HowItWorksSection>
      <AlarmsSection></AlarmsSection>
      <section id="beneficios" className="bg-theme-gray-light relative">
        <Image
          src={CirclesImage}
          alt="circle"
          width={200}
          className="absolute -right-20 top-[180vh] z-10 hidden -scale-x-[1] md:block"
        />
        <div className="relative">
          <ParallaxPolygon
            id="white-polygon"
            speed={1.5}
            className="absolute -bottom-28 z-0  h-[200vh] w-full bg-white"
          ></ParallaxPolygon>
          <div className="container relative mx-auto max-w-5xl px-14 md:px-0">
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
