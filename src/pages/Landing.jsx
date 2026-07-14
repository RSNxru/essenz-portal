import { useState, useEffect } from "react";
import birdLogo from "../assets/essenz-bird.png";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Code,
  Database,
  ChevronDown,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Paintbrush,
  Layers,
  ExternalLink,
  Store,
  Play,
  Trophy,
} from "lucide-react";

// Proyectos destacados de la Landing. Para agregar uno, copia un objeto.
// El GIF va en public/proyectos/<archivo>.gif (si falta, se ve el degradado).
const PROYECTOS = [
  {
    nombre: "InShop",
    desc: "Sistema de inventario y punto de venta multitienda con control de stock y alertas en tiempo real.",
    gif: "/proyectos/inshop.gif",
    github: "https://github.com/RSNxru/InShop",
    live: "/InShop",
    accent: "from-teal-500 to-cyan-600",
    icon: Store,
    tags: ["React", "Supabase", "POS"],
  },
  {
    nombre: "EssenzPlay",
    desc: "Reproductor y descargador multimedia sin anuncios sobre yt-dlp: 4K, SponsorBlock y modo podcast.",
    gif: "/proyectos/essenzplay.gif",
    github: "https://github.com/RSNxru/EssenzPlay",
    live: null,
    accent: "from-fuchsia-500 to-purple-600",
    icon: Play,
    tags: ["FastAPI", "React", "Docker"],
  },
  {
    nombre: "Essenz Mundial",
    desc: "Plataforma del Mundial 2026: match center en vivo, bracket interactivo y prode con scoring automático.",
    gif: "/proyectos/essenz-mundial.gif",
    github: "https://github.com/RSNxru/essenz-mundial",
    live: null,
    accent: "from-emerald-500 to-green-600",
    icon: Trophy,
    tags: ["React", "Supabase", "Zustand"],
  },
];

// Clientes con los que colaboramos. Para agregar, copia un objeto.
const CLIENTES = [
  {
    nombre: "Velo de Luna",
    dominio: "velodeluna.cl",
    url: "https://velodeluna.cl",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    nombre: "Kaelum",
    dominio: "kaelum.cl",
    url: "https://kaelum.cl",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    nombre: "Yunke",
    dominio: "yunke.cl",
    url: "https://yunke.cl",
    accent: "from-amber-500 to-orange-600",
  },
];

export default function Landing({ onComenzar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  // Lógica de Modo Claro/Oscuro
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const faqs = [
    {
      q: "¿Cuánto tiempo toma desarrollar un sistema a medida?",
      a: "Depende de la complejidad. Una Landing Page Premium toma de 2 a 4 semanas. Un sistema ERP o plataforma E-commerce suele requerir entre 2 y 4 meses de desarrollo.",
    },
    {
      q: "¿Ofrecen soporte técnico después de entregar el proyecto?",
      a: "Sí. Todo proyecto incluye una garantía de código y ofrecemos planes de mantenimiento para escalar servidores y añadir nuevas funcionalidades.",
    },
  ];

  return (
    // Base con un tono neutro ligeramente frío para combinar con el verde azulado
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b0a] dark:text-slate-100 font-sans transition-colors duration-500 selection:bg-teal-500/30">
      {/* Animaciones CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-6 md:px-12 py-4 bg-white/80 dark:bg-[#070b0a]/80 backdrop-blur-xl border-b border-teal-100 dark:border-teal-900/30 transition-colors shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Logo con fondo Verde Azulado */}
            <img
              src={birdLogo}
              alt="Essenz"
              className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <span className="font-semibold tracking-tight text-xl text-teal-950 dark:text-white">
              Essenz.
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a
              href="#soluciones"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Soluciones
            </a>
            <a
              href="#metodologia"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Metodología
            </a>
            <a
              href="#portafolio"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#clientes"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Clientes
            </a>
            <a
              href="#contacto"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/30 text-slate-500 hover:text-teal-600 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Botón Escritorio */}
            <button
              onClick={onComenzar}
              className="hidden sm:flex bg-teal-600 text-white dark:bg-teal-500 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 dark:hover:bg-teal-400 transition-all duration-300 items-center gap-2 group shadow-md shadow-teal-500/20"
            >
              Iniciar Sesión{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              className="lg:hidden text-slate-900 dark:text-white hover:text-teal-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`lg:hidden fixed w-full bg-white dark:bg-[#070b0a] border-b border-teal-100 dark:border-teal-900/30 z-40 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-screen pt-24 pb-8 opacity-100 shadow-2xl" : "max-h-0 opacity-0 pt-0 pb-0"}`}
      >
        <div className="flex flex-col gap-6 px-8 text-lg font-medium text-slate-600 dark:text-slate-400">
          <a
            href="#soluciones"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-teal-600"
          >
            Soluciones
          </a>
          <a
            href="#metodologia"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-teal-600"
          >
            Metodología
          </a>
          <a
            href="#portafolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-teal-600"
          >
            Proyectos
          </a>
          <a
            href="#clientes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-teal-600"
          >
            Clientes
          </a>
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-teal-600"
          >
            Contacto
          </a>

          {/* NUEVO BOTÓN INICIAR SESIÓN MÓVIL */}
          <div className="pt-6 mt-2 border-t border-teal-50 dark:border-teal-900/30">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onComenzar();
              }}
              className="w-full bg-teal-600 text-white dark:bg-teal-500 py-3.5 rounded-2xl font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 active:scale-[0.98]"
            >
              Iniciar Sesión
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-teal-50/80 to-slate-50 dark:from-[#091512] dark:to-[#070b0a]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto z-10">
          <div className="fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wide mb-8 shadow-sm">
            <Sparkles size={14} className="text-teal-500" />
            Ingeniería & Diseño Digital
          </div>

          <h1 className="fade-in-up delay-100 text-5xl md:text-7xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Menos ruido. <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-400 dark:from-teal-400 dark:via-cyan-300 dark:to-emerald-300">
              Mucho más impacto.
            </span>
          </h1>

          <p className="fade-in-up delay-200 text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Diseño limpio y arquitectura robusta. Creamos ecosistemas digitales
            que funcionan de forma impecable y conectan con tu audiencia.
          </p>

          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2 group"
            >
              Iniciar Proyecto{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portafolio"
              className="w-full sm:w-auto bg-white dark:bg-[#0d1614] border border-teal-200 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 px-8 py-3.5 rounded-full font-medium hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-300 flex items-center justify-center"
            >
              Ver Trabajos
            </a>
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section
        id="soluciones"
        className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#070b0a] transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">
              Núcleos de Solución
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Soluciones programadas específicamente para las necesidades únicas
              de tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Paintbrush,
                title: "Diseño de Interfaces",
                desc: "Experiencias digitales modernas, vibrantes y altamente responsivas.",
                shadow: "hover:shadow-cyan-500/10",
              },
              {
                icon: Code,
                title: "Desarrollo a Medida",
                desc: "Sistemas ERP y portales construidos desde cero con lógica exacta.",
                shadow: "hover:shadow-teal-500/10",
              },
              {
                icon: Database,
                title: "Arquitectura Cloud",
                desc: "Bases de datos escalables y seguras, garantizando respuestas rápidas.",
                shadow: "hover:shadow-emerald-500/10",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-[2rem] bg-white dark:bg-[#0b1311] border border-teal-100/50 dark:border-teal-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${item.shadow}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section
        id="metodologia"
        className="py-24 px-6 md:px-12 relative overflow-hidden bg-teal-800 dark:bg-[#05100e]"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-600/40 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                Nuestro Proceso
              </h2>
              <p className="text-teal-100/80 text-lg">
                Metodología ágil pero estructurada, combinando precisión técnica
                con creatividad visual.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Descubrimiento",
                desc: "Análisis profundo de los requerimientos.",
              },
              {
                num: "02",
                title: "Diseño UX/UI",
                desc: "Creación de prototipos vibrantes y limpios.",
              },
              {
                num: "03",
                title: "Desarrollo",
                desc: "Programación iterativa y entregas parciales.",
              },
              {
                num: "04",
                title: "Despliegue",
                desc: "Pruebas de estrés y lanzamiento estelar.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-500 group"
              >
                <span className="text-5xl font-light text-teal-400/50 mb-4 block group-hover:text-teal-300 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-teal-50/80 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section
        id="portafolio"
        className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#070b0a] border-y border-teal-100 dark:border-teal-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center text-slate-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12">
            Productos reales del ecosistema Essenz, en producción.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROYECTOS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.nombre}
                  className="group rounded-[2rem] bg-white dark:bg-[#0b1311] border border-teal-100/50 dark:border-teal-900/30 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* MEDIA (GIF; si falta, se ve el degradado + icono) */}
                  <div
                    className={`relative aspect-video overflow-hidden bg-gradient-to-br ${p.accent}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white/30">
                      <Icon size={64} strokeWidth={1.5} />
                    </div>
                    <img
                      src={p.gif}
                      alt={`Demo de ${p.nombre}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* CUERPO */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {p.nombre}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {p.desc}
                    </p>
                    <div className="flex items-center gap-4 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/60">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <Code size={16} /> GitHub
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          className="flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline ml-auto"
                        >
                          Ver en vivo <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section
        id="clientes"
        className="py-24 px-6 md:px-12 bg-white dark:bg-[#09110f]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full mb-6">
              <Sparkles size={14} /> Colaboraciones
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">
              Clientes
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Negocios reales que confían en Essenz para su presencia digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTES.map((c) => (
              <a
                key={c.dominio}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-[1.75rem] bg-slate-50 dark:bg-[#0b1311] border border-teal-100/50 dark:border-teal-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500`}
                >
                  <span className="text-white font-black text-xl tracking-tighter">
                    {c.nombre.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate">
                    {c.nombre}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                    {c.dominio}
                  </p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-[#09110f]"
      >
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* FAQ */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full mb-6">
              <Layers size={14} /> Soporte
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-slate-900 dark:text-white">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-teal-100 dark:border-teal-900/50 rounded-2xl bg-white dark:bg-[#0b1311] overflow-hidden hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                >
                  <button
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-teal-500 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info de contacto directa */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                Contacto Directo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    <Mail
                      size={18}
                      className="text-teal-600 dark:text-teal-400 group-hover:text-white"
                    />
                  </div>
                  <span className="font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    rsva.jesus@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <MapPin
                      size={18}
                      className="text-cyan-600 dark:text-cyan-400 group-hover:text-white"
                    />
                  </div>
                  <span className="font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    La Serena, Chile
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white dark:bg-[#0b1311] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-teal-900/5 dark:shadow-none border border-teal-100 dark:border-teal-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-[100px]"></div>

            <h3 className="text-2xl font-semibold mb-2 relative z-10 text-slate-900 dark:text-white">
              Iniciemos una conversación
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 relative z-10">
              Cuéntanos sobre tu proyecto y te contactaremos a la brevedad.
            </p>

            <form
              className="space-y-5 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-[#070b0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-1 focus:ring-teal-500 transition-all text-slate-900 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-[#070b0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-1 focus:ring-teal-500 transition-all text-slate-900 dark:text-white"
                  placeholder="hola@empresa.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
                  Detalles del Proyecto
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-[#070b0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-1 focus:ring-teal-500 transition-all resize-none text-slate-900 dark:text-white"
                  placeholder="¿Qué tienes en mente?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-4 rounded-2xl font-medium hover:bg-teal-700 transition-all duration-300 mt-2 flex items-center justify-center gap-2 group shadow-md shadow-teal-600/20"
              >
                Enviar Mensaje{" "}
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-teal-100 dark:border-teal-900/30 py-12 px-6 md:px-12 bg-slate-50 dark:bg-[#070b0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={birdLogo}
              alt="Essenz"
              className="h-7 w-auto object-contain"
            />
            <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
              Essenz.
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Essenz. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-teal-600 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
