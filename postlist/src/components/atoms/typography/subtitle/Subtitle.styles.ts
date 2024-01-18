import styled, { css } from 'styled-components'
import { SubtitleProps } from './Subtitle'
import { theme } from '../../../../components/designSystem/theme'

const MD = css`
  font-size: 14px;
  line-height: 21px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const LG = css`
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`

export const SubtitleStyled = styled.p<SubtitleProps>`
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
    ${variant === 'MD' && MD}
    ${variant === 'LG' && LG}
  `}
`
