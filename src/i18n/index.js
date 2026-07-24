import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";

export const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

i18n
  // Detecta el idioma (localStorage → navegador) y persiste la elección.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

// Mantiene sincronizado el atributo <html lang="…"> con el idioma activo.
const applyLang = (lng) => {
  document.documentElement.lang = lng;
};
applyLang(i18n.resolvedLanguage);
i18n.on("languageChanged", applyLang);

export default i18n;
