# Prueba Técnica Global66 — Landing Tipo de Cambio (Nuxt 2)

## Stack
- Nuxt 2 (SSR)
- TailwindCSS
- Server Middleware (Express)

## Requisitos
- Node: 18+ (recomendado)

## Instalación
```bash
npm install
npm run dev
```

## Rutas
- http://localhost:3000/precio/peso-chileno (USD/CLP)
- http://localhost:3000/precio/sol-peruano (USD/PEN)

## API

### GET Rates
- http://localhost:3000/api/rates
- http://localhost:3000/api/rates?base=USD&target=CLP

### POST Lead (Google Spreadsheet)
Este challenge no incluye formulario en UI (según Figma).  
La captura de leads se prueba vía API.

#### Probar en local
```bash
curl -i -X POST "http://localhost:3000/api/lead" \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Perez","email":"juan@test.com"}'
```

Respuesta esperada:
- HTTP 200
- `{"success":true}`

#### Verificar en Spreadsheet (público)
- Spreadsheet: [Global66 Leads](https://docs.google.com/spreadsheets/d/1YfKa6o7ox0uo0hWDwCCCS74pp3oAGfBh2RZvOOzJosI/edit?gid=0#gid=0)
- Debe aparecer una nueva fila con `name` `email` `Date`.

## Deploy (LIVE)
- Link: (pon aquí tu link cuando lo subas)

### Probar POST en producción (cuando esté live)
```bash
curl -i -X POST "https://TU-DEPLOY.com/api/lead" \
  -H "Content-Type: application/json" \
  -d '{"name":"Prod Test","email":"prod.test@example.com"}'
```