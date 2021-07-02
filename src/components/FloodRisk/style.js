import styled from 'styled-components'

const FloodRiskStyle = styled.div`
    padding: .5rem 2.5rem;
    background: #FFCECE;
    border-radius: 20px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.green {
        background: #BCFFB1;
    }

    img {
        width: 2rem;
    }
`

export default FloodRiskStyle