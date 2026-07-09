"use client";

import { useEffect, useRef, useState } from "react";
import {
  Fish,
  Flame,
  Coffee,
  UtensilsCrossed,
  Heart,
  Gift,
  Droplets,
  Waves,
  TreePine,
  Sun,
  Home,
  Sparkles,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Tent,
  Clock,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

const PHONE_DISPLAY = "0535 436 34 36";
const PHONE_TEL = "+905354363436";
const WHATSAPP = "https://wa.me/905354363436";
const ADDRESS = "17. Sk No:4, Elmalık, Yalova Merkez/Yalova";
const INSTAGRAM_HANDLE = "celtur1";
const INSTAGRAM_URL = "https://instagram.com/celtur1";
const MAP_EMBED_URL = "https://maps.google.com/maps?q=40.5910801,29.3275936&z=16&output=embed";
const MAP_LINK = "https://www.google.com/maps/place/%C3%87ELTUR+Restoran+ve+Alabal%C4%B1k+Tesisi/@40.5910841,29.325024,17z";

const services = [
  { icon: Fish, title: "Alabalık", desc: "Doğadan sofraya taze alabalık lezzeti" },
  { icon: UtensilsCrossed, title: "Kuzu Çevirme", desc: "Geleneksel usulde odun ateşinde pişirilir" },
  { icon: Coffee, title: "Serpme Kahvaltı", desc: "Doğal ürünlerle hazırlanan zengin sofra" },
  { icon: Flame, title: "Mangal", desc: "Açık havada eşsiz mangal keyfi" },
  { icon: Heart, title: "Düğün & Nişan", desc: "Doğa içinde unutulmaz kır düğünleri" },
  { icon: Gift, title: "Özel Günler", desc: "Doğum günü, sünnet ve tüm kutlamalar" },
  { icon: Tent, title: "Kamp", desc: "Doğanın içinde unutulmaz kamp deneyimi" },
];

const features = [
  { icon: Droplets, title: "Şelale" },
  { icon: Waves, title: "Akarsu" },
  { icon: Sparkles, title: "Gölet" },
  { icon: TreePine, title: "Yeşillik" },
  { icon: Home, title: "Kapalı Alan" },
  { icon: Sun, title: "Açık Alan" },
  { icon: Gift, title: "Çocuk Parkı" },
  { icon: Tent, title: "Kamp Alanı" },
];

const featuredOrder = [27, 16, 12, 34, 9, 29, 3, 7, 11];
const allNumbers = Array.from({ length: 40 }, (_, i) => i + 1);
const remainingOrder = allNumbers.filter((n) => !featuredOrder.includes(n));
const finalOrder = [...featuredOrder, ...remainingOrder];

const galleryImages = finalOrder.map((num) => ({
  src: `/images/galeri-${num}.jpg`,
  alt: `ÇELTUR ${num}`,
}));

export default function CelturPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-stone-50 overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className={`text-2xl font-bold tracking-widest transition-colors duration-300 ${scrolled ? "text-emerald-900" : "text-white"}`}>ÇELTUR</span>
          <div className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${scrolled ? "text-emerald-900" : "text-white"}`}>
            <a href="#hizmetler" className="hover:text-emerald-500 transition-colors">Hizmetler</a>
            <a href="#mekan" className="hover:text-emerald-500 transition-colors">Mekan</a>
            <a href="#galeri" className="hover:text-emerald-500 transition-colors">Galeri</a>
            <a href="/menu" className="hover:text-emerald-500 transition-colors">Menü</a>
            <a href="#iletisim" className="hover:text-emerald-500 transition-colors">İletişim</a>
          </div>
          <button className={`md:hidden transition-colors duration-300 ${scrolled ? "text-emerald-900" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 shadow-lg">
            <a href="#hizmetler" onClick={() => setMenuOpen(false)} className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Hizmetler</a>
            <a href="#mekan" onClick={() => setMenuOpen(false)} className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Mekan</a>
            <a href="#galeri" onClick={() => setMenuOpen(false)} className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Galeri</a>
            <a href="/menu" onClick={() => setMenuOpen(false)} className="text-emerald-900 font-medium text-lg py-2 border-b border-stone-100">Menü</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)} className="text-emerald-900 font-medium text-lg py-2">İletişim</a>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hero-selale.jpg" alt="ÇELTUR Doğa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-emerald-300 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-light">
            Yalova • Doğanın Kalbi
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight" style={{ textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}>
            ÇELTUR
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl text-white/85 mb-3 font-light">
            Doğanın Kalbinde Lezzet ve Huzur
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-sm md:text-base text-white/60 mb-12 tracking-widest uppercase font-light">
            Şelale · Akarsu · Gölet · Kamp
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#hizmetler" className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-emerald-50 transition-all hover:scale-105 shadow-2xl">Keşfetmeye Başla</a>
            <a href={`tel:${PHONE_TEL}`} className="inline-block border border-white/50 text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-white/10 transition-all">Bizi Arayın</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </section>

      <section id="hizmetler" className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-emerald-600 tracking-[0.3em] uppercase text-xs mb-4 font-medium">Lezzet & Keyif</p>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Hizmetlerimiz</h2>
              <p className="text-stone-400 font-light max-w-xl mx-auto">Her damak zevkine uygun lezzetler ve her özel gün için organizasyon hizmetleri</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group bg-white p-4 md:p-8 rounded-2xl border border-stone-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="w-9 h-9 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                    <service.icon className="text-emerald-700" size={16} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-emerald-950">{service.title}</h3>
                  <p className="text-stone-400 font-light text-xs md:text-sm leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="mekan" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/mekan-genel.jpg" alt="Mekan" fill className="object-cover" />
          <div className="absolute inset-0 bg-emerald-950/88" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-emerald-300 tracking-[0.3em] uppercase text-xs mb-4 font-medium">Doğayla İç İçe</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mekan Özellikleri</h2>
              <p className="text-white/40 font-light max-w-xl mx-auto">Yalova&apos;nın eşsiz doğasında kocaman bir bahçe, akarsu, şelale, kamp alanı ve çok daha fazlası</p>
            </div>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 w-[150px] sm:w-[190px]">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/25 transition-colors">
                    <f.icon className="text-emerald-300" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-medium text-sm">{f.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

            <section id="galeri" className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-emerald-600 tracking-[0.3em] uppercase text-xs mb-4 font-medium">Fotoğraflar</p>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Galeri</h2>
              <p className="text-stone-400 font-light max-w-xl mx-auto">Mekanımızdan kareler</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(showAllPhotos ? galleryImages : galleryImages.slice(0, 9)).map((img, i) => (
              <FadeIn key={i} delay={Math.min(i * 0.04, 0.5)}>
                <button
                  onClick={() => setLightbox(img.src)}
                  className={`relative aspect-square overflow-hidden rounded-2xl w-full cursor-zoom-in ${
                    i === 8 ? "hidden sm:block" : "block"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </button>
              </FadeIn>
            ))}
          </div>

          {!showAllPhotos && galleryImages.length > 9 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-emerald-800 transition-all hover:scale-105 shadow-lg"
              >
                Tüm Fotoğrafları Gör ({galleryImages.length})
              </button>
            </div>
          )}

          {showAllPhotos && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllPhotos(false)}
                className="inline-block border border-emerald-900 text-emerald-900 px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-emerald-50 transition-all"
              >
                Daha Az Göster
              </button>
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out">
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image src={lightbox} alt="Büyük görünüm" fill className="object-contain" />
          </div>
        </div>
      )}

      <section id="iletisim" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-emerald-600 tracking-[0.3em] uppercase text-xs mb-4 font-medium">Bize Ulaşın</p>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">
                Sizi Ağırlamak İçin <span className="text-emerald-600">Sabırsızlanıyoruz</span>
              </h2>
              <p className="text-stone-400 font-light">Yalova&apos;nın doğa harikası köşesinde unutulmaz anlar sizi bekliyor</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <FadeIn delay={0.1}>
              <a href={`tel:${PHONE_TEL}`} className="group flex items-center gap-4 bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 p-6 rounded-2xl transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="text-emerald-700" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-1 uppercase tracking-widest">Telefon</p>
                  <p className="font-semibold text-emerald-950">{PHONE_DISPLAY}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.15}>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 p-6 rounded-2xl transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <MapPin className="text-emerald-700" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-1 uppercase tracking-widest">Adres</p>
                  <p className="font-semibold text-emerald-950 text-sm leading-snug">{ADDRESS}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 p-6 rounded-2xl transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-1 uppercase tracking-widest">Instagram</p>
                  <p className="font-semibold text-emerald-950">@{INSTAGRAM_HANDLE}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="group flex items-center gap-4 bg-stone-50 border border-stone-100 p-6 rounded-2xl">
                <div className="w-12 h-12 shrink-0 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-emerald-700" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-1 uppercase tracking-widest">Çalışma Saatleri</p>
                  <p className="font-semibold text-emerald-950 text-sm">Her gün 08:00 - 24:00</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden border border-stone-100 shadow-sm mb-10 h-[350px]">
              <iframe src={MAP_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="ÇELTUR Konum" />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-all hover:scale-105 shadow-lg shadow-emerald-500/25">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-emerald-950 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold tracking-widest text-white">ÇELTUR</span>
          <p className="text-white/40 text-sm font-light text-center">© {new Date().getFullYear()} ÇELTUR — Yalova. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><InstagramIcon size={18} /></a>
            <a href={`tel:${PHONE_TEL}`} className="text-white/40 hover:text-white transition-colors"><Phone size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}