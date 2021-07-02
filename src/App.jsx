import soilMoisture from './assets/icons/soil-moisture.svg'
import humidity from './assets/icons/humidity.svg'
import pressure from './assets/icons/pressure.svg'
import windImg from './assets/icons/wind.svg'

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
          {/* <select name="location" id="location">
            <option value="default">Select a location</option>
            <option value="uyo">Uyo, Nigeria</option>
            <option value="accra">Accra, Ghana</option>
          </select>
          
          <select name="date" id="date">
            <option value="default">Select a date</option>
            <option value="01/18/2021">01/18/2021</option>
            <option value="06/06/2021">06/06/2021</option>
          </select> */}

          <SelectInput placeholder="location" options={locationOptions} />
          <SelectInput placeholder="date" options={dateOptions} />
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
              <img src={humidity} alt="Humidity Icon" />
            </div>
            <div className="section-row">
              <p>
                <span>Pressure:</span>
                <strong>1000.7 mb</strong>
              </p>
              <img src={pressure} alt="Pressure Icon" />
            </div>
            <div className="section-row">
              <p>
                <span>Wind:</span>
                <strong>WSW at 5 m/s</strong>
              </p>
              <img src={windImg} alt="Wind Icon" />
            </div>
          </section>

          <section>
            <div className="section-row">
              <p>
                <span>Soil Moisture:</span>
                <strong>10 cm</strong>
              </p>
              <img src={soilMoisture} alt="Soil Moisture Icon" />
            </div>

            <FloodRisk risk />
          </section>
        </div>
      </main>
    </StyledApp>
  )
}