import { Metadata } from "next";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "I Nostri Lavori | Fabbro Urgente Piacenza",
  description: "Guarda la galleria dei nostri interventi a Piacenza e provincia. Lavorazioni in ferro, installazione porte blindate, riparazione serrature e carpenteria.",
};

export default function LavoriPage() {
  return (
    <div className="min-h-screen pt-24 bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">I Nostri Lavori</span>
            </li>
          </ol>
        </nav>
      </div>

      <GallerySection />
    </div>
  );
}
