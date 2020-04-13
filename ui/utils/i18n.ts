import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEn from '@assets/lang/en.json';
import commonVi from '@assets/lang/vi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        common: commonEn,
      },
      vi: {
        common: commonVi,
      },
    },
    fallbackLng: 'vi',
    debug: true,
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    lng: 'vi', // language to use
    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
