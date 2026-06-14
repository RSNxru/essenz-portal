import { useState, useEffect } from "react";
import { supabase } from "./services/supabaseClient";
import Landing from "./pages/Landing";
import Hub from "./pages/Hub";

export default function App() {
  const [session, setSession] = useState(null);
  const [vistaActual, setVistaActual] = useState("landing");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Escucha activa del estado de la sesión (Supabase)
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) setVistaActual("landing");
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      setEmail("");
      setPassword("");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setVistaActual("landing");
  };

  // ==========================================
  // VISTA 1: HUB ESSENZ MASTER (Logueado)
  // ==========================================
  if (session) {
    return <Hub session={session} onLogout={handleLogout} />;
  }

  // ==========================================
  // VISTA 2: LOGIN (No logueado)
  // ==========================================
  if (vistaActual === "login") {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#070b0a] flex items-center justify-center p-6 relative overflow-hidden font-sans transition-colors duration-500">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="bg-white dark:bg-[#0b1311] p-10 rounded-[2.5rem] shadow-xl shadow-teal-900/5 dark:shadow-none border border-teal-100 dark:border-teal-900/50 w-full max-w-md relative z-10">
          <button
            onClick={() => setVistaActual("landing")}
            className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-8 hover:text-teal-600 transition-colors flex items-center gap-2"
          >
            ← Volver al inicio
          </button>

          <h2 className="text-3xl font-semibold tracking-tight mb-2 text-slate-900 dark:text-white">
            Bienvenido
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            Ingresa tus credenciales para acceder al ecosistema.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#070b0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-slate-900 dark:text-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#070b0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-slate-900 dark:text-white"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-teal-600 text-white p-4 rounded-2xl font-medium hover:bg-teal-700 transition-all duration-300 mt-4 shadow-md shadow-teal-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Validando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA 3: LANDING (Por defecto)
  // ==========================================
  return <Landing onComenzar={() => setVistaActual("login")} />;
}
