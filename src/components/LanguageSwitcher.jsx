import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import "./LanguageSwitcher.scss";

/**
 * Selector de idioma (ES / EN).
 * Grupo de botones tipo "segmented control": el idioma activo queda resaltado.
 */
export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t("common.changeLanguage")}
    >
      {languages.map((lng) => (
        <button
          key={lng.code}
          type="button"
          className={`lang-switch__option ${
            current === lng.code ? "is-active" : ""
          }`}
          aria-pressed={current === lng.code}
          onClick={() => i18n.changeLanguage(lng.code)}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
}
