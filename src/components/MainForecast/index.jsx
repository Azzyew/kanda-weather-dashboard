import { Cloudy } from '../../svg/images/Cloudy'
import { TempMedium } from '../../svg/icons/TempMedium'
import { MiniRain } from '../../svg/icons/MiniRain'
import StyledMainForecast from './style.js'

export function MainForecast({ location, date, condition, temperature, rainChance }) {
    return (
        <StyledMainForecast className="main-forecast">
          <h1>{location} - {date}</h1>

          <Cloudy className="forecast-illustration" />

          <span className="condition">{condition}, <strong>{temperature}</strong> <TempMedium color="var(--font-color)" /></span>
          <span>Chance of rain: <strong>{rainChance}</strong> <MiniRain /></span>
        </StyledMainForecast>
    )
}
