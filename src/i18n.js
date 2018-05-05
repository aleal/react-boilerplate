import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "welcome": "Welcome to React Boilerplate",
          "app.ok": "So far so good!",
          "header": "Header "
        }
      },
      pt: {
        translations: {
          "welcome": "Bem vindo ao React \"Boilerplate\"",
          "app.ok": "Até aqui tudo bem!",
          "header": "Cabeçalho"
        }
      },
      jp: {
        translations: {
          "welcome": "React Boilerplateへようこそ",
          "app.ok": "ここまでは順調ですね",
          "header":"ヘッダー"
        }
      }
    },
    fallbackLng: 'en',
    debug: false,
 
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, // we use content as keys
 
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
 
    react: {
      wait: true
    }
  });
 
export default i18n;