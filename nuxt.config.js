export default {
  ssr: true,

  css: ["@/assets/css/tailwind.css"],

  modules: ["@nuxtjs/axios"],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  },
  buildModules: [],
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
