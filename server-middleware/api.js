const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.use(express.json());

const MOCK = {
  base: "USD",
  rates: {
    CLP: 987.62,
    PEN: 3.81,
  },
  asOf: "2025-10-31T17:51:00Z",
};

const SUPPORTED_BASES = new Set(["USD"]);
const SUPPORTED_TARGETS = new Set(Object.keys(MOCK.rates));

app.get("/rates", (req, res) => {
  console.log("GET /api/rates", req.query);

  const base = String(req.query.base || MOCK.base).toUpperCase();
  const targetRaw = req.query.target
    ? String(req.query.target).toUpperCase()
    : null;

  if (!SUPPORTED_BASES.has(base)) {
    return res.status(400).json({
      error: "INVALID_BASE",
      message: `base inválida: ${base}. Valores permitidos: ${Array.from(SUPPORTED_BASES).join(", ")}`,
    });
  }

  if (!targetRaw) {
    return res.json({
      base,
      rates: MOCK.rates,
      asOf: MOCK.asOf || new Date().toISOString(),
    });
  }

  if (!SUPPORTED_TARGETS.has(targetRaw)) {
    return res.status(404).json({
      error: "TARGET_NOT_FOUND",
      message: `target no soportado: ${targetRaw}. Valores disponibles: ${Array.from(SUPPORTED_TARGETS).join(", ")}`,
    });
  }

  return res.json({
    base,
    rates: {
      [targetRaw]: MOCK.rates[targetRaw],
    },
    asOf: MOCK.asOf || new Date().toISOString(),
  });
});

function isValidEmail(email) {
  return (
    typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  );
}

app.post("/lead", async (req, res) => {
  console.log("POST /api/lead", req.body);

  const name = req.body?.name;
  const email = req.body?.email;

  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      error: "INVALID_NAME",
      message: "name es requerido y debe tener al menos 2 caracteres",
    });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: "INVALID_EMAIL",
      message: "email es requerido y debe ser válido",
    });
  }

  try {
    const r = await fetch(
      "https://script.google.com/macros/s/AKfycbz3GHom-Fi5H9nZROStAPDFJ13b9Hzpq4ed0HacXD-U9JkfkQ1R3eYUeeUuoJi26yFHPQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      },
    );

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      console.error("Google Script error:", r.status, text);
      return res.status(500).json({
        error: "SPREADSHEET_WRITE_FAILED",
        message: "No se pudo guardar el lead en Google Spreadsheet",
      });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("POST /api/lead exception:", err);
    return res.status(500).json({
      error: "INTERNAL_ERROR",
      message: "Error inesperado guardando el lead",
    });
  }
});

module.exports = app;
