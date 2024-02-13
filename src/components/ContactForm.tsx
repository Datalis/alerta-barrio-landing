import Image from "next/image";
import FormImage from '@/lib/assets/form.png';
import SectionTitle from './SectionTitle';

export default function ContactForm() {
    return (
        <section id="contact" className="min-h-screen bg-theme-gray-light pt-20">
            <div className="container mx-auto flex flex-col items-center max-w-5xl">
                {/* <h3 className="text-3xl font-bold">Formulario de <span className="italic font-black text-theme-red">Contacto</span></h3> */}
                <SectionTitle>
                Formulario de <span className="italic font-black text-theme-red">Contacto</span>
                </SectionTitle>
                <div className="grid grid-cols-2 items-center gap-20 mt-20">
                    <form className='flex flex-col text-xl font-bold '>
                        <input type="email" placeholder="Email" className="border-black border-2 w-full py-3 px-4 rounded-2xl placeholder:text-theme-gray-light"></input>
                        <textarea placeholder="Mensaje" className="border-black border-2 w-full mt-5 py-3 px-4 rounded-2xl placeholder:text-theme-gray-light" name="" id="" rows={5}></textarea>
                        <button type='submit' className='btn mx-auto mt-10'>Enviar</button>
                    </form>
                    <Image src={FormImage} alt='' width={400} className='h-full object-contain'></Image>
                </div>
            </div>
        </section>
    );
}