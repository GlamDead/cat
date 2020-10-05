import React, { ReactElement, useMemo } from "react"
import styled from "styled-components"
import { declOfNumber } from "../../helpers/string"
import {
  portions as portionsData,
  mouse as mouseData,
  taglineHover,
} from "../../data/consts"
import Text from "../atoms/text"

interface IProps {
  brand: string
  tagline: string
  taste: string
  countPortions: number
  countMouse: number
  additionally?: string
  availability: boolean
  hover: boolean
}

const Wrapper = styled.div`
  width: 100%;
`

const Span = styled.span`
  font-weight: 700;
`

const TitleCard = ({
  brand,
  tagline,
  taste,
  countPortions,
  countMouse,
  additionally,
  availability,
  hover,
}: IProps): ReactElement => {
  const portions = useMemo(() => declOfNumber(countPortions, portionsData), [
    countPortions,
  ])
  const mouse = useMemo(() => declOfNumber(countMouse, mouseData), [countMouse])

  return (
    <Wrapper>
      <Text
        // eslint-disable-next-line no-nested-ternary
        color={availability ? (hover ? "#e62e7a" : "#666666") : "#b3b3b3"}
        fontSize="16px"
        lineHeight="19px"
        marginBottom="5px"
        opacity={!availability}
      >
        {hover ? taglineHover : tagline}
      </Text>
      <Text
        color={availability ? "#000000" : "#b3b3b3"}
        fontSize="48px"
        lineHeight="56px"
        fontWeight="700"
        opacity={!availability}
      >
        {brand}
      </Text>
      <Text
        color={availability ? "#000000" : "#b3b3b3"}
        fontSize="24px"
        lineHeight="26px"
        fontWeight="700"
        marginBottom="15px"
        opacity={!availability}
      >
        {taste}
      </Text>
      <Text
        color={availability ? "#666666" : "#b3b3b3"}
        fontSize="14px"
        lineHeight="16px"
        opacity={!availability}
      >
        <Span>{countPortions}</Span> {portions}
        <br />
        {countMouse > 1 && <Span>{countMouse}</Span>} {mouse} в подарок
        <br />
        {additionally && additionally}
      </Text>
    </Wrapper>
  )
}

export default TitleCard
