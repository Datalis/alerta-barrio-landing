"use client";

import Image from "next/image";
import FormImage from "@/lib/assets/form.webp";
import SectionTitle from "./SectionTitle";
import { useRef, useState } from "react";
import ChatImage from "@/lib/assets/CHATEA.webp";

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
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");
    const turnstile = formData.get("cf-turnstile-response");
    const data = {
      email,
      message,
      turnstile,
    };
    const request = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    if (response.status === "success") {
      // alert('Mensaje enviado con éxito');
      setSuccess(true);
      formRef.current?.reset();
    } else {
      // alert('Error al enviar el mensaje');
      setError(true);
    }
    setPending(false);
  };

  return (
    <div id="contact" className="relative z-10 pt-14 md:min-h-screen">
      <a
        aria-label="Chat on WhatsApp"
        target="_blank"
        href="https://wa.me/+5930994170801"
        className="absolute bottom-10 right-0"
      >
        <Image src={ChatImage} alt="chat" className="w-[80px] md:w-[120px]" />
      </a>

      <div className="container mx-auto flex max-w-5xl flex-col items-center px-14 md:px-0">
        <SectionTitle>
          <span className="hidden font-[500] md:block">
            Formulario de{" "}
            <span className="font-[900 text-theme-red italic">Contacto</span>
          </span>
          <span className="flex flex-col text-center font-[500] leading-none md:hidden">
            Formulario de <br />
            <em className="text-theme-red font-[900] italic">Contacto</em>
          </span>
        </SectionTitle>
        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col text-xl font-[500] "
          >
            <div
              className="cf-turnstile checkbox mt-4"
              data-sitekey={turnstile}
            />
            <input
              required
              disabled={pending}
              name="email"
              type="email"
              placeholder="Email"
              className=" placeholder:text-theme-gray-medium w-full rounded-2xl border-2 border-black px-4 py-3"
            ></input>
            <textarea
              required
              disabled={pending}
              name="message"
              placeholder="Mensaje"
              className=" placeholder:text-theme-gray-medium mt-5 w-full rounded-2xl border-2 border-black px-4 py-3"
              rows={5}
            ></textarea>
            {error && (
              <div className="text-theme-red mt-1 text-[1rem]">
                Error al enviar el mensaje. Intente de nuevo.
              </div>
            )}
            {success && (
              <div className="mt-1 text-[1rem] text-teal-700">
                Mensaje enviado con éxito
              </div>
            )}
            <button
              disabled={pending}
              type="submit"
              className={`btn disabled:bg-theme-gray-light mx-auto mt-10`}
            >
              Enviar
            </button>
          </form>
          <Image
            src={FormImage}
            alt=""
            width={400}
            className="h-36 object-contain md:h-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}
