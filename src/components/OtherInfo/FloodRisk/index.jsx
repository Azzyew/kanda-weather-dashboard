import { useTranslation } from 'react-i18next'
import { Danger } from '../../../svg/icons/Danger'
import { Check } from '../../../svg/icons/Check'
import StyledFloodRisk from './style.js'

export function FloodRisk({ risk = false }) {
    const { t } = useTranslation()

    return (
        <StyledFloodRisk className={!risk ? 'green' : ''}>
            {risk ? (
                <> <Danger /> {t('High flood risk')} </>
            ) : (
                <> <Check /> {t('Low flood risk')} </>
            )}
        </StyledFloodRisk>
    )
}
