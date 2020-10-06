import styled, { keyframes } from "styled-components"

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate} 3s infinite;
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #51d;
  border-radius: 50%;
`

export default Spinner
