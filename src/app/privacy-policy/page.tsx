import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fabbro Armelloni Piacenza",
  description: "Informativa sulla privacy e trattamento dei dati personali di Armelloni Andrea - Opere da Fabbro, ai sensi del Regolamento UE 2016/679 (GDPR).",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-8"
        >
          ← Torna alla Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Informativa sulla Privacy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR) — Aggiornata al {new Date().getFullYear()}
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* 1. Titolare del trattamento */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">1</span>
            Titolare del Trattamento
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 space-y-1 border border-gray-200">
            <p><strong>Denominazione:</strong> Armelloni Andrea — Opere da Fabbro</p>
            <p><strong>Sede legale:</strong> Via Rotta 10 — 29012 Caorso (PC)</p>
            <p><strong>P.IVA:</strong> 01495850339</p>
            <p><strong>Codice Fiscale:</strong> RMLNDR74B16F671V</p>
            <p><strong>Telefono:</strong> +39 347 889 9094</p>
            <p>
              <strong>PEC:</strong>{" "}
              <a href="mailto:armelloniandrea@pec.it" className="text-blue-600 hover:underline">
                armelloniandrea@pec.it
              </a>
            </p>
            <p>
              <strong>Sito web:</strong>{" "}
              <a href="https://www.fabbroarmelloni.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                www.fabbroarmelloni.com
              </a>
            </p>
          </div>
        </section>

        {/* 2. Dati raccolti */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">2</span>
            Tipologie di Dati Raccolti
          </h2>
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Il Titolare raccoglie, direttamente o tramite terze parti, i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
              <li><strong>Dati di contatto</strong>: nome, numero di telefono, indirizzo e-mail forniti volontariamente tramite il modulo di contatto presente sul sito.</li>
              <li><strong>Dati di navigazione</strong>: indirizzo IP, tipo di browser, pagine visitate, orari di accesso — raccolti automaticamente dai log del server.</li>
              <li><strong>Cookie</strong>: vedere la <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> per i dettagli.</li>
            </ul>
          </div>
        </section>

        {/* 3. Finalità e base giuridica */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">3</span>
            Finalità e Base Giuridica del Trattamento
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold text-gray-900 border border-gray-200 rounded-tl-lg">Finalità</th>
                  <th className="text-left p-3 font-bold text-gray-900 border border-gray-200">Base giuridica (GDPR)</th>
                  <th className="text-left p-3 font-bold text-gray-900 border border-gray-200 rounded-tr-lg">Conservazione</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border border-gray-200">Rispondere a richieste tramite il modulo di contatto</td>
                  <td className="p-3 border border-gray-200">Art. 6, par. 1, lett. b) — esecuzione di un contratto / misure precontrattuali</td>
                  <td className="p-3 border border-gray-200">Fino alla conclusione del rapporto + 10 anni</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Sicurezza del sito e prevenzione abusi</td>
                  <td className="p-3 border border-gray-200">Art. 6, par. 1, lett. f) — legittimo interesse</td>
                  <td className="p-3 border border-gray-200">6 mesi</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Analisi statistica delle visite (Google Analytics, se attivato)</td>
                  <td className="p-3 border border-gray-200">Art. 6, par. 1, lett. a) — consenso</td>
                  <td className="p-3 border border-gray-200">14 mesi (come da impostazioni GA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Terze parti */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">4</span>
            Comunicazione a Terze Parti
          </h2>
          <p className="text-sm text-gray-700">
            I dati non vengono ceduti a terzi a fini commerciali. Possono essere condivisi esclusivamente con:
          </p>
          <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1 pl-2">
            <li>Fornitori di servizi tecnici (hosting, email) — in qualità di responsabili del trattamento ex art. 28 GDPR.</li>
            <li>Google LLC (Google Maps, Analytics) — con server negli USA; Google aderisce alle clausole contrattuali standard UE.</li>
            <li>Autorità competenti, nei casi previsti dalla legge.</li>
          </ul>
        </section>

        {/* 5. Diritti dell'interessato */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">5</span>
            I Tuoi Diritti (artt. 15-22 GDPR)
          </h2>
          <p className="text-sm text-gray-700 mb-3">
            Hai il diritto di:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              ["Accesso", "Ottenere conferma del trattamento e copia dei tuoi dati"],
              ["Rettifica", "Correggere dati inesatti o incompleti"],
              ["Cancellazione", "Il \"diritto all'oblio\" nei casi previsti"],
              ["Limitazione", "Limitare il trattamento in determinate circostanze"],
              ["Portabilità", "Ricevere i tuoi dati in formato strutturato"],
              ["Opposizione", "Opporti al trattamento basato su legittimo interesse"],
              ["Revoca consenso", "Revocare il consenso in qualsiasi momento"],
              ["Reclamo", "Presentare reclamo al Garante Privacy (www.garanteprivacy.it)"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900">{title}</p>
                <p className="text-gray-600 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Per esercitare i tuoi diritti, scrivi a:{" "}
            <a href="mailto:armelloniandrea@pec.it" className="text-blue-600 hover:underline">
              armelloniandrea@pec.it
            </a>
          </p>
        </section>

        {/* 6. Cookie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">6</span>
            Cookie
          </h2>
          <p className="text-sm text-gray-700">
            Per informazioni dettagliate sull&apos;utilizzo dei cookie, consulta la nostra{" "}
            <Link href="/cookie-policy" className="text-blue-600 hover:underline font-semibold">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <hr className="border-gray-200 mb-6" />

        <p className="text-xs text-gray-400 text-center">
          Documento aggiornato ad aprile {new Date().getFullYear()} — Armelloni Andrea, P.IVA 01495850339
        </p>
      </div>
    </main>
  );
}
