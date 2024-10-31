// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Vixen UI",
      description: "Vixen UI is a framework for building user interfaces.",
      social: {
        github: "https://github.com/Vixen-js",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
      sidebar: [
        {
          label: "📖 Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "⭐ Vanilla TS",
          autogenerate: {
            directory: "build-application-vanilla",
            collapsed: true,
          },
        },
        {
          label: "⚛️ React",
          autogenerate: {
            directory: "build-application-react",
            collapsed: true,
          },
        },
      ],
    }),
  ],
});
