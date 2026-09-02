import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import enCommon     from './locales/en/common.json';
import enProjects   from './locales/en/projects.json';
import enExperience from './locales/en/experience.json';

// Portuguese
import ptCommon     from './locales/pt/common.json';
import ptProjects   from './locales/pt/projects.json';
import ptExperience from './locales/pt/experience.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  ns: ['common', 'projects', 'experience'],
  defaultNS: 'common',

  resources: {
    en: {
      common: enCommon,
      projects: enProjects,
      experience: enExperience
    },
    pt: {
      common: ptCommon,
      projects: ptProjects,
      experience: ptExperience
    },
  },

});

export default i18n;