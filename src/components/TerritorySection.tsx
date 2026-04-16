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
          
          {/* Visual Element / Placeholder for map or image */}
          <div className="lg:w-2/5 w-full">
            <div className="aspect-square bg-gray-100 rounded-3xl relative overflow-hidden shadow-2xl border-8 border-white group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/5 backdrop-blur-[2px] z-20">
                <MapPin className="w-16 h-16 text-red-600 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Base Operativa</h3>
                <p className="text-gray-700 font-medium italic">Via Rotta 10, Caorso (PC)</p>
              </div>
              {/* Overlay pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
