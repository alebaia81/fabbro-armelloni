import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import TerritorySection from "@/components/TerritorySection";

export const metadata: Metadata = {
  title: "Fabbro Urgente Piacenza | Apertura Porte 24h — Armelloni Andrea",
  description:
    "Fabbro a Piacenza e provincia. Pronto intervento in 30 minuti: apertura porte blindate, sostituzione serrature, inferriate, carpenteria metallica. Servizio 24/7, anche festivi. Chiama ora!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fabbro Urgente Piacenza | Apertura Porte Blindate 24h",
    description:
      "Pronto intervento fabbro a Piacenza e provincia. Apertura porte, serrature, carpenteria. 24/7, arrivo in 30 min.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Fabbro Armelloni — Pronto Intervento Piacenza",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ServicePage city="Piacenza" />
      <TerritorySection />
    </>
  );
}
