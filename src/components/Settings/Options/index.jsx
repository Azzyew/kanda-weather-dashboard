import Select from "react-select"
import i18next from "i18next"
import { useSettings } from "../../../contexts/settingsContext"

import OptionsContainer from "./style"
import {
  controlStyles,
  optionStyles,
  valueStyles,
  menuStyles
} from '../../SelectInput/style'

export function Options() {
  const {
    temperatureOptions,
    defaultTemperatureUnity,
    setDefaultTemperatureUnity,
    languageOptions,
    defaultLanguage,
    setDefaultLanguage
  } = useSettings()
  
  function configureDefaultTemperature(e) {
    setDefaultTemperatureUnity(e)
    localStorage.setItem('defaultTemperatureUnity', e.value)
  }
  
  function configureDefaultLanguage(e) {
    setDefaultLanguage(e)
    i18next.changeLanguage(e.value)
    localStorage.setItem('defaultLanguage', e.value)
  }

  return (
    <OptionsContainer>
      <p>Select default temperature unity:</p>
      <Select value={defaultTemperatureUnity} options={temperatureOptions}
            isSearchable={false} onChange={e => configureDefaultTemperature(e)}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles,
            }}
        />
        
      <p>Select default language:</p>
      <Select value={defaultLanguage} options={languageOptions}
            isSearchable={false} onChange={e => configureDefaultLanguage(e)}
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