import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: ${props => props.theme.bodyBackground};
    --background: ${props => props.theme.background};
    --font-color: ${props => props.theme.fontColor};
    --border-color: ${props => props.theme.borderColor};
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

  /* mobile */

  @media(max-width: 1080px) {
    header form {
      gap: 1rem !important;
    }

    main {
      gap: 1.5rem !important;

      div {
        font-size: 1rem !important;
      }

      .main-forecast, section {
        padding: 1rem !important;
      }

      .main-forecast {
        > svg {
          margin: 1rem 0;
        }

        .condition {
          font-size: 1.5rem;
        }
      }
    }

    .section-row {
      gap: .75rem !important;
    }
  }

  @media(max-width: 600px) {
    header {
      gap: 1rem;
      flex-direction: column-reverse;
    }

    main {
      gap: 2rem !important;
      padding-bottom: 3rem;
      flex-direction: column;

      .main-forecast {
        padding: 2rem 1rem !important;
      }
    }
  }
`;

export default GlobalStyle;