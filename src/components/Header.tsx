'use client';

import BgImage from '@/lib/assets/bg.webp';
import BgMobile from '@/lib/assets/bg-mobile.webp';
import CellImage from '@/lib/assets/cell.webp';
import CellImageMobile from '@/lib/assets/cell-mobile.webp';
import Logo from "@/lib/assets/logo.webp";
import Image from "next/image";
import { useEffect } from 'react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import Link from 'next/link';

export default function Header() {

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
        const btnLinks = document.querySelectorAll('.header-links a');
        btnLinks.forEach(link => {
            link.addEventListener('click', (e: any) => {
                e.preventDefault();
                gsap.to(window, { duration: 0.25, ease: 'power2.out', scrollTo: `#${e.target.dataset.section}` });
            });
        });
    }, []);


    return (
        <header id="header" className="h-svh flex flex-col">
            <Image sizes='100vw' loading='eager' priority={true} src={BgImage} alt="background" className='hidden md:block absolute w-full h-full object-cover bg-right-bottom' />
            <Image sizes='100vw' loading='eager' priority={true} src={BgMobile} alt="background" className='md:hidden absolute w-full h-full object-cover bg-center' />
            <Image sizes='100vw' loading='eager' priority={true} src={CellImage} alt="cell" className='hidden md:block absolute bottom-[15%] h-[500px] object-contain right-0 w-[50%] z-10' />
            <Image sizes='100vw' loading='eager' priority={true} src={CellImageMobile} alt="cell" className='md:hidden absolute top-0 my-auto object-contain right-0 z-10' />
            <div className="bg-theme-red h-[50%] hidden md:flex p-20 clip-1">
                <h1 className="text-[43px] text-center text-white uppercase leading-tight">
                    <span className='font-[500]'>Barrios</span> <span className='font-[900]'>seguros,</span><br />
                    <span className="bg-black rounded-lg px-4 pb-3 pt-4 font-[900]">Protección <span className='font-[500]'>para todos</span></span>
                </h1>
            </div>
            <div className="relative md:bg-black mt-auto h-[40%] md:h-[20%] flex items-center justify-center z-20 clip-2">
                <div className="header-links flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12">
                    <Image src={Logo} alt="Logo" width={80} className='mr-5 hidden md:block' />
                    <Link href="/#how-it-works" data-section="how-it-works" className="text-black md:text-white text-3xl md:text-xl mb-4">Producto</Link>
                    <Link href="/#beneficios" data-section="beneficios" className="text-black md:text-white text-3xl md:text-xl mb-4">Beneficios</Link>
                    <Link href="/#contact" data-section="contact" className="text-black md:text-white text-3xl md:text-xl mb-4">Cotizar</Link>
                </div>
            </div>
        </header>
    );
}