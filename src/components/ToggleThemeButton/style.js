import styled from 'styled-components'

const StyledToggleThemeButton = styled.button`
    border: none;
    position: relative;
    font-size: 0;

    .button-circle {
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        background: var(--font-color);
        position: absolute;
        left: -.75rem;
        top: -.25rem;
        transition: all .2s;
    }

    .button-behind {
        width: 2.5rem;
        height: 1.25rem;
        border-radius: 25px;
        background: var(--gray);
    }

    &.dark .button-circle {
        background: #eeeeee;
        left: 1.5rem;
    }
`

export default StyledToggleThemeButton