
# Prueba Técnica Global66 — Landing Tipo de Cambio (Nuxt 2 SSR)

## 🔗 Live Demo
https://global66test-production.up.railway.app/precio/peso-chileno

---

## 📦 Repositorio
https://github.com/rpranibal31/Global66test

---

## 🧰 Stack Tecnológico
- Nuxt 2 (SSR habilitado)
- TailwindCSS
- Server Middleware (Express)
- Axios
- Google Apps Script + Google Spreadsheet

---

## ⚙️ Requisitos
- Node.js 18+
- npm

---

## 🚀 Instalación Local
```bash
npm install
npm run dev
```

Abrir:
- http://localhost:3000/precio/peso-chileno
- http://localhost:3000/precio/sol-peruano

---

## 🌐 Routing Dinámico
La vista principal utiliza rutas dinámicas:

/precio/*

Ejemplos:
- /precio/peso-chileno → USD/CLP
- /precio/sol-peruano → USD/PEN

---

## 🔌 API Local (SSR)

### GET Rates
GET /api/rates  
GET /api/rates?base=USD&target=CLP

Ejemplo:
http://localhost:3000/api/rates

---

### POST Lead → Google Spreadsheet

#### Probar en local
```bash
curl -i -X POST "http://localhost:3000/api/lead"   -H "Content-Type: application/json"   -d '{"name":"Juan Perez","email":"juan@test.com"}'
```

Respuesta esperada:
HTTP 200  
{"success":true}

---

### ✅ Verificación en Spreadsheet Público
https://docs.google.com/spreadsheets/d/1YfKa6o7ox0uo0hWDwCCCS74pp3oAGfBh2RZvOOzJosI/edit?gid=0#gid=0

---

### Probar API en Producción
```bash
curl -i -X POST "https://global66test-production.up.railway.app/api/lead"   -H "Content-Type: application/json"   -d '{"name":"Prod Test","email":"prod.test@example.com"}'
```

---

## 🔎 SEO y SSR
- Renderizado SSR real
- Meta dinámicos
- Canonical y hreflang
- Optimizado para SEO

---

## 📈 Growth Thinking
Ver archivo:
growth.md

