// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://landing-ugs.oleksii-drizzle-team.us",
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "uk",
				locales: {
					uk: "uk",
					en: "en",
				},
			},
		}),
	],
	i18n: {
		locales: ["uk", "en"],
		defaultLocale: "uk",
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
