import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import { useForecasts } from '../../contexts/forecastsContext'
import {
    controlStyles,
    optionStyles,
    valueStyles,
    inputStyles,
    menuStyles
} from './style'

export function SelectInput({ type, isDisabled }) {
    const { t } = useTranslation()
    const { getAvailableForecastsOptions, currentRegion, setCurrentRegion, selectForecast } = useForecasts()
    const [options, setOptions] = useState([])
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (type === 'date') setValue(null)

        const forecasts = getAvailableForecastsOptions()

        if (type === 'region') {
            const regions = Object.keys(forecasts)
            setOptions(() => addOptions(regions))
        } else if (type === 'date') {
            const dates = forecasts[currentRegion] ?? []
            setOptions(() => addOptions(dates))
        }
    }, [currentRegion])

    function addOptions(options) {
        const optionsArray = options.reduce((result, option) => {
            result.push({
                value: option,
                label: option
            })
            return result
        }, [])

        return optionsArray
    }

    function setValues(e) {
        setValue(e)
        
        if (type === 'region') {
            setCurrentRegion(e?.value ?? '')
        } else if (type === 'date') {
            e && selectForecast(currentRegion, e.value)
        }
    }

    return (
        <Select options={options} onChange={e => setValues(e)} 
            isDisabled={isDisabled} value={value} isClearable
            placeholder={t(`Select a ${type}`)}
            aria-label={t(`Select a ${type}`)}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles,
                input: inputStyles,
            }}
        />
    )
}