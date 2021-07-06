import StyledToggleThemeButton from './style'

export function ToggleThemeButton({ currentTheme, onClick }) {
    return (
        <StyledToggleThemeButton
            onClick={onClick}
            className={`toggle-theme ${currentTheme === 'dark' ? 'dark' : ''}`}
        >
            <div className="button-behind">
                <div className="button-circle"></div>
            </div>
        </StyledToggleThemeButton>
    )
}