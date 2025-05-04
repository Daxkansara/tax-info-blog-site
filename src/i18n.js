
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import LanguageDetector from 'i18next-browser-languagedetector';

    import translationEN from '@/locales/en/translation.json';
    import translationHI from '@/locales/hi/translation.json';
    import translationGU from '@/locales/gu/translation.json';

    const resources = {
      en: {
        translation: translationEN
      },
      hi: {
        translation: translationHI
      },
      gu: {
        translation: translationGU
      }
    };

    i18n
      .use(LanguageDetector) // Detect user language
      .use(initReactI18next) // Passes i18n down to react-i18next
      .init({
        resources,
        fallbackLng: 'en', // Use English if detected language is not available
        debug: false, // Set to true for debugging
        interpolation: {
          escapeValue: false // React already safes from xss
        },
        detection: {
          order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
          caches: ['localStorage'] // Cache the language in localStorage
        }
      });

    export default i18n;
  