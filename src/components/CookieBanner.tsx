"use client";

import { useState, useEffect } from "react";
import { Info, X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
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
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0">
            <ShieldCheck size={24} />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              Privacy & Cookie
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito e per analizzare il traffico. Alcuni sono necessari per il funzionamento di servizi come Google Maps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98] shadow-md"
              >
                Accetta Tutti
              </button>
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]"
              >
                Rifiuta
              </button>
            </div>
            
            <p className="mt-4 text-[11px] text-gray-400">
               Continuando a navigare, accetti la nostra informativa sulla privacy.
            </p>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
