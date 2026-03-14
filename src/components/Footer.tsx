import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:pb-12 pb-28 border-t-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 bg-white p-2 rounded-xl hover:opacity-90 transition-opacity w-full max-w-[280px]">
            {/* Fabbro Armelloni Logo - Adattato per stare nella griglia */}
            <div className="relative w-32 h-10 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Fabbro Armelloni Piacenza Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="border-l border-gray-200 pl-2">
              <span className="font-bold text-sm tracking-tight text-gray-900 leading-tight block">Fabbro a<br/><span className="text-red-600">Piacenza</span></span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 mb-4 pr-4">
            Servizio di pronto intervento fabbro 24 ore su 24, 7 giorni su 7 per l'apertura di porte blindate e sostituzione serrature.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Servizi</h4>
          <ul className="space-y-2 text-sm">
            <li>Apertura porte blindate</li>
            <li>Cambio serrature europeo</li>
            <li>Riparazione tapparelle</li>
            <li>Apertura casseforti</li>
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          <h4 className="text-lg font-bold text-[#FFD700] mb-4 border-b border-gray-700 pb-2">Zone Servite</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {cities.map((city) => (
              <a 
                key={city.slug} 
                href={`/`}
                className="hover:text-[#FFD700] transition-colors"
              >
                Fabbro {city.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Fabbro Urgente Piacenza. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
