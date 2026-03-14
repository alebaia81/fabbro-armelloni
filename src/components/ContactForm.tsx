"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const accessKey = "610d148f-e37e-4dd3-a2c6-6cd029cf2d4f";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="contatti">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Richiedi un Preventivo o Assistenza</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compila il modulo sottostante per descrivermi il tuo problema. Ti risponderò il prima possibile. Per emergenze, utilizza il numero di telefono.
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
                  <p className="text-gray-600 max-w-sm">
                    Grazie per avermi contattato. Ho ricevuto la tua richiesta e ti risponderò il prima possibile.
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
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value={accessKey} />
                  {/* Soggetto predefinito (opzionale) */}
                  <input type="hidden" name="subject" value="Nuova richiesta dal sito web Fabbro" />
                  {/* Honeypot per Spam (opzionale raccomandato da web3forms) */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                        Nome e Cognome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 focus:bg-white"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 focus:bg-white"
                        placeholder="+39 347 889 9094"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 focus:bg-white"
                      placeholder="mario.rossi@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                      Come posso aiutarti?
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 focus:bg-white resize-none"
                      placeholder="Descrivi brevemente il problema (es. chiave spezzata, porta bloccata, preventivo inferriate...)"
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
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia Richiesta <Send className="w-5 h-5" />
                      </>
                    )}
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
