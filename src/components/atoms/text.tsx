import styled, { css } from "styled-components"

interface IProps {
  color: string
  fontSize: string
  lineHeight: string
  marginBottom?: string
  fontWeight?: string
  transparancy?: boolean
}

const Text = styled.p`
  color: ${(p: IProps) => p.color};
  font-size: ${(p: IProps) => p.fontSize};
  font-family: "Trebuchet MS", sans-serif;
  line-height: ${(p: IProps) => p.lineHeight};
  ${(p: IProps) =>
    p.marginBottom &&
    css`
      margin-bottom: ${p.marginBottom};
    `}
  ${(p: IProps) =>
    p.fontWeight &&
    css`
      font-weight: ${p.fontWeight};
    `}
  ${(p: IProps) =>
    p.transparancy &&
    css`
      opacity: 0.5;
    `}
`

export default Text
