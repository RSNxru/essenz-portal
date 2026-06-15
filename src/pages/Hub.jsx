import React, { useState, useEffect } from "react";
import {
  Store,
  Play,
  Plus,
  Lock,
  LogOut,
  Sun,
  Moon,
  ArrowRight,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { EssenzMark } from "../components/Logo";
import { channels } from "../data/channels";

// Mapa nombre -> componente de icono (los datos viven en channels.js)
const ICONS = { Store, Play, Plus };

export default function Hub({ session, onLogout }) {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    if (themeMode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () =>
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));

  const email = session?.user?.email || "";
  const nombre = email.split("@")[0] || "Bienvenido";

  const handleClick = (canal) => {
    if (canal.type === "soon") return;
    // Navega a la ruta del proyecto dentro del dominio (mismo tab):
    // entrar a un canal se siente como abrir el proyecto.
    window.location.href = canal.url;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b0a] dark:text-slate-100 font-sans transition-colors duration-500 relative overflow-hidden">
      {/* Halos de fondo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 px-6 md:px-12 py-5 flex justify-between items-center border-b border-teal-100 dark:border-teal-900/30 bg-white/70 dark:bg-[#070b0a]/70 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center overflow-hidden shadow-lg shadow-teal-500/20">
            <EssenzMark className="h-5 w-5 text-white" />
          </div>
          <div className="leading-none">
            <span className="font-semibold tracking-tight text-xl text-teal-950 dark:text-white block">
              Essenz Master
            </span>
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
              Centro de control
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/30 text-slate-500 hover:text-teal-600 transition-colors"
          >
            {themeMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut size={16} /> Salir
          </button>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wide mb-5 shadow-sm">
            <Sparkles size={14} className="text-teal-500" />
            Hola, {nombre}
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-3">
            Tus{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-400">
              canales
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl flex items-center gap-2">
            <LayoutGrid size={18} className="text-slate-400 shrink-0" />
            Elige un proyecto para entrar. Las casillas vacías esperan tus
            próximas ideas.
          </p>
        </div>

        {/* GRID DE CANALES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((canal) => {
            const Icon = ICONS[canal.icon] || Plus;
            const isSoon = canal.type === "soon";

            return (
              <button
                key={canal.id}
                onClick={() => handleClick(canal)}
                disabled={isSoon}
                className={`group relative text-left p-7 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isSoon
                    ? "border-2 border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-50/50 dark:bg-[#0b1311]/40 cursor-default"
                    : "border-teal-100/60 dark:border-teal-900/40 bg-white dark:bg-[#0b1311] hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer " +
                      canal.glow
                }`}
              >
                {/* Brillo decorativo en hover (solo activos) */}
                {!isSoon && (
                  <div
                    className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${canal.accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                  ></div>
                )}

                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105 ${
                      isSoon
                        ? "bg-slate-200 dark:bg-slate-800 text-slate-400"
                        : `bg-gradient-to-br ${canal.accent} text-white ${canal.glow}`
                    }`}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  {isSoon ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-full">
                      <Lock size={11} /> Próximamente
                    </span>
                  ) : (
                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-3 py-1.5 rounded-full">
                      {canal.tagline}
                    </span>
                  )}
                </div>

                <h3 className="relative z-10 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
                  {canal.name}
                </h3>
                <p className="relative z-10 text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 min-h-[40px]">
                  {canal.description}
                </p>

                {!isSoon && (
                  <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {canal.type === "external" ? "Abrir app" : "Entrar"}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1.5 transition-transform duration-300"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
