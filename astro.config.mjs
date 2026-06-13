import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "es", "pt-br", "fr", "ar", "ru", "hi", "zh", "tr", "id"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});