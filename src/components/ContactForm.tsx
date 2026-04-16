"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const accessKey = "610d148f-e37e-4dd3-a2c6-6cd029cf2d4f";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const text = `Ciao Andrea! Sono ${name}. Ti contatto dal sito per: ${message}.`;
    const whatsappUrl = `https://wa.me/393478899094?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, "_blank");
    setStatus("success");
  }

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="contatti">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Richiedi un Preventivo o Assistenza</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Compila il modulo sottostante per inviare un messaggio WhatsApp diretto ad Andrea. Riceverai risposta immediata per emergenze o preventivi.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Informazioni Contatto (Sidebar) */}
            <div className="bg-gray-900 md:col-span-2 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#FFD700]">Informazioni</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Sono operativo 24 ore su 24, 7 giorni su 7, inclusi i giorni festivi in tutta la provincia.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#FFD700] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Emergenze</p>
                      <a href="tel:+393478899094" className="text-lg font-bold hover:text-[#FFD700] transition-colors">+39 347 889 9094</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 hidden md:block opacity-20">
                <svg viewBox="0 0 24 24" className="w-48 h-48 -mb-20 -ml-16" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Messaggio Inviato!</h3>
                  <p className="text-gray-700 max-w-sm">
                    Grazie! La tua richiesta è stata preparata. Se non si è aperta automaticamente l'app di WhatsApp, puoi contattarmi direttamente al numero sopra indicato.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition font-medium"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-800 block">
                        Nome e Cognome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white text-gray-900 placeholder:text-gray-500"
                        placeholder="Es: Mario Rossi"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-800 block">
                      Come posso aiutarti?
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white text-gray-900 placeholder:text-gray-500 resize-none"
                      placeholder="Descrivi qui il problema (es. porta bloccata, preventivo serratura...)"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Si è verificato un errore durante l'invio. Riprova più tardi o contattaci telefonicamente.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#128C7E] focus:ring-4 focus:ring-green-300 transition-all shadow-lg active:scale-[0.98]"
                  >
                    Invia su WhatsApp
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Inviando il modulo, accetti il trattamento dei dati personali ai fini del ricontatto.
                  </p>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
