import styled, { css } from 'styled-components'
import { ParagraphProps } from './Paragraph'
import { theme } from '../../../../components/designSystem/theme'

const SM = css`
  font-size: 8px;
  line-height: 12px;

  @media screen and (min-width: 768px) {
    font-size: 10px;
    line-height: 15px;
  }
`

const MD = css`
  font-size: 10px;
  line-height: 15px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`

const LG = css`
  font-size: 12px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`

export const ParagraphStyled = styled.p<ParagraphProps>`
  ${({ variant, color, fontWeight, textAlign }) => css`
    color: ${color};
    margin: 0;
    text-align: ${textAlign};
    font-weight: ${fontWeight === 'regular'
      ? theme.font.weight.regular
      : fontWeight === 'medium'
      ? theme.font.weight.medium
      : theme.font.weight.semiBold};
    font-family: ${theme.font.family.brand};
    ${variant === 'SM' && SM}
    ${variant === 'MD' && MD}
    ${variant === 'LG' && LG}
  `}
`
