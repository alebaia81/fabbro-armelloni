"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto costa un intervento del fabbro a Piacenza?",
    answer:
      "Il costo dipende dal tipo di intervento. Un'apertura porta standard parte da circa 80-120€, mentre la sostituzione di una serratura a cilindro europeo varia tra 150 e 300€ in base al modello scelto. Fornisco sempre un preventivo chiaro e trasparente prima di iniziare qualsiasi lavoro, senza sorprese.",
  },
  {
    question: "Il fabbro interviene anche di notte e nei giorni festivi?",
    answer:
      "Sì, il servizio di pronto intervento è attivo 24 ore su 24, 7 giorni su 7, compresi weekend e festivi. In caso di emergenza notturna (chiavi perse, porta bloccata), garantisco l'arrivo entro 30 minuti in tutta la provincia di Piacenza.",
  },
  {
    question: "Quanto tempo ci vuole per aprire una porta blindata?",
    answer:
      "Con le tecniche professionali e gli strumenti adeguati, l'apertura di una porta blindata richiede mediamente dai 15 ai 45 minuti, senza danneggiare la porta. Utilizzo metodi non distruttivi che preservano l'integrità della serratura e della porta stessa.",
  },
  {
    question: "Fate anche lavori di carpenteria e ferro battuto?",
    answer:
      "Assolutamente sì. Oltre al pronto intervento, realizzo cancelli, inferriate, ringhiere, scale in ferro, basculanti, portoni, arredi in metallo e molto altro. Ogni lavoro è realizzato su misura, con possibilità di zincatura a caldo o verniciatura a polvere per una durata nel tempo.",
  },
  {
    question: "Quali zone servite nella provincia di Piacenza?",
    answer:
      "Copro l'intera provincia di Piacenza con sede operativa a Caorso (Via Rotta 10). Intervengo rapidamente a Piacenza città, Fiorenzuola d'Arda, Castel San Giovanni, Monticelli d'Ongina, Cortemaggiore, Podenzano, Pontenure, Rottofreno, Rivergaro, Carpaneto e in tutti i comuni della provincia.",
  },
  {
    question: "Come posso richiedere un preventivo gratuito?",
    answer:
      "Puoi richiedere un preventivo gratuito e senza impegno in diversi modi: chiamando direttamente al numero 347 889 9094, inviando un messaggio WhatsApp cliccando il pulsante verde sul sito, oppure compilando il modulo di contatto nella sezione dedicata. Rispondo sempre entro pochi minuti.",
  },
  {
    question: "Che tipo di serrature installate?",
    answer:
      "Mi sono specializzato nell'installazione di serrature a cilindro europeo di alta sicurezza, con sistemi anti-strappo, anti-trapano e anti-bumping. Lavoro con i migliori marchi del settore come Cisa, Mottura, Dierre e altri, garantendo la massima protezione per la tua abitazione o attività commerciale.",
  },
  {
    question: "Offrite garanzia sui lavori eseguiti?",
    answer:
      "Sì, tutti i lavori sono coperti da garanzia. Le serrature e i materiali installati hanno garanzia del produttore (generalmente da 2 a 5 anni), mentre la manodopera è garantita per la corretta esecuzione. In caso di problemi, intervengo nuovamente senza costi aggiuntivi.",
  },
];

export default function FAQSection({ city = "Piacenza" }: { city?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema FAQ per Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-gray-600">
            Tutto quello che devi sapere sul nostro servizio di fabbro a {city} e provincia.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
