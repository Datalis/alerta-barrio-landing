import Image from "next/image";
import Step3Image from "@/lib/assets/3.webp";
import AlarmaX5Image from "@/lib/assets/ALARMA-X5.webp";
import GroupImage from "@/lib/assets/group.webp";

export default function BenefitsSection3() {
    return (
        <div className="py-14 flex flex-col z-10 relative">
            <div className="flex flex-col">
                <div className="flex flex-col items-center md:items-start">
                    <Image src={Step3Image} alt="step1" width={150} />
                    <p className="mt-10 font-light">
                        Cada comunidad puede disfrutar de una cobertura <br className="hidden md:inline" />
                        completa, con la posibilidad de incluir hasta <br className="hidden md:inline" />
                        <span className="font-[500]"> 5
                            sirenas por cada alarma.</span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-[50%] self-center md:self-start">
                        <Image src={AlarmaX5Image} alt="alarma" className="mt-10 w-[180px] md:w-[250px]" />
                    </div>
                    <div className="flex-[50%]">
                        <p className="max-w-prose font-light md:ml-20 md:mt-10">
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
        </div>
    );
}