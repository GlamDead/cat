import React, { ReactElement } from "react"
import styled from "styled-components"

interface IProps {
  children: ReactElement[]
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  &:after {
    background: url("${process.env.PUBLIC_URL}/img/background-texture.png"),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 5e-5) 49.88%,
        rgba(0, 0, 0, 0.5) 100%
      );
    background-repeat: repeat;
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`

const Container = styled.main`
  max-width: 1200px;
`

const Center = ({ children }: IProps): ReactElement => {
  return (
    <Root>
      <Container>{children}</Container>
    </Root>
  )
}

export default Center
