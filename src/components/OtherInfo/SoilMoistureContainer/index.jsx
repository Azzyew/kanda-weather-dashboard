import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import soilMoistureData from "../../../data/soil-moisture-data.json"
import { SoilMoisture } from "../../../svg/icons/SoilMoisture"
import { FloodRisk } from "./FloodRisk"

export function SoilMoistureContainer({ region, date }) {
  const { t } = useTranslation()
  const [floodRisk, setFloodRisk] = useState(false)
  const [soilMoisture, setSoilMoisture] = useState()

  useEffect(() => {
    const currentDate = soilMoistureData[region][date]['data']
    const averageSoilM = getAverageSoilMoisture(currentDate)

    const last10Days = soilMoistureData[region][date]['last-10-days']
    const last10DaysAverage = getAverageSoilMoisture(last10Days)

    setSoilMoisture(averageSoilM)
    setFloodRisk(last10DaysAverage < averageSoilM)
  }, [date, region])

  function getAverageSoilMoisture(obj) {
    const soilMoistureValues = Object.values(obj)

    const total = soilMoistureValues.reduce((total, value) => {
      total += Number(value)
      return total
    }, 0)

    const average = total / soilMoistureValues.length

    return Number(average.toFixed(2))
  }

  return (
    <section>
      <div className="section-row">
        <p>
          <span>{t("Soil Moisture")}:</span>
          <strong>{soilMoisture} m³</strong>
        </p>
        <SoilMoisture color="var(--font-color)" />
      </div>

      <FloodRisk risk={floodRisk} />
    </section>
  )
}
