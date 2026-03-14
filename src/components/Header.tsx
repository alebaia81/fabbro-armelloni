"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-40 shadow-sm transition-all h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Fabbro Armelloni Logo - Responsive Sizing */}
          <div className="relative w-48 sm:w-64 md:w-80 h-12 sm:h-16 md:h-20">
            <Image 
              src="/logo.png" 
              alt="Fabbro Armelloni Piacenza Logo" 
              fill
              className="object-contain object-left md:object-center"
              priority
            />
          </div>
          <div className="hidden lg:block border-l border-gray-200 pl-3">
            <span className="font-bold text-lg tracking-tight text-gray-900 leading-tight block">Fabbro a<br/><span className="text-red-600">Piacenza</span></span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link href="/#chi-siamo" className="hover:text-green-600 transition-colors">Chi Siamo</Link>
          <Link href="/#servizi" className="hover:text-green-600 transition-colors">Servizi</Link>
          <Link href="/i-nostri-lavori" className="hover:text-green-600 transition-colors">I Nostri Lavori</Link>
          <Link href="/#contatti" className="hover:text-green-600 transition-colors">Contatti</Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="hidden md:block text-right">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Pronto Intervento</p>
            <a href="tel:+393478899094" className="text-lg font-bold text-gray-900 hover:text-green-600 transition">
              +39 347 889 9094
            </a>
          </div>
          <a href="tel:+393478899094" className="flex items-center justify-center p-2.5 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition shadow-sm md:shadow-none">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <button 
            type="button"
            className="md:hidden flex items-center justify-center p-2 rounded bg-gray-50 text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-md">
          <nav className="flex flex-col p-4 gap-2 font-medium text-gray-700">
            <Link 
              href="/#chi-siamo" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-green-600 transition-colors py-3 border-b border-gray-50"
            >
              Chi Siamo
            </Link>
            <Link 
              href="/#servizi" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-green-600 transition-colors py-3 border-b border-gray-50"
            >
              Servizi
            </Link>
            <Link 
              href="/i-nostri-lavori" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-green-600 transition-colors py-3 border-b border-gray-50"
            >
              I Nostri Lavori
            </Link>
            <Link 
              href="/#contatti" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-green-600 transition-colors py-3"
            >
              Contatti
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
