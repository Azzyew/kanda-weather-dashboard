import { useTranslation } from 'react-i18next'
import { DarkMode, LightMode } from '../../svg/icons/Themes'
import StyledToggleThemeButton from './style'

export function ToggleThemeButton({ currentTheme, onClick }) {
    const { t } = useTranslation()

    return (
        <StyledToggleThemeButton
            onClick={onClick}
            name={t('Toggle Theme')}
            aria-label={t('Toggle Theme')}
            className={`toggle-theme ${currentTheme}`}
        >
            <div className="button-bg">
                <div className="animate-toggle" />
                {currentTheme === 'dark' ? <DarkMode /> : <LightMode />}
            </div>
        </StyledToggleThemeButton>
    )
}