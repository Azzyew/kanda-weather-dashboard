import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { temperatures } from '../../utils/temperatureConfig'
import { celsiusToFahrenheit } from '../../utils/celsiusToFahrenheit'
import { useSettings } from '../../contexts/settingsContext'

import { Cloudy } from '../../svg/images/Cloudy'
import { PartlyCloudy } from '../../svg/images/PartlyCloudy'
import { Sunny } from '../../svg/images/Sunny'
import { TempHigh, TempLow, TempMedium } from '../../svg/icons/Temperature'
import { MiniRain } from '../../svg/icons/MiniRain'

import StyledMainForecast from './style.js'

export function MainForecast({ region, date, condition, temperature, rainChance }) {
  const { t } = useTranslation()
  const { defaultTemperatureUnity } = useSettings()
  const [temperatureValue, setTemperatureValue] = useState(temperature)

  useEffect(() => {
    if (defaultTemperatureUnity.value === 'F') {
      const tempInFahrenheit = celsiusToFahrenheit(temperature)
      setTemperatureValue(tempInFahrenheit)
    } else {
      setTemperatureValue(temperature)
    }
  }, [temperature, defaultTemperatureUnity])

  return (
    <StyledMainForecast className="main-forecast">
      <h1>{region} - {date}</h1>

      {condition === 'Cloudy' ? (
        <Cloudy className="forecast-illustration" />
      ) : condition === 'Partly Cloudy' ? (
        <PartlyCloudy className="forecast-illustration" />
      ) : condition === 'Sunny' ? (
        <Sunny className="forecast-illustration" />
      ) : ''}

      <span className="condition">{t(condition)}, <strong>{temperatureValue}° {defaultTemperatureUnity.value}</strong>
        {temperature < temperatures.cold ? (
          <TempLow color="var(--font-color)" />
        ) : temperature < temperatures.hot ? (
          <TempMedium color="var(--font-color)" />
        ) : <TempHigh color="var(--font-color)" />
        }
      </span>
      <span>{t('Chance of rain')}: <strong>{rainChance}</strong> <MiniRain /></span>
    </StyledMainForecast>
  )
}
