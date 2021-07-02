import styled from 'styled-components'

const MainForecastStyle = styled.div`
    h1 {
        text-align: center;
    }

    .forecast-illustration {
        width: 40%;
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

        img {
            width: 2.5rem;
        }
    }
`

export default MainForecastStyle