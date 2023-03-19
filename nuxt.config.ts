// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      stripeSecretKey: process.env.STRIPE_P_KEY,
    },
    public: {
      appDomain: process.env.APP_URL,
    },
  },
  modules: ['@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/supabase'],
});
