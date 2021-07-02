import dangerImg from '../../assets/icons/danger.svg'
import checkImg from '../../assets/icons/check.svg'
import FloodRiskStyle from './style.js'

export function FloodRisk({ risk = false }) {
    return (
        <FloodRiskStyle className={!risk ? 'green' : ''}>
            {risk ? (
                <> <img src={dangerImg} alt="!" /> High flood risk </>
            ) : (
                <> <img src={checkImg} alt="ok" /> Low flood risk </>
            )}
        </FloodRiskStyle>
    )
}