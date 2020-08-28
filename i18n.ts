import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './translations/en/common.json';
import routes_en from './translations/en/routes.json';

import common_fr from './translations/fr/common.json';
import routes_fr from './translations/fr/routes.json';

const resources = {
  en: {
    common: common_en,
    routes: routes_en,
  },
  fr: {
    common: common_fr,
    routes: routes_fr,
  },
} as Resource;

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
