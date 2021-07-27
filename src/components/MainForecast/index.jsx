import { Cloudy } from '../../svg/images/Cloudy'
import { TempHigh, TempLow, TempMedium } from '../../svg/icons/Temperature'
import { MiniRain } from '../../svg/icons/MiniRain'
import StyledMainForecast from './style.js'

export function MainForecast({ region, date, condition, temperature, rainChance }) {
  const temperatureAsNumber = parseFloat(temperature)

  return (
    <StyledMainForecast className="main-forecast">
      <h1>{region} - {date}</h1>

      <Cloudy className="forecast-illustration" />

      <span className="condition">{condition}, <strong>{temperature}</strong>
        {temperatureAsNumber < 30 ? (
          <TempLow color="var(--font-color)" />
        ) : temperatureAsNumber < 34 ? (
          <TempMedium color="var(--font-color)" />
        ) : <TempHigh color="var(--font-color)" />
        }
      </span>
      <span>Chance of rain: <strong>{rainChance}</strong> <MiniRain /></span>
    </StyledMainForecast>
  )
}
