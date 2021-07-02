import styled from 'styled-components'

const AppStyle = styled.div`
  height: 100vh;
  padding: 3rem 5rem;

  .main-forecast, section, select {
    background: #fdfdfd;
    border: 1px solid #c4c4c4;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    form {
      display: flex;
      gap: 2rem;

      select {
        min-width: 200px;
        padding: .5rem;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
      }
    }
  }

  main {
    margin-top: 3.5rem;
    gap: 3rem;
    display: flex;
    justify-content: space-between;

    > div {
      flex: 1;
    }

    div {
      font-size: 1.25rem;
    }

    .main-forecast, section {
      border-radius: 8px;
      padding: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }

    .main-forecast {
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
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      section {
        min-width: 300px;

        &:last-child {
          gap: 2.5rem;
        }

        img {
          width: 1.75rem;
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
    }
  }
`

export default AppStyle