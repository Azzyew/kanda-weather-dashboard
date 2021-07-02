import { useState } from 'react'
import './styles.css'

export function ToggleThemeButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    return (
        <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`toggle-theme ${isDarkTheme ? 'dark' : ''}`}
        >
            <div className="button-circle"></div>
            <div className="button-behind"></div>
        </button>
    )
}