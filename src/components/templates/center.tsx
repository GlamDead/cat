import React, { ReactElement } from "react"
import styled from "styled-components"

interface IProps {
  children: ReactElement[]
}

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`

const Background = styled.div`
  background-repeat: repeat;
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: url("${process.env.PUBLIC_URL}/img/background-texture.png");
`

const Container = styled.div`
  max-width: 1200px;
  display: block;
  width: 100%;
`

const Center = ({ children }: IProps): ReactElement => {
  return (
    <RootWrapper>
      <Root>
        <Background />
        <Container>{children}</Container>
      </Root>
    </RootWrapper>
  )
}

export default Center
