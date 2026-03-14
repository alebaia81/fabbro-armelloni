"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Fotografie locali ottimizzate SEO
const photos = [
  { src: "/images/fabbro-piacenza-lavorazione-ferro-01.webp", width: 800, height: 600, alt: "Fabbro Piacenza lavorazione ferro su misura" },
  { src: "/images/fabbro-piacenza-apertura-porte-02.webp", width: 800, height: 600, alt: "Pronto intervento apertura porte blindate Piacenza" },
  { src: "/images/fabbro-piacenza-sostituzione-serrature-03.webp", width: 800, height: 600, alt: "Sostituzione serrature e cilindro europeo" },
  { src: "/images/fabbro-piacenza-cilindro-europeo-04.webp", width: 800, height: 600, alt: "Installazione cilindro europeo di sicurezza" },
  { src: "/images/fabbro-piacenza-riparazione-basculante-05.webp", width: 800, height: 600, alt: "Riparazione basculanti e porte garage box" },
  { src: "/images/fabbro-piacenza-carpenteria-metallica-06.webp", width: 800, height: 600, alt: "Lavori di piccola carpenteria metallica Piacenza" },
  { src: "/images/fabbro-piacenza-grate-sicurezza-07.webp", width: 800, height: 600, alt: "Realizzazione grate di sicurezza e inferriate" },
  { src: "/images/fabbro-piacenza-cancello-ferro-08.webp", width: 800, height: 600, alt: "Produzione e riparazione cancelli in ferro" },
  { src: "/images/fabbro-piacenza-pronto-intervento-09.webp", width: 800, height: 600, alt: "Fabbro urgente pronto intervento 24 ore" },
  { src: "/images/fabbro-piacenza-ringhiera-su-misura-10.webp", width: 800, height: 600, alt: "Ringhiere per scale e balconi su misura" },
  { src: "/images/fabbro-piacenza-inferriate-finestre-11.webp", width: 800, height: 600, alt: "Inferriate per finestre fisse e apribili" },
  { src: "/images/fabbro-piacenza-porta-blindata-12.webp", width: 800, height: 600, alt: "Installazione e assistenza porte blindate Piacenza" },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">I Nostri Lavori</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guarda alcune delle nostre realizzazioni e interventi sul campo. Qualità e precisione in ogni dettaglio.
          </p>
        </div>

        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
}
