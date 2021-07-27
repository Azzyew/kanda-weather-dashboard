import { DarkMode, LightMode } from '../../svg/icons/Themes'
import StyledToggleThemeButton from './style'

export function ToggleThemeButton({ currentTheme, onClick }) {
    return (
        <StyledToggleThemeButton
            onClick={onClick}
            className={`toggle-theme ${currentTheme === 'dark' ? 'dark' : ''}`}
        >
            <div className="button-behind">
                <div className="button-circle">
                    {currentTheme === 'dark' ? <DarkMode /> : <LightMode />}
                </div>
            </div>
        </StyledToggleThemeButton>
    )
}