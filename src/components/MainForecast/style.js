import styled from 'styled-components'

const StyledMainForecast = styled.div`
    h1 {
        text-align: center;
    }

    > svg {
        width: 40%;
        height: auto;
        margin: 2rem 0;
    }

    .condition {
        font-size: 2rem;
    }

    span {
        display: flex;
        align-items: center;

        strong {
            margin-left: .5rem;
        }

        svg {
            width: 2.5rem;
        }
    }
`

export default StyledMainForecast
