import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// import { dClimateAPI, soilMoistureEndpoint } from "../../../data/api"
import { SoilMoisture } from "../../../svg/icons/SoilMoisture"
import { FloodRisk } from "./FloodRisk"

export function SoilMoistureContainer({ soilMoisture }) {
  const { t } = useTranslation()
  const [floodRisk, setFloodRisk] = useState();
  // const [soilM, setSoilM] = useState();

  useEffect(() => {
    // (async () => {
    //   await axios.get('https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.68999972_-0.20985164?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true', {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*'
    //     }
    //   }).then((response) => {
    //     if(response.data){
    //       setSoilM(response.data);
    //     }
    //   }).catch((error) => {
    //     console.log("Erro da request: ");
    //     console.log(error);
    //   })
    // })();

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
