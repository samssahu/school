import { useLanguage } from "./languageContext";
import { en } from "../translations/en";

export const useTranslation = () => {
  const { lang } = useLanguage();
  return lang === "en" ? en : en;
};
