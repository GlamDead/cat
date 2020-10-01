import React, { ReactElement } from "react"
import Center from "../templates/center"
import CardsCollection from "../organisms/cards-collection"
import Title from "../atoms/title"

const Main = (): ReactElement => {
  return (
    <Center>
      <Title title="Ты сегодня покормил кота?" />
      <CardsCollection />
    </Center>
  )
}

export default Main
