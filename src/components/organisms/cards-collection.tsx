/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Spinner from "../atoms/spinner"
import Card from "./card"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 561px;
`

const CardsCollection = (): ReactElement => {
  const [cards, setCards] = useState([])

  return (
    <Container>
      {!cards && <Spinner />}
      {cards && cards.map((card, index) => <Card key={index} {...card} />)}
    </Container>
  )
}

export default CardsCollection
