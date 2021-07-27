import { DarkMode, LightMode } from '../../svg/icons/Themes'
import StyledToggleThemeButton from './style'

export function ToggleThemeButton({ currentTheme, onClick }) {
    return (
        <StyledToggleThemeButton
            onClick={onClick}
            className={`toggle-theme ${currentTheme}`}
        >
            <div className="button-bg">
                <div class="animate-toggle" />
                {currentTheme === 'dark' ? <DarkMode /> : <LightMode />}
            </div>
        </StyledToggleThemeButton>
    )
}