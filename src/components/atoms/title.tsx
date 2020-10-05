import React, { ReactElement } from "react"
import styled from "styled-components"

const H1Styled = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 36px;
  text-shadow: 0px 1px 1px #000000;
  line-height: 42px;
  font-family: Exo2, sans-serif;
  font-weight: 100;
  margin-top: 50px;
`

interface IProps {
  title: string
}

const Title = ({ title }: IProps): ReactElement => {
  return <H1Styled>{title}</H1Styled>
}

export default Title
