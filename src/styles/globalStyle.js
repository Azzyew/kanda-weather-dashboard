import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: ${props => props.theme.bodyBackground};
    --background: ${props => props.theme.background};
    --font-color: ${props => props.theme.fontColor};
    --border-color: ${props => props.theme.borderColor};
    --gray: #A4A4A4;
    --soft-red: #FFCECE;
    --soft-green: #D3FFCB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: var(--body-background);
    font-family: 'Open Sans', sans-serif;
    color: var(--font-color);
    transition: all .2s;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
  }

  button {
    all: unset;
    cursor: pointer;
    font-size: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1 !important;
  }

  .ReactModal__Overlay--before-close {
      opacity: 0 !important;
  }

  /* responsive fonts */
  @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media(max-width: 768px) {
    html {
        font-size: 87.5%;
    }
  }
`

export default GlobalStyle