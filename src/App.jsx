export default function App() {
  return (
    <div className="App">
      <header>
        <form>
          {/* <input type="text" name="location" placeholder="Select a location" />
          <input type="text" name="date" placeholder="Select a date" /> */}
          <select name="location" id="location">
            <option value="default">Select a location</option>
            <option value="uyo">Uyo, NG</option>
            <option value="accra">Accra, GH</option>
          </select>
          
          <select name="date" id="date">
            <option value="default">Select a date</option>
            <option value="01/18/2021">01/18/2021</option>
            <option value="06/06/2021">06/06/2021</option>
          </select>
        </form>

        <button>Dark Theme</button>
      </header>
    
      <main>
        <div className="main-forecast">
          <h1>Uyo, Nigeria - 01/18/2021</h1>

          <div className="forecast-illustration"></div>

          <span>Cloudy, <strong>29.5 C</strong></span>
          <span>Change of rain: <strong>80%</strong></span>
        </div>
        <div>
          <section>
            <div className="section-row">
              <p>
                <span>Humidity:</span>
                <strong>77%</strong>
              </p>
              <img src="" alt=":p" />
            </div>
            <div className="section-row">
              <p>
                <span>Pressure:</span>
                <strong>1000.7 mb</strong>
              </p>
              <img src="" alt=":p" />
            </div>
            <div className="section-row">
              <p>
                <span>Wind:</span>
                <strong>WSW at 5 m/s</strong>
              </p>
              <img src="" alt=":p" />
            </div>
          </section>
          
          <section>
            <div className="section-row">
              <p>
                <span>Soil Moisture:</span>
                <strong>10 cm</strong>
              </p>
              <img src="" alt=":p" />
            </div>

            <div className="flood-risk">
              ! High flood risk
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}