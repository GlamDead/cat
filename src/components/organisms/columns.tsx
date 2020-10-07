import React, { ReactElement } from "react"
import styled from "styled-components"
import useCard from "../../hooks/use-cards"
import Spinner from "../atoms/spinner"
import Column from "./column"
import { ICard } from "../../types/interfaces"

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 561px;
`

const Columns = (): ReactElement => {
  const { cards, setCards, loading } = useCard()

  const setActive = (id: string): void => {
    setCards(
      cards.map((card: ICard) =>
        card.id === id ? { ...card, active: !card.active } : card,
      ),
    )
  }

  return (
    <Root>
      <Container>
        {loading && <Spinner />}
        {cards &&
          cards.map((card, index) => (
            <Column key={index} card={card} setActive={setActive} />
          ))}
      </Container>
    </Root>
  )
}

export default Columns
