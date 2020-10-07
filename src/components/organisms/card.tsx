import React, { ReactElement, useState, useEffect } from "react"
import styled, { css } from "styled-components"
import TitleCard from "../molecules/title-card"
import Weight, { Wrapper as WrapperWeight } from "../molecules/weight"
import { ICardActive, IPropsCSSCard } from "../../types/interfaces"

export const Root = styled.div`
  width: 320px;
  height: 480px;
  border-radius: 10px;
  background: ${(p: IPropsCSSCard) =>
    p.active
      ? "linear-gradient(135deg, transparent 31px, #d91667 0)"
      : "linear-gradient(135deg, transparent 31px, #1698d9 0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(p: IPropsCSSCard) =>
    !p.availability &&
    css`
      background: linear-gradient(135deg, transparent 31px, #b3b3b3 0);
      cursor: default;
    `}
  ${(p: IPropsCSSCard) =>
    !p.active &&
    p.availability &&
    css`
      &:hover {
        background: linear-gradient(135deg, transparent 31px, #2ea8e6 0);
      }
    `}
  ${(p: IPropsCSSCard) =>
    p.hover &&
    p.active &&
    css`
      &:hover {
        background: linear-gradient(135deg, transparent 31px, #e52e7a 0);
        ${WrapperWeight} {
          background-color: #e52e7a;
        }
      }
    `}
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
  ${(p: IPropsCSSCard) =>
    !p.availability &&
    css`
      background: linear-gradient(
          135deg,
          transparent 29px,
          rgba(255, 255, 255, 0.5) 0
        ),
        url("${process.env.PUBLIC_URL}/img/cat.png") bottom left no-repeat,
        linear-gradient(135deg, transparent 29px, #f2f2f2 0);
    `}
`

const Card = ({ card, setActive }: ICardActive): ReactElement => {
  const { availability, active } = card

  const [hover, setHover] = useState(false)
  const [leave, setLeave] = useState(false)

  useEffect((): void => {
    if (!card.active) {
      setHover(false)
      setLeave(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card])

  return (
    <Root
      availability={availability}
      active={active}
      onClick={() => availability && setActive(card.id)}
      onMouseLeave={() => {
        active && setLeave(true)
        hover && setHover(false)
      }}
      onMouseEnter={() => {
        active && leave && setHover(true)
      }}
      hover={hover}
    >
      <Wrapper availability={availability}>
        <TitleCard {...card} hover={hover} />
        <Weight {...card} />
      </Wrapper>
    </Root>
  )
}

export default Card
