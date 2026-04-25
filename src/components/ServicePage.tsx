import { ShieldCheck, Clock, Coins, Phone } from "lucide-react";
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import { cities, type CityData } from "@/lib/cities";

/**
 * Genera contenuto SEO unico per ogni città basato su distanza e zona,
 * evitando penalizzazioni Google per contenuto duplicato.
 */
function getCityContent(city: string) {
  const cityData = cities.find((c) => c.name === city);

  // Variazioni di intro basate sulla zona
  const introVariants: Record<string, string> = {
    "Bassa Piacentina": `La Bassa Piacentina è il nostro territorio. Con sede operativa proprio a Caorso, raggiungiamo ${city} in pochi minuti per qualsiasi emergenza: porte bloccate, serrature danneggiate, tapparelle rotte. La vicinanza ci permette di garantire tempi di intervento imbattibili.`,
    "Piacenza città": `${city} e la sua prima cintura urbana rappresentano una delle aree dove interveniamo con maggiore frequenza. Conosciamo perfettamente il tessuto urbano, i condomini e le esigenze di sicurezza della zona. Che tu abiti in centro o in periferia, arriviamo rapidamente per risolvere ogni problema.`,
    "Val d'Arda": `Dalla Bassa Piacentina alla Val d'Arda il passo è breve. Serviamo ${city} e i comuni limitrofi con la stessa professionalità e rapidità che ci contraddistingue, portando la nostra esperienza in serrature, carpenteria metallica e lavorazioni in ferro direttamente a casa tua.`,
    "Val Tidone": `Anche in Val Tidone puoi contare sulla nostra professionalità. Raggiungiamo ${city} per interventi urgenti e lavori programmati di carpenteria metallica, inferriate, cancelli e serrature di sicurezza.`,
    "Val Trebbia": `La Val Trebbia è una delle aree che serviamo con passione. A ${city} garantiamo lo stesso livello di servizio che offriamo nella Bassa Piacentina: rapidità, trasparenza nei costi e materiali di prima qualità.`,
  };

  // Variazioni del paragrafo specializzazione
  const specVariants: Record<string, string> = {
    "Bassa Piacentina": `Essendo la nostra zona di residenza, a ${city} offriamo un servizio particolarmente rapido e conveniente. Non ci sono costi di trasferta aggiuntivi e possiamo intervenire anche per piccoli lavori di manutenzione o riparazione.`,
    "Piacenza città": `A ${city} interveniamo quotidianamente per aperture di porte blindate in condomini, sostituzione serrature per uffici e negozi, e installazione di inferriate per abitazioni al piano terra. La nostra esperienza con le tipologie edilizie cittadine ci permette di operare con la massima efficienza.`,
    "Val d'Arda": `Per i residenti di ${city} e della Val d'Arda, siamo il fabbro di fiducia a cui rivolgersi per ogni esigenza: dal pronto intervento notturno alla realizzazione di cancelli, ringhiere e manufatti in ferro su misura.`,
    "Val Tidone": `A ${city} siamo apprezzati per la nostra affidabilità e la qualità dei materiali utilizzati. Realizziamo inferriate, cancelli automatizzati, ringhiere e interveniamo per aperture porte e sostituzione serrature con cilindro europeo.`,
    "Val Trebbia": `I clienti di ${city} e della Val Trebbia ci scelgono per la combinazione di competenza artigianale e disponibilità 24 ore su 24. Dalla semplice apertura porta al progetto di carpenteria complesso, ogni lavoro riceve la stessa cura e attenzione.`,
  };

  const zona = cityData?.zona || "Piacenza città";
  const distanza = cityData?.distanzaKm || 20;

  const intro = introVariants[zona] || introVariants["Piacenza città"];
  const spec = specVariants[zona] || specVariants["Piacenza città"];

  // Tempo arrivo stimato basato sulla distanza reale
  const tempoArrivo = distanza <= 10 ? "15-20" : distanza <= 20 ? "20-30" : "25-40";

  return { intro, spec, tempoArrivo, distanza, zona };
}

export default function ServicePage({ city }: { city: string }) {
  const cityContent = getCityContent(city);

  // Schema LocalBusiness arricchito
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fabbroarmelloni.it/#localbusiness",
    "name": "Fabbro Armelloni — Andrea Armelloni",
    "alternateName": `Fabbro Urgente ${city}`,
    "image": "/logo.png",
    "description": `Servizio di fabbro urgente a ${city} e provincia di Piacenza. Pronto intervento 24/7 per apertura porte blindate, serrature, carpenteria metallica.`,
    // TODO-CLIENTE: Sostituire con URL definitivo
    "url": "https://www.fabbroarmelloni.it",
    "telephone": "+393478899094",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Rotta, 10",
      "addressLocality": "Caorso",
      "postalCode": "29012",
      "addressRegion": "PC",
      "addressCountry": "IT",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.0487,
      "longitude": 9.8455,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": {
      "@type": "State",
      "name": "Provincia di Piacenza",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Fabbro",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apertura Porte Blindate",
            "description": "Servizio di pronto intervento per apertura porte blindate senza danni, disponibile 24/7.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sostituzione Serrature",
            "description": "Installazione serrature a cilindro europeo di alta sicurezza anti-strappo e anti-trapano.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carpenteria Metallica",
            "description": "Realizzazione cancelli, inferriate, ringhiere, scale e manufatti in ferro su misura.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basculanti e Portoni",
            "description": "Smontaggio, montaggio e riparazione basculanti e portoni per garage e box.",
          },
        },
      ],
    },
    "sameAs": [
      // TODO-CLIENTE: Aggiungere profili social e Google Business Profile
    ],
  };

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        // TODO-CLIENTE: Sostituire con URL definitivo
        "item": "https://www.fabbroarmelloni.it",
      },
      ...(city !== "Piacenza"
        ? [
            {
              "@type": "ListItem",
              "position": 2,
              "name": `Fabbro ${city}`,
              "item": `https://www.fabbroarmelloni.it/fabbro-${cities.find(c => c.name === city)?.slug || city.toLowerCase()}`,
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b-4 border-[#FFD700]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 leading-tight">
              Fabbro Urgente a <span className="text-red-600">{city}</span><br className="hidden sm:block" /> Intervento in {cityContent.tempoArrivo} minuti
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
              Apertura porte blindate, cambio serrature e riparazioni 24/7.
              {cityContent.distanza > 0 && (
                <span className="block text-base mt-2 text-gray-500">
                  📍 A soli {cityContent.distanza} km dalla nostra sede
                </span>
              )}
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
                <p className="text-gray-600">Sono da te in {cityContent.tempoArrivo} minuti dalla chiamata, per risolvere ogni emergenza.</p>
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

        {/* FAQ Section con Schema Google */}
        <FAQSection city={city} />

        {/* Contenuto SEO unico per la città */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerchi un Fabbro a {city}?</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>{cityContent.intro}</p>
              <p>{cityContent.spec}</p>
              <p>
                Sono specializzato nell'<strong>apertura di porte blindate</strong>, sostituzione di serrature a cilindro europeo di alta sicurezza, e riparazione di tapparelle o serrande bloccate. Grazie alla mia posizione strategica a Caorso e alla copertura capillare della {cityContent.zona}, posso garantire un tempo di arrivo medio di soli <strong>{cityContent.tempoArrivo} minuti</strong>, 24 ore al giorno, tutti i giorni dell'anno.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
