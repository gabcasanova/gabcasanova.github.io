import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import enCommon     from './locales/en/common.json';
import enProjects   from './locales/en/projects.json';
import enExperience from './locales/en/experience.json';
import enEvents     from './locales/en/events.json';

// Portuguese
import ptCommon     from './locales/pt/common.json';
import ptProjects   from './locales/pt/projects.json';
import ptExperience from './locales/pt/experience.json';
import ptEvents     from './locales/pt/events.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  ns: ['common', 'projects', 'experience'],
  defaultNS: 'common',

  resources: {
    en: {
      common: enCommon,
      projects: enProjects,
      experience: enExperience,
      events: enEvents
    },
    pt: {
      common: ptCommon,
      projects: ptProjects,
      experience: ptExperience,
      events: ptEvents
    },
  },

});

export default i18n;