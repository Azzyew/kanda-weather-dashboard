import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    section {
        min-width: 230px;

        &:last-child {
            gap: 2.5rem;
        }

        svg {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    .section-row, .section-row p {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
`

export default StyledContainer