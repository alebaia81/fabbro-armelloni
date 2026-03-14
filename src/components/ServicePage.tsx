import { ShieldCheck, Clock, Coins, Phone } from "lucide-react";
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";

export default function ServicePage({ city }: { city: string }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Fabbro Urgente ${city}`,
    "image": "https://example.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "PC",
      "addressCountry": "IT"
    },
    "telephone": "+393478899094",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b-4 border-[#FFD700]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 leading-tight">
              Fabbro Urgente a <span className="text-red-600">{city}</span><br className="hidden sm:block" /> Intervento in 30 minuti
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
              Apertura porte blindate, cambio serrature e riparazioni 24/7.
            </p>
            <a
              href="tel:+393478899094"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full text-white bg-green-600 hover:bg-green-700 shadow-xl transform transition hover:-translate-y-1"
            >
              <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              CHIAMA ORA
            </a>
          </div>
        </section>

        <AboutSection city={city} />

        {/* Trust Elements */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Arrivo Rapido</h3>
                <p className="text-gray-600">Sono da te in 30 minuti dalla chiamata, per risolvere ogni emergenza.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-[#D4AF37] mb-6">
                  <Coins className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prezzi Trasparenti</h3>
                <p className="text-gray-600">Preventivo chiaro prima di iniziare il lavoro. Nessuna sorpresa.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Disponibile Ora</h3>
                <p className="text-gray-600">Servizio attivo 24 ore su 24, 7 giorni su 7, anche nei festivi.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Servizi */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="servizi">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">I Miei Servizi a {city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Sicurezza
                </h3>
                <p className="text-gray-600 text-sm">
                  Uno dei miei punti forti è appunto la sicurezza, con la creazione di inferriate (fisse, apribili e con snodi), porte blindate, persiane e serramenti in ferro. In aggiunta è possibile la zincatura a caldo o a freddo, la verniciatura a polvere o a liquido, che garantiscono l'eterno mantenimento del prodotto.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Serratura cilindro europeo
                </h3>
                <p className="text-gray-600 text-sm">
                  Non essendo mai troppa la sicurezza mi sono specializzato anche nella sostituzione di serrature di vario genere e l'applicazione di serrature a cilindro europeo antistrappo/antitrapano e defender di sicurezza.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Basculanti e portoni per box
                </h3>
                <p className="text-gray-600 text-sm">
                  Smontaggio, montaggio e riparazione di basculanti, fornitura di portoni in lamiera in una o due ante per chiusura box o garage.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Riparazioni
                </h3>
                <p className="text-gray-600 text-sm">
                  Non vuoi buttare il tuo vecchio cancello, ringhiera ecc..? Attraverso il processo di sabbiatura è possibile togliere i residui di ruggine o vernice per poi sostituire i pezzi danneggiati. Successivamente la zincatura o la verniciatura lo renderà praticamente nuovo.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Cantieri
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaboro con numerose imprese edili attraverso la fornitura di putrelle e travi in ferro per il sostegno di pareti in cemento ma anche la fornitura di piastre di diverso genere e spessore per il supporto di tetti in legno.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Arredamento
                </h3>
                <p className="text-gray-600 text-sm">
                  Mobili, librerie, tavoli, sedie, sgabelli, specchiere, appendiabiti, vetrine per negozi, sono solo alcune delle cose che posso realizzare su tua richiesta, sia in stile antico che moderno.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition md:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  Piccola carpenteria
                </h3>
                <p className="text-gray-600 text-sm">
                  Produzione di cancelli (predisposti per automazione), cancellate, balconi, ringhiere, corrimano, botole, griglie, scale interne ed sterne (predisposte per gradini in legno o vetro) e tanto altro!
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        {/* Generico contenuto SEO per la città */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerchi un Fabbro a {city}?</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Sei rimasto chiuso fuori casa o hai perso le chiavi a <strong>{city}</strong>? Il nostro servizio di <strong>pronto intervento fabbro</strong> è la soluzione veloce e sicura per rientrare nella tua abitazione o nel tuo negozio senza danni alla porta.
              </p>
              <br/>
              <p>
                Sono specializzato nell'<strong>apertura di porte blindate</strong>, sostituzione di serrature a cilindro europeo di alta sicurezza, e riparazione di tapparelle o serrande bloccate. Grazie alla mia presenza a {city} e dintorni, posso garantire un tempo di arrivo medio di soli 30 minuti, 24 ore al giorno, tutti i giorni dell'anno.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
