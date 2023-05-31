import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de.json';
import en from './locales/en.json';
import it from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        translation: de
      },
      en:{
        translation: en
      },
      it:{
        translation: it
      }
    },
    keySeparator: '.'
  });

export default i18n;