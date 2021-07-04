import Danger from '../../svg/icons/Danger'
import Check from '../../svg/icons/Check'
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
