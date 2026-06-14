// ============================================================
// ESSENZ MASTER · Configuración de Canales
// ------------------------------------------------------------
// Cada objeto = un "canal" (proyecto) que aparece en el Hub
// tras iniciar sesión. Para agregar un proyecto futuro, copia
// una casilla "soon" y cámbiale los datos.
//
//   type: "external" -> abre la URL del proyecto (usa "url")
//         "soon"     -> casilla bloqueada "Próximamente"
//
// La URL de cada proyecto es configurable por .env, así apuntas cada
// canal a donde lo deploees (subdominio, ruta o vercel.app) sin tocar
// código. Por defecto usan el dominio essenz.cl.
// ============================================================

// URL de cada proyecto. Sobrescribe en Vercel/.env con la URL real de
// su deploy (p.ej. VITE_INSHOP_URL=https://inshop.essenz.cl).
// InShop se sirve en el mismo origen vía proxy del portal (/InShop),
// por eso la URL relativa: así comparte sesión Supabase (un solo login).
export const INSHOP_URL = import.meta.env.VITE_INSHOP_URL || "/InShop";
export const ESSENZPLAY_URL =
  import.meta.env.VITE_ESSENZPLAY_URL || "https://essenz.cl/essenzplay";

export const channels = [
  {
    id: "inshop",
    name: "InShop",
    tagline: "Gestión de tiendas",
    description: "Inventario, punto de venta y control de stock multitienda.",
    type: "external",
    url: INSHOP_URL,
    icon: "Store",
    accent: "from-teal-500 to-cyan-600",
    glow: "shadow-teal-500/30",
  },
  {
    id: "essenzplay",
    name: "EssenzPlay",
    tagline: "Reproductor multimedia",
    description: "Cliente sin anuncios sobre yt-dlp: descargas 4K y modo podcast.",
    type: "external",
    url: ESSENZPLAY_URL,
    icon: "Play",
    accent: "from-fuchsia-500 to-purple-600",
    glow: "shadow-fuchsia-500/30",
  },
  // --- Casillas para proyectos futuros -----------------------
  {
    id: "slot-1",
    name: "Próximo proyecto",
    tagline: "En el horno",
    description: "Aquí irá tu siguiente sistema del ecosistema Essenz.",
    type: "soon",
    icon: "Plus",
    accent: "from-slate-400 to-slate-500",
    glow: "shadow-none",
  },
  {
    id: "slot-2",
    name: "Próximo proyecto",
    tagline: "En el horno",
    description: "Casilla reservada para una nueva idea.",
    type: "soon",
    icon: "Plus",
    accent: "from-slate-400 to-slate-500",
    glow: "shadow-none",
  },
];
