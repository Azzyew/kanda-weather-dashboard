import { useState, createContext, useContext } from "react"
import { forecasts } from './forecasts'

export const ForecastsContext = createContext({})

export function ForecastsContextProvider({ children }) {
    const [currentForecast, setCurrentForecast] = useState(forecasts[0])
    const [currentRegion, setCurrentRegion] = useState('')
    
    function getAvailableForecastsOptions() {
        const availableForecastsOptions = forecasts.reduce((result, item) => {
            if (!result[item.region]) result[item.region] = []
            result[item.region].push(item.date)
            return result
        }, {})

        return availableForecastsOptions
    }

    function selectForecast(region, date) {
        const forecast = forecasts.filter(forecast => {
            return forecast.region === region && forecast.date === date
        })

        setCurrentForecast(forecast[0])
    }

    return (
        <ForecastsContext.Provider value={{
            currentForecast,
            setCurrentForecast,
            currentRegion,
            setCurrentRegion,
            getAvailableForecastsOptions,
            selectForecast
        }}>
            {children}
        </ForecastsContext.Provider>
    )
}

export function useForecasts() {
    return useContext(ForecastsContext)
}