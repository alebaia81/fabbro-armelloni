export interface CityData {
  name: string;
  slug: string;
  fullSlug: string;
  /** Distanza approssimativa dalla sede di Caorso in km */
  distanzaKm: number;
  /** Zona / area geografica per contenuto unico */
  zona: string;
}

export const cities: CityData[] = [
  // --- Bassa Piacentina (zona sede) ---
  { name: "Caorso", slug: "caorso", fullSlug: "fabbro-caorso", distanzaKm: 0, zona: "Bassa Piacentina" },
  { name: "Castelvetro Piacentino", slug: "castelvetro-piacentino", fullSlug: "fabbro-castelvetro-piacentino", distanzaKm: 8, zona: "Bassa Piacentina" },
  { name: "Monticelli d'Ongina", slug: "monticelli-dongina", fullSlug: "fabbro-monticelli-dongina", distanzaKm: 7, zona: "Bassa Piacentina" },
  { name: "Villanova sull'Arda", slug: "villanova-sullarda", fullSlug: "fabbro-villanova-sullarda", distanzaKm: 12, zona: "Bassa Piacentina" },
  { name: "Besenzone", slug: "besenzone", fullSlug: "fabbro-besenzone", distanzaKm: 10, zona: "Bassa Piacentina" },
  { name: "Cortemaggiore", slug: "cortemaggiore", fullSlug: "fabbro-cortemaggiore", distanzaKm: 14, zona: "Bassa Piacentina" },
  { name: "San Pietro in Cerro", slug: "san-pietro-in-cerro", fullSlug: "fabbro-san-pietro-in-cerro", distanzaKm: 11, zona: "Bassa Piacentina" },
  { name: "Calendasco", slug: "calendasco", fullSlug: "fabbro-calendasco", distanzaKm: 22, zona: "Bassa Piacentina" },

  // --- Piacenza città e prima cintura ---
  { name: "Piacenza", slug: "piacenza", fullSlug: "fabbro-piacenza", distanzaKm: 18, zona: "Piacenza città" },
  { name: "Podenzano", slug: "podenzano", fullSlug: "fabbro-podenzano", distanzaKm: 25, zona: "Piacenza città" },
  { name: "Pontenure", slug: "pontenure", fullSlug: "fabbro-pontenure", distanzaKm: 15, zona: "Piacenza città" },
  { name: "Gossolengo", slug: "gossolengo", fullSlug: "fabbro-gossolengo", distanzaKm: 24, zona: "Piacenza città" },
  { name: "Gragnano Trebbiense", slug: "gragnano-trebbiense", fullSlug: "fabbro-gragnano-trebbiense", distanzaKm: 27, zona: "Piacenza città" },
  { name: "San Giorgio Piacentino", slug: "san-giorgio-piacentino", fullSlug: "fabbro-san-giorgio-piacentino", distanzaKm: 28, zona: "Piacenza città" },
  { name: "Cadeo", slug: "cadeo", fullSlug: "fabbro-cadeo", distanzaKm: 12, zona: "Piacenza città" },
  { name: "Rottofreno", slug: "rottofreno", fullSlug: "fabbro-rottofreno", distanzaKm: 28, zona: "Piacenza città" },

  // --- Val d'Arda ---
  { name: "Fiorenzuola d'Arda", slug: "fiorenzuola-darda", fullSlug: "fabbro-fiorenzuola-darda", distanzaKm: 18, zona: "Val d'Arda" },
  { name: "Alseno", slug: "alseno", fullSlug: "fabbro-alseno", distanzaKm: 22, zona: "Val d'Arda" },
  { name: "Carpaneto Piacentino", slug: "carpaneto-piacentino", fullSlug: "fabbro-carpaneto-piacentino", distanzaKm: 24, zona: "Val d'Arda" },
  { name: "Lugagnano Val d'Arda", slug: "lugagnano-val-darda", fullSlug: "fabbro-lugagnano-val-darda", distanzaKm: 28, zona: "Val d'Arda" },
  { name: "Vigolzone", slug: "vigolzone", fullSlug: "fabbro-vigolzone", distanzaKm: 30, zona: "Val d'Arda" },

  // --- Val Tidone ---
  { name: "Castel San Giovanni", slug: "castel-san-giovanni", fullSlug: "fabbro-castel-san-giovanni", distanzaKm: 35, zona: "Val Tidone" },
  { name: "Borgonovo Val Tidone", slug: "borgonovo-val-tidone", fullSlug: "fabbro-borgonovo-val-tidone", distanzaKm: 33, zona: "Val Tidone" },
  { name: "Sarmato", slug: "sarmato", fullSlug: "fabbro-sarmato", distanzaKm: 30, zona: "Val Tidone" },

  // --- Val Trebbia ---
  { name: "Rivergaro", slug: "rivergaro", fullSlug: "fabbro-rivergaro", distanzaKm: 35, zona: "Val Trebbia" },
];
