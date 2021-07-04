import { useState, useEffect } from 'react'
import StyledToggleThemeButton from './style'

export function ToggleThemeButton() {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const storagedTheme = localStorage.getItem('theme')

        return (storagedTheme ?? 'light')
    })
    
    useEffect(() => {
        localStorage.setItem('theme', currentTheme)

        currentTheme === 'dark' ? (
            setDarkTheme()
        ) : setLightTheme()
    }, [currentTheme])

    function toggleCurrentTheme() {
        if (currentTheme === 'light') {
            setDarkTheme()
        } else {
            setLightTheme()
        }
    }

    function setDarkTheme() {
        setCurrentTheme('dark')
        const root = document.documentElement.style
        root.setProperty('--body-background', '#333333')
        root.setProperty('--background', '#111111')
        root.setProperty('--font-color', '#EEEEEE')
        root.setProperty('--border-color', '#777777')
    }

    function setLightTheme() {
        setCurrentTheme('light')
        const root = document.documentElement.style
        root.setProperty('--body-background', '#F0F0F0')
        root.setProperty('--background', '#FDFDFD')
        root.setProperty('--font-color', '#444444')
        root.setProperty('--border-color', '#C4C4C4')
    }

    return (
        <StyledToggleThemeButton
            onClick={toggleCurrentTheme}
            className={`toggle-theme ${currentTheme === 'dark' ? 'dark' : ''}`}
        >
            <div className="button-behind">
                <div className="button-circle"></div>
            </div>
        </StyledToggleThemeButton>
    )
}