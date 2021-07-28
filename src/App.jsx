import { useTranslation } from 'react-i18next'
import { useForecasts } from './contexts/forecastsContext'
import { Settings } from './components/Settings'

import bodyBackground from './svg/images/bodyBG-dark.jpg'
import bodyBackgroundLight from './svg/images/bodyBG-light.jpeg'
import { SoilMoisture } from './svg/icons/SoilMoisture'
import { Humidity } from './svg/icons/Humidity'
import { Pressure } from './svg/icons/Pressure'
import { Wind } from './svg/icons/Wind'

import { ToggleThemeButton } from './components/ToggleThemeButton'
import { FloodRisk } from './components/FloodRisk'
import { MainForecast } from './components/MainForecast'
import { SelectInput } from './components/SelectInput'

import { useTheme } from './theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyle'
import StyledApp from './styles/appStyle'

export default function App() {
  const { t } = useTranslation()
  const { currentForecast, currentRegion } = useForecasts()
  const { themes, currentTheme, toggleCurrentTheme } = useTheme()

  return (
    <ThemeProvider theme={currentTheme === 'light' ? themes.light : themes.dark}>
      <GlobalStyle />
      <StyledApp style={{
        backgroundImage: currentTheme === 'dark' ? (
          `url('${bodyBackground}')`
        ) : (
          `url('${bodyBackgroundLight}')`
        ),
        backgroundRepeat: 'no-repeat' ,
        backgroundSize: 'cover'
      }}>
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
            rainChance={currentForecast.rainChance ?? 'Unknown'}
          />
          <div>
            <section>
              <div className="section-row">
                <p>
                  <span>{t('Humidity')}:</span>
                  <strong>{currentForecast.humidity ?? "Unknown"}</strong>
                </p>
                <Humidity />
              </div>
              <div className="section-row">
                <p>
                  <span>{t('Pressure')}:</span>
                  <strong>{currentForecast.pressure ?? "Unknown"}</strong>
                </p>
                <Pressure color="var(--font-color)" background="var(--background)" />
              </div>
              <div className="section-row">
                <p>
                  <span>{t('Wind')}:</span>
                  <strong>{currentForecast.wind ?? "Unknown"}</strong>
                </p>
                <Wind />
              </div>
            </section>

            <section>
              <div className="section-row">
                <p>
                  <span>{t('Soil Moisture')}:</span>
                  <strong>10 cm</strong>
                </p>
                <SoilMoisture color="var(--font-color)" />
              </div>

              <FloodRisk risk />
            </section>
          </div>
        </main>
      </StyledApp>
    </ThemeProvider>
  )
}
