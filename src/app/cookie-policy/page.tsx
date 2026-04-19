import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Fabbro Armelloni Piacenza",
  description: "Informativa sull'uso dei cookie sul sito fabbroarmelloni.com — Armelloni Andrea, ai sensi della Direttiva ePrivacy e del Garante Privacy italiano.",
  robots: { index: false, follow: false },
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Ai sensi della Direttiva 2009/136/CE e del Provvedimento del Garante Privacy dell&apos;8 maggio 2014 — Aggiornata al {new Date().getFullYear()}
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* Intro */}
        <section className="mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            Il sito <strong>www.fabbroarmelloni.com</strong>, gestito da <strong>Armelloni Andrea — Opere da Fabbro</strong>
            (P.IVA 01495850339), utilizza cookie e tecnologie simili per garantire il corretto funzionamento del sito,
            migliorare l&apos;esperienza di navigazione e — previo consenso — analizzare il traffico.
            Di seguito trovi tutte le informazioni sui cookie utilizzati.
          </p>
        </section>

        {/* Cosa sono i cookie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">1</span>
            Cosa Sono i Cookie
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano al suo terminale
            (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi agli stessi siti alla
            visita successiva. Possono essere &ldquo;di sessione&rdquo; (eliminati alla chiusura del browser) o
            &ldquo;persistenti&rdquo; (rimangono per un periodo definito).
          </p>
        </section>

        {/* Tipologie di cookie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">2</span>
            Cookie Utilizzati su Questo Sito
          </h2>

          {/* Tecnici */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              Cookie Tecnici e Necessari
              <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">Nessun consenso richiesto</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Nome</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Provenienza</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Scopo</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Durata</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="p-3 border border-gray-200 font-mono text-xs">cookie-consent</td>
                    <td className="p-3 border border-gray-200">Proprio</td>
                    <td className="p-3 border border-gray-200">Memorizza la scelta dell&apos;utente sul consenso cookie</td>
                    <td className="p-3 border border-gray-200">1 anno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
              Cookie di Terze Parti — Google Maps
              <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-semibold">Consenso richiesto</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Il sito incorpora Google Maps per visualizzare la zona di intervento. Google può impostare i propri cookie.
              Consulta la{" "}
              <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Privacy Policy di Google
              </a>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Fornitore</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Scopo</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Policy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="p-3 border border-gray-200">Google LLC (USA)</td>
                    <td className="p-3 border border-gray-200">Visualizzazione mappe interattive, analisi utilizzo</td>
                    <td className="p-3 border border-gray-200">
                      <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                        policies.google.com/privacy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics (opzionale) */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500"></span>
              Cookie Analitici (se attivati)
              <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-semibold">Consenso richiesto</span>
            </h3>
            <p className="text-sm text-gray-600">
              Qualora vengano attivati strumenti di analisi statistica (es. Google Analytics), verranno installati
              cookie per raccogliere informazioni aggregate sull&apos;utilizzo del sito. Tali dati non consentono
              l&apos;identificazione diretta dell&apos;utente e sono utilizzati esclusivamente per migliorare il sito.
            </p>
          </div>
        </section>

        {/* Come gestire i cookie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">3</span>
            Come Gestire o Disabilitare i Cookie
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Puoi revocare o modificare il tuo consenso in qualsiasi momento. Hai le seguenti opzioni:
          </p>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 shrink-0">→ Banner sul sito:</span>
              <span>Alla prima visita viene mostrato un banner. Puoi selezionare &ldquo;Rifiuta&rdquo; per bloccare i cookie non necessari.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 shrink-0">→ Browser:</span>
              <span>Puoi configurare il tuo browser per rifiutare i cookie o cancellarli manualmente. Tieni presente che disabilitare i cookie tecnici potrebbe compromettere il funzionamento del sito.</span>
            </li>
          </ul>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "Chrome", url: "https://support.google.com/chrome/answer/95647?hl=it" },
              { name: "Firefox", url: "https://support.mozilla.org/it/kb/cancellare-i-cookie" },
              { name: "Safari", url: "https://support.apple.com/it-it/guide/safari/sfri11471/mac" },
              { name: "Edge", url: "https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
            ].map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-blue-600 hover:text-blue-800 underline bg-blue-50 rounded-lg p-3 transition-colors"
              >
                Istruzioni {name}
              </a>
            ))}
          </div>
        </section>

        {/* Google opt-out */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shrink-0">4</span>
            Opt-out Google Analytics
          </h2>
          <p className="text-sm text-gray-700">
            Per disattivare il tracciamento da parte di Google Analytics su tutti i siti web, Google mette a disposizione
            il componente aggiuntivo del browser:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              tools.google.com/dlpage/gaoptout
            </a>.
          </p>
        </section>

        <hr className="border-gray-200 mb-6" />

        {/* Contatti */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Contatti del Titolare</h2>
          <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 space-y-1 border border-gray-200">
            <p><strong>Armelloni Andrea — Opere da Fabbro</strong></p>
            <p>Via Rotta 10 — 29012 Caorso (PC)</p>
            <p>P.IVA: 01495850339 | C.F.: RMLNDR74B16F671V</p>
            <p>
              PEC:{" "}
              <a href="mailto:armelloniandrea@pec.it" className="text-blue-600 hover:underline">
                armelloniandrea@pec.it
              </a>
            </p>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            → Leggi l&apos;Informativa Privacy completa
          </Link>
        </div>

        <hr className="border-gray-200 mt-8 mb-6" />
        <p className="text-xs text-gray-400 text-center">
          Documento aggiornato ad aprile {new Date().getFullYear()} — Armelloni Andrea, P.IVA 01495850339
        </p>
      </div>
    </main>
  );
}
