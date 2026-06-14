# =============================================================
# Essenz Portal — Landing + Hub "Essenz Master" (build estático)
# Servido en la raíz del dominio essenz.cl/
# =============================================================

# --- Etapa 1: build con Vite ---------------------------------
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Variables VITE_* horneadas en build. VITE_ESSENZ_DOMINIO define a
# dónde apuntan los canales (en dev al gateway local; en prod a essenz.cl).
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG VITE_ESSENZ_DOMINIO
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY
ENV VITE_ESSENZ_DOMINIO=$VITE_ESSENZ_DOMINIO

RUN npm run build

# --- Etapa 2: servir con Nginx -------------------------------
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
