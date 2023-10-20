// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: 'href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200;400;700&display=swap"',
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
      ],
    },
  },
})
