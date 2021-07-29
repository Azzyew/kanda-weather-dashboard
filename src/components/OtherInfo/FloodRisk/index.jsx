import { useTranslation } from 'react-i18next'
import { Danger } from '../../../svg/icons/Danger'
import { Check } from '../../../svg/icons/Check'
import StyledFloodRisk from './style.js'

export function FloodRisk({ risk = false }) {
    const { t } = useTranslation()

    return (
        <StyledFloodRisk className={risk ? 'flood-risk red' : 'flood-risk'}>
            {risk ? (
                <> <Danger /> <span>{t('High flood risk')}</span> </>
            ) : (
                <> <Check /> <span>{t('Low flood risk')}</span> </>
            )}
        </StyledFloodRisk>
    )
}
