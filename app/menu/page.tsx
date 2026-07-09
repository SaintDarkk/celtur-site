"use client";

import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";

const PHONE_DISPLAY = "0535 436 34 36";
const PHONE_TEL = "+905354363436";
const WHATSAPP = "https://wa.me/905354363436";

const categories = [
  "Serpme Kahvaltı",
  "Alabalık",
  "Kuzu Çevirme",
  "Izgara & Mangal",
  "İçecekler",
  "Tatlılar",
];

export default function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-widest text-emerald-900">
            ÇELTUR
          </a>
          <div className="hidden md:flex gap-8 font-medium text-emerald-900">
            <a href="/#hizmetler" className="hover:text-emerald-500 transition-colors">Hizmetler</a>
            <a href="/#mekan" className="hover:text-emerald-500 transition-colors">Mekan</a>
            <a href="/#galeri" className="hover:text-emerald-500 transition-colors">Galeri</a>
            <a href="/menu" className="text-emerald-600">Menü</a>
            <a href="/#iletisim" className="hover:text-emerald-500 transition-colors">İletişim</a>
          </div>
          <button className="md:hidden text-emerald-900" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 shadow-lg">
            <a href="/#hizmetler" className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Hizmetler</a>
            <a href="/#mekan" className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Mekan</a>
            <a href="/#galeri" className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Galeri</a>
            <a href="/menu" className="text-emerald-600 font-medium text-lg py-2 border-b border-stone-100">Menü</a>
            <a href="/#iletisim" className="text-emerald-900 font-medium text-lg py-2">İletişim</a>
          </div>
        )}
      </nav>

      {/* İÇERİK */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-600 tracking-[0.3em] uppercase text-xs mb-4 font-medium">
            Lezzetlerimiz
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">
            Menümüz Hazırlanıyor
          </h1>
          <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto mb-16">
            Size en güncel ve lezzetli menümüzü sunmak için çalışıyoruz.
            Çok yakında burada olacak — o zamana kadar bizi arayarak
            güncel fiyat ve lezzetlerimiz hakkında bilgi alabilirsiniz.
          </p>

          {/* Kategori Önizleme */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white border border-stone-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <p className="font-semibold text-emerald-950">{cat}</p>
                <p className="text-xs text-stone-400 mt-2 uppercase tracking-wide">Yakında</p>
              </div>
            ))}
          </div>

          {/* İletişim CTA */}
          <div className="bg-emerald-950 rounded-3xl p-10 md:p-14">
            <Clock className="text-emerald-300 mx-auto mb-4" size={32} strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Şimdilik Bize Ulaşın
            </h2>
            <p className="text-white/60 font-light mb-8">
              Güncel menü ve fiyat bilgisi için telefon veya WhatsApp
              üzerinden bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all hover:scale-105"
              >
                <Phone size={18} />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-all hover:scale-105"
              >
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-2xl font-bold tracking-widest text-white">ÇELTUR</a>
          <p className="text-white/40 text-sm font-light mt-3">
            © {new Date().getFullYear()} ÇELTUR — Yalova. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  );
}