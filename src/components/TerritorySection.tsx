import { MapPin, Truck, Award } from "lucide-react";

export default function TerritorySection() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden relative" id="territorio">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4" />
              Presenza Locale
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Fabbro a Caorso e Provincia di Piacenza: <br/>
              <span className="text-red-600">Interventi Rapidi e Professionali</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Se cerchi un fabbro affidabile a <strong>Caorso</strong>, Andrea Armelloni è la soluzione vicina a te. 
                Con sede in <strong>Via Rotta 10</strong>, offriamo un servizio di pronto intervento e carpenteria metallica 
                in tutta la <strong>Bassa Piacentina</strong>.
              </p>
              <p className="leading-relaxed">
                Che tu sia a Caorso, Monticelli d’Ongina, Cortemaggiore o Piacenza città, garantiamo professionalità 
                e rapidità per apertura porte, riparazione serrature e lavori in ferro battuto. 
                Scegliere un artigiano locale significa supporto immediato e conoscenza profonda del territorio.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Arrivo Immediato</h4>
                  <p className="text-sm text-gray-600">Copertura capillare a Caorso e dintorni.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Supporto Locale</h4>
                  <p className="text-sm text-gray-600">Sostieni l'artigianato del tuo territorio.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element / Mappa Base Operativa */}
          <div className="lg:w-2/5 w-full">
            <div className="aspect-square bg-gray-100 rounded-3xl relative overflow-hidden shadow-2xl border-8 border-white group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.634674175787!2d9.8436528766861!3d45.09325785882415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780df83796677f3%3A0x6bba3bc7a6af5143!2sVia%20Rotta%2C%2010%2C%2029012%20Caorso%20PC!5e0!3m2!1sit!2sit!4v1741973000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Posizione Fabbro Armelloni"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
