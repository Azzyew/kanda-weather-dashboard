import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  padding: 3rem 5rem;

  .main-forecast, section, select {
    background: var(--background);
    border: 1px solid var(--border-color);
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
        border: 1px solid var(--border-color);
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

    > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      section {
        min-width: 300px;

        &:last-child {
          gap: 2.5rem;
        }

        svg {
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

export default StyledApp
