import { HTMLAttributes } from 'react'
import { ParagraphStyled } from './Paragraph.styles'

export type ParagraphProps = {
  variant: 'SM' | 'MD' | 'LG'
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

export const Paragraph = ({
  fontWeight = 'regular',
  variant = 'MD',
  color,
  textAlign,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <ParagraphStyled
      variant={variant}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      {...props}>
      {children}
    </ParagraphStyled>
  )
}
