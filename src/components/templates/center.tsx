import React, { ReactElement } from "react"
import styled from "styled-components"

interface IProps {
  children: ReactElement[]
}

interface IPropsWrapper {
  background: string
}

const Root = styled.div`
  background: url(${(p: IPropsWrapper) => p.background}),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 5e-5) 49.88%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.main`
  max-width: 1200px;
`

const Center = ({ children }: IProps): ReactElement => {
  return (
    <Root background={process.env.PUBLIC_URL + "/img/background-texture.png"}>
      <Container>{children}</Container>
    </Root>
  )
}

export default Center
