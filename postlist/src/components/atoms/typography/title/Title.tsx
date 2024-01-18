import { HTMLAttributes } from 'react'
import { TitleStyled } from './Title.styles'

export type TitleProps = {
  variant: 'h1' | 'h2' | 'h3'
  fontWeight?: 'medium' | 'semibold'
  color?: string
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
} & HTMLAttributes<HTMLHeadingElement>

export const Title = ({
  variant,
  color,
  textAlign,
  fontWeight,
  children,
  ...props
}: TitleProps) => {
  return (
    <TitleStyled
      variant={variant}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      {...props}>
      {children}
    </TitleStyled>
  )
}
