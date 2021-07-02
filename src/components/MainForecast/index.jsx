import forecastIllustration from '../../assets/illustrations/cloudy.svg'
import tempMedium from '../../assets/icons/temp-medium.svg'
import miniRain from '../../assets/icons/mini-rain.svg'
import MainForecastStyle from './style.js'

export function MainForecast({ location, date, condition, temperature, rainChance }) {
    return (
        <MainForecastStyle className="main-forecast">
          <h1>{location} - {date}</h1>

          <img className="forecast-illustration" src={forecastIllustration} alt="Ilustration" />

          <span className="condition">{condition}, <strong>{temperature}</strong> <img src={tempMedium} alt="Temperature Icon" /></span>
          <span>Chance of rain: <strong>{rainChance}</strong> <img src={miniRain} alt="Rain Icon" /></span>
        </MainForecastStyle>
    )
}