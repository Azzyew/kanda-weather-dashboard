import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ENUS from './locales/en-us.json'
import PTBR from './locales/pt-br.json'

const resources = {
    'en-US': ENUS,
    'pt-BR': PTBR,
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'pt-BR',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n