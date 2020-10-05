import React, { ReactElement } from "react"
import styled, { css } from "styled-components"
import Text from "../atoms/text"

interface IProps {
  availability: boolean
  weight: string
  active: boolean
}

export const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(p: IProps) => (p.active ? "#d91667" : "#1698d9")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(p: IProps) =>
    !p.availability &&
    css`
      background-color: #b3b3b3;
    `}
`

const Weight = ({ availability, weight, active }: IProps): ReactElement => {
  return (
    <Wrapper availability={availability} active={active} weight="">
      <Text color="#ffffff" fontSize="42px" lineHeight="38px">
        {weight}
      </Text>
      <Text color="#ffffff" fontSize="21px" lineHeight="22px">
        кг
      </Text>
    </Wrapper>
  )
}

export default Weight
