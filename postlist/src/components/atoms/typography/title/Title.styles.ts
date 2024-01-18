import styled, { css } from 'styled-components'
import { TitleProps } from './Title'
import { theme } from '../../../../components/designSystem/theme'

const h1 = css`
  font-size: 32px;
  line-height: 48px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`

const h2 = css`
  font-size: 24px;
  line-height: 36px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`

const h3 = css`
  font-size: 20px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`

export const TitleStyled = styled.h1<TitleProps>`
  ${({ variant, color, fontWeight, textAlign }) => css`
    color: ${color};
    margin: 0;
    text-align: ${textAlign};
    font-weight: ${fontWeight === 'semibold'
      ? theme.font.weight.semiBold
      : theme.font.weight.medium};
    font-family: ${theme.font.family.brand};
    ${variant === 'h1' && h1}
    ${variant === 'h2' && h2}
    ${variant === 'h3' && h3}
  `}
`
