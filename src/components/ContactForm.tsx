'use client';

import Image from "next/image";
import FormImage from '@/lib/assets/form.png';
import SectionTitle from './SectionTitle';
import { useRef, useState } from "react";
import ChatImage from '@/lib/assets/CHATEA.png';

export default function ContactForm() {

    const turnstile = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError(false);
        setSuccess(false);
        setPending(true);
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const message = formData.get('message');
        const turnstile = formData.get('cf-turnstile-response');
        const data = {
            email,
            message,
            turnstile
        }
        const request = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await request.json();
        if (response.status === 'success') {
            // alert('Mensaje enviado con éxito');
            setSuccess(true);
            formRef.current?.reset();
        } else {
            // alert('Error al enviar el mensaje');
            setError(true);
        }
        setPending(false);
    }


    return (
        <div id="contact" className="min-h-screen pt-10 z-10 relative">
            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+5930994170801" className="absolute right-0 bottom-10">
                <Image src={ChatImage} alt='chat' width={120} className='' />
            </a>
            <div className="container mx-auto flex flex-col items-center max-w-5xl">
                <SectionTitle>
                    <span className="font-[500] text-white">Formulario de <span className="italic font-[900">Contacto</span></span>
                </SectionTitle>
                <div className="grid grid-cols-2 items-center gap-10 mt-20">
                    <form ref={formRef} onSubmit={onSubmit} className='flex flex-col text-xl font-[500] '>
                        <div
                            className="cf-turnstile checkbox mt-4"
                            data-sitekey={turnstile}
                        />
                        <input required disabled={pending} name="email" type="email" placeholder="Email" className=" border-black border-2 w-full py-3 px-4 rounded-2xl placeholder:text-theme-gray-medium"></input>
                        <textarea required disabled={pending} name="message" placeholder="Mensaje" className=" border-black border-2 w-full mt-5 py-3 px-4 rounded-2xl placeholder:text-theme-gray-medium" rows={5}></textarea>
                        {error && <div className="text-theme-red text-[1rem] mt-1">
                            Error al enviar el mensaje. Intente de nuevo.
                        </div>}
                        {success && <div className="text-teal-700 text-[1rem] mt-1">Mensaje enviado con éxito</div>}
                        <button disabled={pending} type='submit' className={`btn disabled:bg-theme-gray-light mx-auto mt-10`}>Enviar</button>
                    </form>
                    <Image src={FormImage} alt='' width={400} className='h-full object-contain'></Image>
                </div>
                </div>
        </div>
    );
}