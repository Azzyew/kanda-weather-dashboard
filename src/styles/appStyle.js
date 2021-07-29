import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  padding: 6vh 6vw;

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

    > div {
      display: flex;
      gap: 1rem;
    }
  }

  main {
    margin-top: 6vh;
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
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }
  }
`

export default StyledApp
