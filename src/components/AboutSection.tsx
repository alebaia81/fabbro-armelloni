import { Wrench, Award, ThumbsUp } from "lucide-react";

export default function AboutSection({ city }: { city: string }) {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8" id="chi-siamo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-2">Chi Siamo</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Andrea Armelloni, Fabbro esperto attivo a {city} e provincia</h3>
            <div className="text-lg text-gray-600 space-y-4 mb-8">
              <p>
                Con anni di esperienza nel settore, rappresento il punto di riferimento a {city} per tutti i servizi di fabbro, serrature e carpenteria metallica.
              </p>
              <p>
                Unisco l'arte tradizionale del fabbro ferraio con le più moderne tecnologie di sicurezza, garantendo interventi rapidi in emergenza e precisione assoluta per lavorazioni su misura. La mia missione è fornire soluzioni durature, sicure e che soddisfino pienamente le esigenze estetiche e funzionali dei miei clienti.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Professionalità Garantita</h4>
                  <p className="text-sm text-gray-600">Strumenti all'avanguardia per interventi senza scasso.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Materiali di Alta Qualità</h4>
                  <p className="text-sm text-gray-600">Utilizzo solo i migliori marchi di serrature (Cisa, Mottura, Dierre, ecc.).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <ThumbsUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Clienti Soddisfatti</h4>
                  <p className="text-sm text-gray-600">La soddisfazione dei clienti è la mia migliore pubblicità sul territorio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590483257805-ea57a44f5195?q=80&w=1200&auto=format&fit=crop" 
                alt="Fabbro al lavoro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#FFD700] hidden sm:block">
              <div className="text-4xl font-extrabold text-gray-900">10+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Anni di Esperienza</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
