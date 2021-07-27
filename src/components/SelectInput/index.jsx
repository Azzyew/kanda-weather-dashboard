import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useForecasts } from '../../data/forecastsContext'
import {
    controlStyles,
    optionStyles,
    valueStyles,
    menuStyles
} from './style'

export function SelectInput({ type, isDisabled }) {
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
        <Select placeholder={`Select a ${type}`} isClearable onChange={e => setValues(e)}
            isSearchable={false} options={options} isDisabled={isDisabled} value={value}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles
            }}
        />
    )
}