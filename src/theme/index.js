import { useState, useEffect } from "react"

export const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const storagedTheme = localStorage.getItem('theme')

        return (storagedTheme ?? 'light')
    })
    
    useEffect(() => {
        localStorage.setItem('theme', currentTheme)
    }, [currentTheme])

    function toggleCurrentTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    const themes = {
        light: {
            bodyBackground: '#E5E5E5',
            background: '#F5F5F5',
            fontColor: '#444444',
            borderColor: '#C4C4C4'
        },
        dark: {
            bodyBackground: '#333333',
            background: '#111111',
            fontColor: '#EEEEEE',
            borderColor: '#777777'
        }
    }

    return { themes, currentTheme, toggleCurrentTheme }
}