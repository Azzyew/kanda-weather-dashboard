import { useState } from 'react'
import ToggleThemeButtonStyle from './style'

export function ToggleThemeButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    return (
        <ToggleThemeButtonStyle
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`toggle-theme ${isDarkTheme ? 'dark' : ''}`}
        >
            <div className="button-circle"></div>
            <div className="button-behind"></div>
        </ToggleThemeButtonStyle>
    )
}