import { useTranslation } from 'react-i18next'
import { useForecasts } from './contexts/forecastsContext'

import { Settings } from './components/Settings'
import { SelectInput } from './components/SelectInput'
import { ToggleThemeButton } from './components/ToggleThemeButton'
import { MainForecast } from './components/MainForecast'
import { OtherInfo } from './components/OtherInfo'

import { useTheme } from './theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globalStyle'
import MobileStyle from './styles/mobileStyle'
import StyledApp from './styles/appStyle'

export default function App() {
  const { t } = useTranslation()
  const { currentForecast, currentRegion } = useForecasts()
  const { themes, currentTheme, toggleCurrentTheme } = useTheme()

  return (
    <ThemeProvider theme={currentTheme === 'light' ? themes.light : themes.dark}>
      <GlobalStyle />
      <MobileStyle />
      <StyledApp>
        <header>
          <form>
            <SelectInput type="region" />
            <SelectInput type="date" isDisabled={!currentRegion} />
          </form>

          <div>
            <ToggleThemeButton currentTheme={currentTheme} onClick={toggleCurrentTheme} />
            <Settings />
          </div>
        </header>

        <main>
          <MainForecast
            region={currentForecast.region}
            date={currentForecast.date}
            condition={currentForecast.condition}
            temperature={parseFloat(currentForecast.temperature)}
            rainChance={currentForecast.rainChance ?? t('Unknown')}
          />
          
          <OtherInfo
            region={currentForecast.region}
            date={currentForecast.date}
            humidity={currentForecast.humidity}
            pressure={currentForecast.pressure}
            wind={currentForecast.wind}
            soilMoisture={currentForecast.soilMoisture}
          />
        </main>
      </StyledApp>
    </ThemeProvider>
  )
}
