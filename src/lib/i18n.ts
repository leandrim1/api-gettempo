import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locale/en.json';
import ptTranslations from '../locale/pt.json';

i18n.use(initReactI18next).init({
    resources: {
      pt: {
        ...ptTranslations
      },
      en: {
        ...enTranslations
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;