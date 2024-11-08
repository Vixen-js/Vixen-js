// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/docs",
  integrations: [
    starlight({
      title: "Vixen UI",
      description: "Vixen UI is a framework for building user interfaces.",
      customCss: ["./src/assets/theme.css"],
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
          translations: {
            es: "📖 Empieza Aquí",
          },
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "⭐ Vanilla TS",
          translations: {
            es: "⭐ Vanilla TS",
          },
          items: [
            {
              label: "Learn the basics",
              translations: { es: "Aprende lo básico" },
              link: "build-application-vanilla/",
            },
            {
              label: "Basic Widgets",
              translations: {
                es: "Widgets Básicos",
              },
              autogenerate: {
                directory: "build-application-vanilla/Basic Widgets",
              },
              collapsed: true,
            },
            {
              label: "Advanced Widgets",
              translations: {
                es: "Widgets Avanzados",
              },
              autogenerate: {
                directory: "build-application-vanilla/Advanced Widgets",
              },
              collapsed: true,
            },
            {
              label: "Layout Components",
              translations: {
                es: "Componentes Layout",
              },
              autogenerate: {
                directory: "build-application-vanilla/Layout Components",
              },
              collapsed: true,
            },
            {
              label: "Main Window and related",
              translations: {
                es: "Ventana Principal y Relacionados",
              },
              autogenerate: {
                directory: "build-application-vanilla/Main window and related",
              },
              collapsed: true,
            },
          ],
        },
        {
          label: "⚛️ React",
          translations: {
            es: "⚛️ React.js",
          },
          items: [
            {
              label: "Learn the basics",
              translations: { es: "Aprende lo básico" },
              link: "build-application-react/",
            },
            {
              label: "Basic Widgets",
              translations: {
                es: "Widgets Básicos",
              },
              autogenerate: {
                directory: "build-application-react/Basic Widgets",
              },
              collapsed: true,
            },
            {
              label: "Advanced Widgets",
              translations: {
                es: "Widgets Avanzados",
              },
              autogenerate: {
                directory: "build-application-react/Advanced Widgets",
              },
              collapsed: true,
            },
            {
              label: "Layout Components",
              translations: {
                es: "Componentes Layout",
              },
              autogenerate: {
                directory: "build-application-react/Layout Components",
              },
              collapsed: true,
            },
            {
              label: "Main Window and related",
              translations: {
                es: "Ventana Principal y Relacionados",
              },
              autogenerate: {
                directory: "build-application-react/Main window and related",
              },
              collapsed: true,
            },
          ],
        },
        {
          label: "🚧 Development",
          translations: {
            es: "Desarrollo",
          },
          autogenerate: { directory: "development" },
        },
      ],
    }),
  ],
});
