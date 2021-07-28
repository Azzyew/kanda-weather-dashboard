import { useState } from "react"
import Select from "react-select"
import OptionsContainer from "./style"
import {
  controlStyles,
  optionStyles,
  valueStyles,
  menuStyles
} from '../../SelectInput/style'

export function Options() {
  const [temperatureUnity, setTemperatureUnity] = useState({ value: "C", label: "Celsius" })
  const temperatureOptions = [
    { value: "C", label: "Celsius" },
    { value: "F", label: "Fahrenheit" }
  ]

  return (
    <OptionsContainer>
      <p>Select default temperature unity:</p>
      <Select value={temperatureUnity} options={temperatureOptions}
            isSearchable={false} onChange={e => setTemperatureUnity(e)}
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