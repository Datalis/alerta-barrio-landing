import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { codecPro } from "@/lib/fonts";
import Script from "next/script";
export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL('https://alertabarrio.com'),
  title: "Alerta Barrio",
  description:
    "Todo en segundos: activar alarmas desde tu celular, y avisar a todos, a cualquier hora, desde cualquier lugar",
  keywords: ["barrio", "seguridad", "alarmas", "instante", "alerta"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Alerta Barrio",
    siteName: "Alerta Barrio",
    url: "https://alertabarrio.com",
    description:
      "Todo en segundos: activar alarmas desde tu celular, y avisar a todos, a cualquier hora, desde cualquier lugar",
    images: [
      '/og-image.png',
    ],
    locale: "es_ES",
    type: "website",
  },
  other: {
    "theme-color": "#000000",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={codecPro.variable}>
        {children}
        <Footer></Footer>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async={true}
          defer={true}
        />
      </body>
    </html>
  );
}
