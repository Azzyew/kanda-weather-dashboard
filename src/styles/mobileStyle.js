import { createGlobalStyle } from 'styled-components'

const MobileStyle = createGlobalStyle`
  @media(max-width: 1080px) {
    header {
      form {
        gap: 1rem !important;
      }

      > div {
        gap: .75rem !important;
      }
    }

    main {
      gap: 1.5rem !important;

      .main-forecast, section {
        padding: 1rem !important;
      }

      .main-forecast {
        h1 {
          font-size: 2rem
        }

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

    .flood-risk {
      font-size: 1rem !important;
      padding: .5rem 1rem;
      gap: .5rem;

      svg {
        width: 1.5rem !important;
        height: 1.5rem !important;
      }
    }
  }

  @media(max-width: 768px) {
    #root > div {
      padding-top: 3vh;
    }
    
    .ReactModal__Content {
      inset: 20px !important;
    }

    header {
      gap: 1rem;
      flex-direction: column-reverse;

      > div {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
    }

    main {
      gap: 2rem !important;
      padding-bottom: 3rem;
      flex-direction: column;

      .main-forecast {
        padding: 2rem 1rem !important;

        .condition {
          flex-direction: column;

          .comma {
            display: none;
          }

          strong {
            margin: .5rem 0 0 0;
          }
        }
      }
    }

    .settings-container {
      padding-top: 4.5rem;

      button {
        right: 1.5rem;
        top: 1.5rem;
        
        svg {
          width: 2rem;
          height: 2rem;
        }
      }

      h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        margin-top: 2rem;
      }
    }
  }

  @media(max-width: 450px) {
    header form {
      width: 100%;
      flex-direction: column;
    }
  }
`
export default MobileStyle