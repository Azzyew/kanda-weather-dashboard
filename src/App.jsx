import forecastIllustration from './assets/illustrations/cloudy.svg'
import tempMedium from './assets/icons/temp-medium.svg'
import miniRain from './assets/icons/mini-rain.svg'
import soilMoisture from './assets/icons/soil-moisture.svg'
import humidity from './assets/icons/humidity.svg'
import pressure from './assets/icons/pressure.svg'
import dangerImg from './assets/icons/danger.svg'
import windImg from './assets/icons/wind.svg'
import { ToggleThemeButton } from './components/ToggleThemeButton'

export default function App() {
  return (
    <div className="App">
      <header>
        <form>
          <select name="location" id="location">
            <option value="default">Select a location</option>
            <option value="uyo">Uyo, Nigeria</option>
            <option value="accra">Accra, Ghana</option>
          </select>
          
          <select name="date" id="date">
            <option value="default">Select a date</option>
            <option value="01/18/2021">01/18/2021</option>
            <option value="06/06/2021">06/06/2021</option>
          </select>
        </form>

        <ToggleThemeButton />
      </header>
    
      <main>
        <div className="main-forecast">
          <h1>Uyo, Nigeria - 01/18/2021</h1>

          <img className="forecast-illustration" src={forecastIllustration} alt="Ilustration" />

          <span className="condition">Cloudy, <strong>29.5 C</strong> <img src={tempMedium} alt="Temperature Icon" /></span>
          <span>Chance of rain: <strong>80%</strong> <img src={miniRain} alt="Rain Icon" /></span>
        </div>
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

            <div className="flood-risk">
              <img src={dangerImg} alt="!" /> High flood risk
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}