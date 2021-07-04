import styled from 'styled-components'

const StyledToggleThemeButton = styled.button`
    border: none;
    position: relative;
    font-size: 0;

    .button-behind {
        width: 3rem;
        height: 1.5rem;
        border-radius: 25px;
        background: var(--gray);
    }

    .button-circle {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: var(--font-color);
        transition: all .2s;
        position: absolute;
        left: .25rem;
        top: .25rem;
    }

    &.dark .button-circle {
        background: #eeeeee;
        left: 1.75rem;
    }
`

export default StyledToggleThemeButton