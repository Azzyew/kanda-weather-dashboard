import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SettingsContextProvider } from './contexts/settingsContext'
import { ForecastsContextProvider } from './contexts/forecastsContext'

ReactDOM.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <ForecastsContextProvider>
        <App />
      </ForecastsContextProvider>
    </SettingsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)