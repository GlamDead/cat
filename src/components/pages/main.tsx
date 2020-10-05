import React, { ReactElement } from "react"
import Center from "../templates/center"
import Columns from "../organisms/columns"
import Title from "../atoms/title"

const Main = (): ReactElement => {
  return (
    <Center>
      <Title title="Ты сегодня покормил кота?" />
      <Columns />
    </Center>
  )
}

export default Main
