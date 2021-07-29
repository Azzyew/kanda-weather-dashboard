import { useTranslation } from 'react-i18next'

import { Humidity } from '../../svg/icons/Humidity'
import { Pressure } from '../../svg/icons/Pressure'
import { Wind } from '../../svg/icons/Wind'
import { SoilMoistureContainer } from './SoilMoistureContainer'

import StyledContainer from './style'

export function OtherInfo({ humidity, pressure, wind, soilMoisture }) {
  const { t } = useTranslation()

  return (
    <StyledContainer>
      <section>
            <div className="section-row">
              <p>
                <span>{t('Humidity')}:</span>
                <strong>{humidity ?? t('Unknown')}</strong>
              </p>
              <Humidity />
            </div>
            <div className="section-row">
              <p>
                <span>{t('Pressure')}:</span>
                <strong>{pressure ?? t('Unknown')}</strong>
              </p>
              <Pressure color="var(--font-color)" background="var(--background)" />
            </div>
            <div className="section-row">
              <p>
                <span>{t('Wind')}:</span>
                <strong>{wind ?? t('Unknown')}</strong>
              </p>
              <Wind />
            </div>
      </section>

      <SoilMoistureContainer soilMoisture={soilMoisture} />
    </StyledContainer>
  )
}