export default {
  ssr: true,

  css: ["@/assets/css/tailwind.css"],

  modules: ["@nuxtjs/axios"],

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
