import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ENUS from './locales/en-us.json'
import PTBR from './locales/pt-br.json'
import FR from './locales/fr.json'
import ES from './locales/es.json'
import JA from './locales/ja.json'

const resources = {
    'en-US': ENUS,
    'pt-BR': PTBR,
    'fr': FR,
    'es': ES,
    'ja': JA,
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'en-US',
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
