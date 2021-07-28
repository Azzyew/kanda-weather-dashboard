import { useState } from "react"
import Select from "react-select"
import OptionsContainer from "./style"
import {
  controlStyles,
  optionStyles,
  valueStyles,
  menuStyles
} from '../../SelectInput/style'
import { useSettings } from "../../../contexts/settingsContext"

export function Options() {
  const {
    defaultTemperatureUnity,
    setDefaultTemperatureUnity,
    temperatureOptions
  } = useSettings()
  
  const [temperatureUnity, setTemperatureUnity] = useState(defaultTemperatureUnity)

  function setDefaultTemperature(e) {
    setTemperatureUnity(e)
    setDefaultTemperatureUnity(e)
    localStorage.setItem('defaultTemperatureUnity', e.value)
  }

  return (
    <OptionsContainer>
      <p>Select default temperature unity:</p>
      <Select value={temperatureUnity} options={temperatureOptions}
            isSearchable={false} onChange={e => setDefaultTemperature(e)}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles,
            }}
        />
    </OptionsContainer>
  )
}