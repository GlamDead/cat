import React, { ReactElement } from "react"
import styled, { css } from "styled-components"
import { ICardActive, IPropsCSSCard } from "../../types/interfaces"
import Card, { Root } from "./card"
import TextInfoCard, { Link } from "../atoms/text-info-card"
import { Wrapper as WrapperWeight } from "../molecules/weight"

const Wrapper = styled.article`
  margin: 26px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(p: IPropsCSSCard) =>
    !p.active &&
    p.availability &&
    css`
      &:hover {
        ${Root} {
          background: linear-gradient(135deg, transparent 31px, #2ea8e6 0);
        }
        ${Link} {
          color: #22a7e9;
          border-bottom: 1px dashed #2ea8e6;
        }
        ${WrapperWeight} {
          background-color: #2ea8e6;
        }
      }
    `}
`

const Column = (props: ICardActive): ReactElement => {
  const { card } = props
  const { active, availability } = card

  return (
    <Wrapper active={active} availability={availability}>
      <Card {...props} />
      <TextInfoCard {...props} />
    </Wrapper>
  )
}

export default React.memo(Column)
