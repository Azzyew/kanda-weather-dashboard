import { SoilMoisture } from './svg/icons/SoilMoisture'
import { Humidity } from './svg/icons/Humidity'
import { Pressure } from './svg/icons/Pressure'
import { Wind } from './svg/icons/Wind'

import { ToggleThemeButton } from './components/ToggleThemeButton'
import { FloodRisk } from './components/FloodRisk'
import { MainForecast } from './components/MainForecast'
import { SelectInput } from './components/SelectInput'

import StyledApp from './styles/appStyle'

const locationOptions = [
  { value: 'uyo', label: 'Uyo, Nigeria' },
  { value: 'accra', label: 'Accra, Ghana' }
]

const dateOptions = [
  { value: '01/18/2021', label: '01/18/2021' },
  { value: '02/07/2021', label: '02/07/2021' },
  { value: '03/09/2021', label: '03/09/2021' }
]

export default function App() {
  return (
    <StyledApp>
      <header>
        <form>
          <SelectInput placeholder="location" options={locationOptions} />
          <SelectInput placeholder="date" options={dateOptions} isDisabled />
        </form>

        <ToggleThemeButton />
      </header>

      <main>
        <MainForecast
          location="Uyo, Nigeria"
          date="01/18/2021"
          condition="Cloudy"
          temperature="29.5 C"
          rainChance="80%"
        />
        <div>
          <section>
            <div className="section-row">
              <p>
                <span>Humidity:</span>
                <strong>77%</strong>
              </p>
              <Humidity />
            </div>
            <div className="section-row">
              <p>
                <span>Pressure:</span>
                <strong>1000.7 mb</strong>
              </p>
              <Pressure />
            </div>
            <div className="section-row">
              <p>
                <span>Wind:</span>
                <strong>WSW at 5 m/s</strong>
              </p>
              <Wind />
            </div>
          </section>

          <section>
            <div className="section-row">
              <p>
                <span>Soil Moisture:</span>
                <strong>10 cm</strong>
              </p>
              <SoilMoisture />
            </div>

            <FloodRisk risk />
          </section>
        </div>
      </main>
    </StyledApp>
  )
}
