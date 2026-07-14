# Essenz Portal

Frontend raíz del ecosistema Essenz (`essenz.cl/`). Es la **Landing** de
la marca + el **Hub "Essenz Master"**: tras iniciar sesión muestra tus
proyectos como *canales* y abre cada uno en su ruta del dominio.

- **Stack:** React 19 + Vite + Tailwind + Supabase (auth).
- **Canales:** se configuran en [`src/data/channels.js`](src/data/channels.js).
  Cada proyecto vive bajo `essenz.cl/...` (p.ej. `/InShop`, `/essenzplay`).
  Para agregar uno futuro, copia una casilla `soon`.

## Desarrollo

```bash
cp .env.example .env   # rellena tus claves de Supabase
npm install
npm run dev
```

> Las sesiones de Supabase se comparten entre el portal y los demás
> proyectos **solo si se sirven en el mismo origen** (detrás del gateway,
> `localhost:8080` en dev o `essenz.cl` en prod). En `npm run dev` cada app
> corre en un puerto distinto, así que ahí no se comparte la sesión.

## Despliegue

Se construye como imagen Nginx ([`Dockerfile`](Dockerfile)) y la orquesta
el compose maestro de `essenz-master-orchestrator`, detrás del gateway:

| Ruta pública        | App                |
|---------------------|--------------------|
| `essenz.cl/`        | Essenz Portal      |
| `essenz.cl/InShop`  | InShop (inventario)|
| `essenz.cl/WatchParty` | Watch Party (sala privada) |
| `essenz.cl/essenzplay` | EssenzPlay      |
