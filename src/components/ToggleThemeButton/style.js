import styled from 'styled-components'

const StyledToggleThemeButton = styled.button`
    border: none;
    position: relative;
    font-size: 0;

    .button-behind {
        width: 4rem;
        height: 1.875rem;
        padding: 0 .25rem 0 .4rem;
        border-radius: 25px;
        background: var(--gray);
        display: flex;
        align-items: center;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    &.dark .button-behind {
        justify-content: flex-end;
    }
`

export default StyledToggleThemeButton