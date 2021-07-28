import { useState, createContext, useContext } from "react"

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
                return storagedUnity
            } else return null
        })

        return (defaultUnity[0] ?? temperatureOptions[0])
    })

    return (
        <SettingsContext.Provider value={{
            defaultTemperatureUnity,
            setDefaultTemperatureUnity,
            temperatureOptions
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    return useContext(SettingsContext)
}