import styled from "styled-components";

const StyledToggleThemeButton = styled.button`
  position: relative;
  font-size: 0;

  .button-bg {
    flex: 1;
    width: 4rem;
    height: 2rem;

    padding: 0 0.25rem 0 0.4rem;
    border-radius: 25px;
    border: 1px solid var(--border-color);
    background: var(--background);
    
    display: flex;
    align-items: center;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .animate-toggle {
    flex: 0;
    transition: flex .2s;
  }

  &.dark .animate-toggle {
    flex: auto;
  }
`;

export default StyledToggleThemeButton;
