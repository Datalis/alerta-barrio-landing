import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Image from "next/image";
import AlertSection from "@/components/AlertSection";
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
