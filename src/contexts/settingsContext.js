import { useState, createContext, useContext } from "react"
import i18next from "i18next"

export const SettingsContext = createContext({})

export function SettingsContextProvider({ children }) {
    const temperatureOptions = [
        { value: "C", label: "Celsius" },
        { value: "F", label: "Fahrenheit" }
    ]

    const [
        defaultTemperatureUnity,
        setDefaultTemperatureUnity
    ] = useState(() => {
        const storagedUnity = localStorage.getItem('defaultTemperatureUnity')
        
        const defaultUnity = temperatureOptions.filter(option => {
            if (option.value === storagedUnity) {
                return true
            } else return false
        })

        return (defaultUnity[0] ?? temperatureOptions[0])
    })
    
    const languageOptions = [
        { value: "en-US", label: "English" },
        { value: "pt-BR", label: "Português" }
    ]

    const [
        defaultLanguage,
        setDefaultLanguage
    ] = useState(() => {
        const storagedLanguage = localStorage.getItem('defaultLanguage')
        
        const defaultLanguage = languageOptions.filter(option => {
            if (option.value === storagedLanguage) {
                i18next.changeLanguage(option.value)
                return true
            } else return false
        })

        return (defaultLanguage[0] ?? languageOptions[0])
    })

    return (
        <SettingsContext.Provider value={{
            temperatureOptions,
            defaultTemperatureUnity,
            setDefaultTemperatureUnity,
            languageOptions,
            defaultLanguage,
            setDefaultLanguage
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    return useContext(SettingsContext)
}