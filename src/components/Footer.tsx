import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:pb-12 pb-28 border-t-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Col 1 — Brand + Dati legali */}
        <div className="flex flex-col items-start lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 bg-white p-2 rounded-xl hover:opacity-90 transition-opacity w-full max-w-[280px]">
            <div className="relative w-32 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Fabbro Armelloni Piacenza Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="border-l border-gray-200 pl-2">
              <span className="font-bold text-sm tracking-tight text-gray-900 leading-tight block">
                Fabbro a<br /><span className="text-red-600">Piacenza</span>
              </span>
            </div>
          </Link>

          <p className="text-sm text-gray-400 mb-4 pr-4">
            Servizio di pronto intervento fabbro 24 ore su 24, 7 giorni su 7 per l&apos;apertura di porte blindate e sostituzione serrature.
          </p>

          {/* Dati Legali Obbligatori */}
          <div className="mt-2 text-xs text-gray-500 space-y-1 leading-relaxed border-t border-gray-700 pt-4 w-full">
            <p className="font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-2">Dati Aziendali</p>
            <p><span className="text-gray-400">Titolare:</span> Armelloni Andrea</p>
            <p><span className="text-gray-400">Sede:</span> Via Rotta 10 — 29012 Caorso (PC)</p>
            <p><span className="text-gray-400">P.IVA:</span> 01495850339</p>
            <p><span className="text-gray-400">C.F.:</span> RMLNDR74B16F671V</p>
            <p>
              <span className="text-gray-400">PEC:</span>{" "}
              <a href="mailto:armelloniandrea@pec.it" className="hover:text-[#FFD700] transition-colors underline">
                armelloniandrea@pec.it
              </a>
            </p>
          </div>
        </div>

        {/* Col 2 — Servizi */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Servizi</h4>
          <ul className="space-y-2 text-sm">
            <li>Apertura porte blindate</li>
            <li>Cambio serrature europeo</li>
            <li>Riparazione tapparelle</li>
            <li>Apertura casseforti</li>
            <li>Inferriate e grate di sicurezza</li>
            <li>Cancelli e carpenteria in ferro</li>
          </ul>

          {/* Link rapidi con SEO internal linking */}
          <h4 className="text-lg font-bold text-white mt-8 mb-4">Pagine</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#chi-siamo" className="hover:text-[#FFD700] transition-colors">Chi Siamo</Link>
            </li>
            <li>
              <Link href="/#servizi" className="hover:text-[#FFD700] transition-colors">Servizi</Link>
            </li>
            <li>
              <Link href="/i-nostri-lavori" className="hover:text-[#FFD700] transition-colors">I Nostri Lavori</Link>
            </li>
            <li>
              <Link href="/#contatti" className="hover:text-[#FFD700] transition-colors">Contatti</Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[#FFD700] transition-colors">Domande Frequenti</Link>
            </li>
          </ul>
        </div>

        {/* Col 3-4 — Zone servite (con link funzionanti!) */}
        <div className="lg:col-span-2">
          <h4 className="text-lg font-bold text-[#FFD700] mb-4 border-b border-gray-700 pb-2">Zone Servite — Provincia di Piacenza</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.fullSlug}`}
                className="hover:text-[#FFD700] transition-colors"
              >
                Fabbro {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Armelloni Andrea — Opere da Fabbro. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#FFD700] transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/cookie-policy" className="hover:text-[#FFD700] transition-colors underline underline-offset-2">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
