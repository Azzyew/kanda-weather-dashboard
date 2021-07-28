import styled from "styled-components"

const StyledSettingsButton = styled.button`
  font-size: 0;

  svg {
    width: 2rem;
    height: 2rem;
    transition: .2s;
  }

  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }
`

export default StyledSettingsButton