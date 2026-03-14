import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabbro Urgente Piacenza | Apertura Porte 24h",
  description: "Fabbro a Piacenza e provincia. Intervento rapido in 30 minuti. Apertura porte blindate, cambio serrature e riparazioni 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        {/* Global Mobile Sticky CTA (Visibile su tutte le pagine) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-[9999] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <a
            href="tel:+393478899094"
            className="flex w-full items-center justify-center px-6 py-4 text-lg font-bold rounded-xl text-white bg-green-600 shadow-lg active:bg-green-700 hover:bg-green-700 transition-colors duration-200"
          >
            <Phone className="mr-2 h-6 w-6" />
            CHIAMA ORA
          </a>
        </div>

        {/* Global Desktop & Mobile Sticky WhatsApp Button */}
        <a
          href="https://wa.me/393478899094?text=Grazie%20per%20averci%20contattato!%20Risponderemo%20a%20breve!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-4 md:bottom-6 md:right-6 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#20b858] hover:scale-110 transition-all duration-300 z-[9999] flex items-center justify-center animate-bounce group"
          aria-label="Contattaci su WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.035 2.15c-7.665 0-13.88 6.216-13.88 13.882 0 2.45.64 4.838 1.848 6.94L2.148 29.805l7.005-1.838c2.02.106 4.305.654 6.88.654 7.663 0 13.878-6.215 13.878-13.88 0-7.665-6.215-13.88-13.878-13.88zm0 25.334c-2.074 0-4.104-.558-5.882-1.614l-.42-.25-4.372 1.146 1.168-4.26-.275-.437c-1.16-1.84-1.774-3.967-1.774-6.185 0-6.388 5.196-11.584 11.585-11.584 6.39 0 11.587 5.195 11.587 11.584 0 6.39-5.197 11.586-11.587 11.586h-.03zm6.355-8.7c-.348-.174-2.064-1.018-2.383-1.134-.318-.116-.55-.174-.783.174-.23.348-.9 1.134-1.103 1.366-.202.232-.405.26-.753.87-.348-.175-1.472-.544-2.805-1.733-1.036-.925-1.736-2.066-1.94-2.414-.203-.348-.022-.536.152-.71.156-.155.348-.406.522-.61.174-.202.232-.347.348-.58.116-.23.058-.434-.03-.608-.087-.174-.783-1.886-1.073-2.582-.283-.678-.57-.585-.783-.596-.202-.01-.434-.01-.665-.01s-.61.087-.928.435c-.32.348-1.22 1.19-1.22 2.9 0 1.71 1.25 3.36 1.42 3.593.174.232 2.45 3.737 5.928 5.24.83.358 1.478.572 1.98.732.834.266 1.593.228 2.193.138.67-.1 2.062-.843 2.352-1.656.29-.812.29-1.508.203-1.656-.088-.146-.32-.232-.668-.406z"/>
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-gray-900 text-white text-sm py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block pointer-events-none">
            Scrivimi su WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
