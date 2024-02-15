import BgImage from '@/lib/assets/bg.png';
import CellImage from '@/lib/assets/cell.png';
import Logo from "@/lib/assets/logo.png";
import Image from "next/image";

export default function Header() {
    return (
        <header id="header" className="h-screen flex flex-col">
            <Image src={BgImage} alt="background" layout="fill" objectFit="cover" objectPosition="left" />
            <Image src={CellImage} alt="cell"  className='absolute bottom-[20%] h-[500px] object-contain right-0 w-[50%] z-10'/>
            <div className="bg-theme-red h-[50%] flex p-20 clip-1">
                <h1 className="text-[43px] text-center text-white uppercase leading-tight">
                    <span className='font-[500]'>Barrios</span> <span className='font-[900]'>seguros</span>,<br />
                    <span className="bg-black rounded-lg px-4 pb-2 pt-3 font-[900]">Protección para todos</span>
                </h1>
            </div>
            <div className="relative bg-black mt-auto h-[25%] flex items-center justify-center z-20 clip-2">
                <div className="flex items-end gap-5">
                    <Image src={Logo} alt="Logo" width={100} className='mr-12' />
                    <a href="#contact" className="btn">Producto</a>
                    <a href="#about" className="btn">Beneficios</a>
                    <a href="#about" className="btn">Cotizar</a>
                </div>
            </div>
        </header>
    );
}