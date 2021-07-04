import Danger from '../../svg/icons/Danger.svg'
import Check from '../../svg/icons/Check.svg'
import StyledFloodRisk from './style.js'

export function FloodRisk({ risk = false }) {
    return (
        <StyledFloodRisk className={!risk ? 'green' : ''}>
            {risk ? (
                <> <Danger /> High flood risk </>
            ) : (
                <> <Check /> Low flood risk </>
            )}
        </StyledFloodRisk>
    )
}
