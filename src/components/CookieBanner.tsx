"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Piccolo delay per evitare flash immediato
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[10000] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.14)] rounded-2xl p-6 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full opacity-60 blur-3xl pointer-events-none"></div>

        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-yellow-100 p-2 rounded-xl text-yellow-700 shrink-0">
            <ShieldCheck size={24} />
          </div>

          <div className="flex-grow">
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Privacy &amp; Cookie
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie di terze parti
              (Google Maps). Nessun dato viene venduto a terzi.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98] shadow-md"
              >
                Accetta Tutti
              </button>
              <button
                onClick={handleDecline}
                className="px-5 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]"
              >
                Solo Necessari
              </button>
            </div>

            <div className="flex gap-3 text-[11px] text-gray-400">
              <Link href="/privacy-policy" className="hover:text-gray-700 underline underline-offset-2 transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/cookie-policy" className="hover:text-gray-700 underline underline-offset-2 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 shrink-0"
            aria-label="Chiudi"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
