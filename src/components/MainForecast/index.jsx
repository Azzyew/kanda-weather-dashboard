import forecastIllustration from '../../assets/illustrations/cloudy.svg'
import tempMedium from '../../assets/icons/temp-medium.svg'
import miniRain from '../../assets/icons/mini-rain.svg'
import MainForecastStyle from './style.js'

export function MainForecast() {
    return (
        <MainForecastStyle className="main-forecast">
          <h1>Uyo, Nigeria - 01/18/2021</h1>

          <img className="forecast-illustration" src={forecastIllustration} alt="Ilustration" />

          <span className="condition">Cloudy, <strong>29.5 C</strong> <img src={tempMedium} alt="Temperature Icon" /></span>
          <span>Chance of rain: <strong>80%</strong> <img src={miniRain} alt="Rain Icon" /></span>
        </MainForecastStyle>
    )
}