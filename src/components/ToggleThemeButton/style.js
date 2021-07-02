import styled from 'styled-components'

const ToggleThemeButtonStyle = styled.button`
    border: none;
    position: relative;
    cursor: pointer;
    font-size: 0;

    .button-circle {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: #444444;
        position: absolute;
        left: -1rem;
        top: -.5rem;
        transition: all .2s;
    }

    .button-behind {
        width: 2.5rem;
        height: 1.25rem;
        border-radius: 25px;
        background: #a4a4a4;
    }

    &.dark .button-circle {
        background: #eeeeee;
        left: 1.5rem;
    }
`

export default ToggleThemeButtonStyle