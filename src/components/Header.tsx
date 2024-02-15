import BgImage from '@/lib/assets/bg.png';
import BgMobile from '@/lib/assets/bg-mobile.png';
import CellImage from '@/lib/assets/cell.png';
import CellImageMobile from '@/lib/assets/cell-mobile.png';
import Logo from "@/lib/assets/logo.png";
import Image from "next/image";

export default function Header() {
    return (
        <header id="header" className="h-screen flex flex-col">
            <Image src={BgImage} alt="background" className='hidden lg:block absolute w-full h-full object-cover bg-right-bottom' />
            <Image src={BgMobile} alt="background" className='lg:hidden absolute w-full h-full object-cover bg-center' />
            <Image src={CellImage} alt="cell" className='hidden lg:block absolute bottom-[15%] h-[500px] object-contain right-0 w-[50%] z-10' />
            <Image src={CellImageMobile} alt="cell" className='lg:hidden absolute top-0 my-auto object-contain right-0 z-10' />
            <div className="bg-theme-red h-[50%] hidden lg:flex p-20 clip-1">
                <h1 className="text-[43px] text-center text-white uppercase leading-tight">
                    <span className='font-[500]'>Barrios</span> <span className='font-[900]'>seguros</span>,<br />
                    <span className="bg-black rounded-lg px-4 pb-2 pt-3 font-[900]">Protección para todos</span>
                </h1>
            </div>
            <div className="relative lg:bg-black mt-auto h-[40%] lg:h-[20%] flex items-center justify-center z-20 clip-2">
                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-12">
                    <Image src={Logo} alt="Logo" width={80} className='mr-5 hidden lg:block' />
                    <a href="#contact" className="text-black lg:text-white text-3xl lg:text-xl mb-4">Producto</a>
                    <a href="#about" className="text-black lg:text-white text-3xl lg:text-xl mb-4">Beneficios</a>
                    <a href="#about" className="text-black lg:text-white text-3xl lg:text-xl mb-4">Cotizar</a>
                </div>
            </div>
        </header>
    );
}