import { en } from "./en";
import { uk, type Dictionary } from "./uk";

// Keep in sync with `i18n.locales` in astro.config.mjs.
export const languages = {
	uk: "UA",
	en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "uk";

const dictionaries: Record<Lang, Dictionary> = { uk, en };

export function getLang(locale: string | undefined): Lang {
	return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function getDictionary(locale: string | undefined): Dictionary {
	return dictionaries[getLang(locale)];
}
