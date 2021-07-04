import styled from 'styled-components'

const StyledFloodRisk = styled.div`
    padding: .5rem 2.5rem;
    background: var(--soft-red);
    border-radius: 20px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.green {
        background: var(--soft-green);
    }

    svg {
        width: 2rem;
    }
`

export default StyledFloodRisk
