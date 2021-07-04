import Select from 'react-select'
import {
    controlStyles,
    optionStyles,
    valueStyles,
    menuStyles
} from './style'

export function SelectInput({ placeholder, options, isDisabled }) {
    return (
        <Select placeholder={`Select a ${placeholder}`} isClearable
            isSearchable={false} options={options} isDisabled={isDisabled}
            styles={{
                control: controlStyles,
                menu: menuStyles,
                option: optionStyles,
                singleValue: valueStyles
            }}
        />
    )
}