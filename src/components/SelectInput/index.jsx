import Select from 'react-select'
import {
    controlStyles,
    optionStyles,
    valueStyles,
    menuStyles
} from './style'

const options = [
    { value: 'uyo', label: 'Uyo, Nigeria' },
    { value: 'accra', label: 'Accra, Ghana' }
]

export function SelectInput() {
    return (
        <Select placeholder="Select a location" isClearable
            isSearchable={false} options={options}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles
            }}
        />
    )
}