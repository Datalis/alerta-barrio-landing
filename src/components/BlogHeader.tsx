import Image from "next/image";
import Logo from "@/lib/assets/logo.png";
import Link from "next/link";

export default function BlogHeader() {
    return (
        <header className="bg-black py-5">
            <div className="flex items-center container mx-auto">
                <Link href="/" className="flex-1">
                    <Image src={Logo} alt="Logo" width={80} className='mr-5 hidden lg:block' />
                </Link>
                <nav className="flex items-center gap-5">
                    <Link href="/#how-it-works" className="text-black lg:text-white text-3xl lg:text-xl">Producto</Link>
                    <Link href="/#beneficios" className="text-black lg:text-white text-3xl lg:text-xl">Beneficios</Link>
                    <Link href="/#contact" className="text-black lg:text-white text-3xl lg:text-xl">Cotizar</Link>
                </nav>
            </div>
        </header>
    )
}