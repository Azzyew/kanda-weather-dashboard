import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: #F0F0F0;
    --background: #FDFDFD;
    --font-color: #444444;
    --border-color: #C4C4C4;
    --gray: #A4A4A4;
    --soft-red: #FFCECE;
    --soft-green: #BCFFB1
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    transition: all .2s;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
  }

  input, span, label, button, p {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, span, input, label, button, p {
    color: var(--font-color);
  }

  button, a {
    cursor: pointer;
    background: none;
    text-decoration: none;
    border: none;
  }

  body {
    background: var(--body-background);
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
`;

export default GlobalStyle;