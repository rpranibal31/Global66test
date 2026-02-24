export default {
  ssr: true,

  // ✅ Fix mobile: viewport + meta básicos
  head: {
    title: "Global66",
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },

  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/axios"],

  axios: {
    browserBaseURL: "/",
  },

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  serverMiddleware: [{ path: "/api", handler: "~/server-middleware/api.js" }],
};