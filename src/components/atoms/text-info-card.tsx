import React, { ReactElement, MouseEvent } from "react"
import styled from "styled-components"
import Text from "./text"
import { ICardActive } from "../../types/interfaces"

const Wrapper = styled.div`
  margin-top: 14px;
`

export const Link = styled.a`
  color: #1698d9;
  font-weight: 700;
  border-bottom: 1px dashed #1698d9;
  text-decoration: none;
`

const TextInfoCard = ({ card, setActive }: ICardActive): ReactElement => {
  const { active, availability, taste, description, id } = card

  return (
    <Wrapper>
      {!availability && (
        <Text color="#ffff66" fontSize="13px" lineHeight="15px">
          Печалька, {taste} закончился.
        </Text>
      )}
      {active && (
        <Text color="#ffffff" fontSize="13px" lineHeight="15px">
          {description}
        </Text>
      )}
      {!active && availability && (
        <Text color="#ffffff" fontSize="13px" lineHeight="15px">
          Чего сидишь? Порадуй котэ,{" "}
          <Link
            href="#"
            onClick={(event: MouseEvent) => {
              event.preventDefault()
              setActive(id)
            }}
          >
            купи
          </Link>
        </Text>
      )}
    </Wrapper>
  )
}

export default TextInfoCard
