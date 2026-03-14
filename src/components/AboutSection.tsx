import { Wrench, Award, ThumbsUp } from "lucide-react";

export default function AboutSection({ city }: { city: string }) {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8" id="chi-siamo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          
          <div className="w-full">
            <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-2">Chi Siamo</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Andrea Armelloni, Fabbro esperto attivo a {city} e provincia</h3>
            <div className="text-lg text-gray-600 space-y-4 mb-8 max-w-3xl">
              <p>
                Con anni di esperienza nel settore, rappresento il punto di riferimento a {city} per tutti i servizi di fabbro, serrature e carpenteria metallica.
              </p>
              <p>
                Unisco l'arte tradizionale del fabbro ferraio con le più moderne tecnologie di sicurezza, garantendo interventi rapidi in emergenza e precisione assoluta per lavorazioni su misura. La mia missione è fornire soluzioni durature, sicure e che soddisfino pienamente le esigenze estetiche e funzionali dei miei clienti.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
        </div>
      </div>
    </section>
  );
}
