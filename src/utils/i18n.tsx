import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('../../public/locales/en/translation.json'),
  },
  sv: {
    translation: require('../../public/locales/sv/translation.json'),
  },
  ir: {
    translation: require('../../public/locales/ir/translation.json'),
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',

  resources,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
