import styled from 'styled-components'

const StyledMainForecast = styled.div`
    h1 {
        text-align: center;
    }

    > svg {
        width: 40%;
        height: auto;
        margin: 1.5rem 0;
    }

    .condition {
        font-size: 1.75rem;
    }

    div {
        display: flex;
        align-items: center;

        strong {
            display: flex;
            align-items: center;
            margin-left: .5rem;
        }

        svg {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`

export default StyledMainForecast
