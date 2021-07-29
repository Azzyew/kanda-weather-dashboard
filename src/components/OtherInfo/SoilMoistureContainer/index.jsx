import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next"
import { SoilMoisture } from "../../../svg/icons/SoilMoisture"
import { FloodRisk } from "./FloodRisk"

export function SoilMoistureContainer({ soilMoisture }) {
  const { t } = useTranslation()
  const [floodRisk, setFloodRisk] = useState()

  useEffect(() => {
    setFloodRisk(parseFloat(soilMoisture) > 10)
  }, [soilMoisture])

  return (
    <section>
      <div className="section-row">
        <p>
          <span>{t("Soil Moisture")}:</span>
          <strong>{soilMoisture}</strong>
        </p>
        <SoilMoisture color="var(--font-color)" />
      </div>

      <FloodRisk risk={floodRisk} />
    </section>
  )
}
