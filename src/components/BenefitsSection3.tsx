import Image from "next/image";
import Step3Image from "@/lib/assets/3.png";
import AlarmaX5Image from "@/lib/assets/ALARMA-X5.png";
import GroupImage from "@/lib/assets/group.png";

export default function BenefitsSection3() {
    return (
        <div className="py-14 flex flex-col z-10 relative">
            {/* <div className="grid grid-cols-2 h-full flex-1">
                <div className="flex flex-col">
                    <Image src={Step3Image} alt="step1" width={150} />
                    <p className="mt-10 font-light">
                        Cada comunidad puede disfrutar de una cobertura <br />
                        completa, con la posibilidad de incluir hasta <br />
                        <span className="font-[500]"> 5
                            sirenas por cada alarma.</span>
                    </p>
                    <Image src={AlarmaX5Image} alt="alarma" width={200} className="mt-10" />
                </div>
                <div className="self-end mt-[100px]">
                    <p className="max-w-prose font-light ml-20">
                        Además,
                        <span className="font-[500]"> es posible conectar al servicio a tantos
                            residentes como sea necesario</span>,
                        de acuerdo con los
                        términos del acuerdo comercial.
                    </p>
                    <Image src={GroupImage} alt="group" className="w-full mt-10" />
                </div>
            </div> */}
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <Image src={Step3Image} alt="step1" width={150} />
                    <p className="mt-10 font-light">
                        Cada comunidad puede disfrutar de una cobertura <br />
                        completa, con la posibilidad de incluir hasta <br />
                        <span className="font-[500]"> 5
                            sirenas por cada alarma.</span>
                    </p>

                </div>
                <div className="flex items-start">
                    <div className="flex-[50%]">
                        <Image src={AlarmaX5Image} alt="alarma" width={250} className="mt-10" />
                    </div>
                    <div className="flex-[50%]">
                        <p className="max-w-prose font-light ml-20 mt-10">
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