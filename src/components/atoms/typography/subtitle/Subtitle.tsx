import { HTMLAttributes } from 'react'
import { SubtitleStyled } from './Subtitle.styles'

export type SubtitleProps = {
  variant: 'MD' | 'LG'
  fontWeight?: 'regular' | 'medium' | 'semibold'
  color?: string
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
} & HTMLAttributes<HTMLParagraphElement>

export const Subtitle = ({
  fontWeight = 'regular',
  variant = 'MD',
  color,
  textAlign,
  children,
  ...props
}: SubtitleProps) => {
  return (
    <SubtitleStyled
      variant={variant}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      {...props}>
      {children}
    </SubtitleStyled>
  )
}
