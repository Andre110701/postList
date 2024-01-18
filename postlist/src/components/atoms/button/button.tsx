import { Icon } from '@iconify/react'
import * as S from './button.styles'
import { ButtonHTMLAttributes } from 'react'
import { Paragraph } from '../typography/paragraph/Paragraph'

export type Props = {
  variant: 'filled' | 'outlined' | 'text' | 'rounded' | 'rounded-outlined'
  fullWidth?: boolean
  text?: string
  icon?: string
  color?: string
  bg?: string
  mobileOnlyIcon?: boolean
  fontWeight?: 'regular' | 'medium' | 'semibold'
  padding?: string
  reverseIcon?: boolean
  secondary?: boolean
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({
  variant,
  fullWidth = true,
  text,
  icon,
  reverseIcon,
  color,
  bg,
  secondary,
  padding,
  fontWeight,
  isLoading,
  mobileOnlyIcon,
  ...props
}: Props) => {
  return (
    <S.Button
      mobileOnlyIcon={mobileOnlyIcon}
      variant={variant}
      fullWidth={fullWidth}
      reverseIcon={reverseIcon}
      color={color}
      bg={bg}
      secondary={secondary}
      padding={padding}
      {...props}>
      {props.children ? (
        props.children
      ) : (
        <>
          {icon && <Icon icon={icon} />}

          <Paragraph fontWeight={fontWeight} variant={secondary ? 'MD' : 'LG'}>
            {text}
          </Paragraph>
        </>
      )}
    </S.Button>
  )
}
