// ============================================================
// ESSENZ MASTER · Configuración de Canales
// ------------------------------------------------------------
// Cada objeto = un "canal" (proyecto) que aparece en el Hub
// tras iniciar sesión. Para agregar un proyecto futuro, copia
// una casilla "soon" y cámbiale los datos.
//
//   type: "external" -> abre una ruta del dominio (usa "url")
//         "soon"     -> casilla bloqueada "Próximamente"
//
// Todos los proyectos viven como rutas bajo essenz.cl, servidas
// por el gateway Nginx del Master Orchestrator.
// ============================================================

// Dominio principal del ecosistema. En desarrollo apunta al gateway
// local; en producción a essenz.cl. Configurable vía .env.
export const DOMINIO =
  import.meta.env.VITE_ESSENZ_DOMINIO || "https://essenz.cl";

export const channels = [
  {
    id: "inshop",
    name: "InShop",
    tagline: "Gestión de tiendas",
    description: "Inventario, punto de venta y control de stock multitienda.",
    type: "external",
    url: `${DOMINIO}/InShop`,
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
    url: `${DOMINIO}/essenzplay`,
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
