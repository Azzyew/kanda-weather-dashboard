import styled from 'styled-components'

const StyledFloodRisk = styled.div`
    padding: .5rem 2.5rem;
    background: var(--soft-green);
    border-radius: 20px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.red {
        background: var(--soft-red);
    }

    svg {
        width: 2rem;
        height: 2rem;
    }

    span {
        color: #111111;
    }
`

export default StyledFloodRisk
