import React, { ReactElement, useMemo } from "react"
import styled from "styled-components"
import { declOfNumber } from "../../helpers/string"
import { portions as portionsData, mouse as mouseData } from "../../data/consts"
import Text from "../atoms/text"

interface IProps {
  brand: string
  description: string
  taste: string
  countPortions: number
  countMouse: number
  additionally?: string
}

const Wrapper = styled.div`
  width: 100%;
`

const Span = styled.span`
  font-weight: 700;
`

const TitleCard = ({
  brand,
  description,
  taste,
  countPortions,
  countMouse,
  additionally,
}: IProps): ReactElement => {
  const portions = useMemo(() => declOfNumber(countPortions, portionsData), [
    countPortions,
  ])
  const mouse = useMemo(() => declOfNumber(countMouse, mouseData), [countMouse])

  return (
    <Wrapper>
      <Text
        color="#666666"
        fontSize="16px"
        lineHeight="19px"
        marginBottom="5px"
      >
        {description}
      </Text>
      <Text color="#000000" fontSize="48px" lineHeight="56px" fontWeight="700">
        {brand}
      </Text>
      <Text
        color="#000000"
        fontSize="24px"
        lineHeight="26px"
        fontWeight="700"
        marginBottom="15px"
      >
        {taste}
      </Text>
      <Text color="#666666" fontSize="14px" lineHeight="16px">
        <Span>{countPortions}</Span> {portions}
        <br />
        {countMouse !== 1 && <Span>{countMouse}</Span>} {mouse}
        <br />
        {additionally && additionally}
      </Text>
    </Wrapper>
  )
}

export default TitleCard
