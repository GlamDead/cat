import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  to{
    transform: rotate(1turn);
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
