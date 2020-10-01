import React, { ReactElement } from "react"
import styled from "styled-components"
import TitleCard from "../molecules/title-card"
import Weight from "../molecules/weight"
import { ICard } from "../../types/interfaces"

const Root = styled.article`
  width: 320px;
  height: 480px;
  border-radius: 10px;
  background: linear-gradient(135deg, transparent 31px, #1698d9 0);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 312px;
  height: 472px;
  border-radius: 10px;
  background: url("${process.env.PUBLIC_URL}/img/cat.png") bottom left no-repeat,
    linear-gradient(135deg, transparent 29px, #f2f2f2 0);
  padding: 17px 12px 12px 47px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
`

const Card = (props: ICard): ReactElement => {
  return (
    <Root>
      <Wrapper>
        <TitleCard {...props} />
        <Weight {...props} />
      </Wrapper>
    </Root>
  )
}

export default Card
