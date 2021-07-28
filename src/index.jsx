import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ForecastsContextProvider } from './contexts/forecastsContext'

ReactDOM.render(
  <React.StrictMode>
    <ForecastsContextProvider>
      <App />
    </ForecastsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)