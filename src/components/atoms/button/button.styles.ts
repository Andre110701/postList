import { theme } from '../../../components/designSystem/theme'
import styled, { css } from 'styled-components'
import { Props } from './button'

const filledStyles = css`
  color: ${theme.color.white.nth1};
  background-color: ${theme.color.primary.nth1};

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }

  &:disabled {
    color: ${theme.color.white.nth1} !important;
    background-color: ${theme.color.gray.nth3} !important;
    box-shadow: none !important;
    opacity: 1;
  }
`

const outlinedStyles = css<{ color?: string }>`
  ${({ color }) => css`
    border: ${theme.border.width.line} solid
      ${color || theme.color.primary.nth1};
    color: ${theme.color.primary.nth1};

    :hover {
      opacity: 0.8;
    }

    :active {
      color: ${theme.color.white.nth1} !important;
      background-color: ${color || theme.color.primary.nth1};
    }

    &:disabled {
      border-color: ${theme.color.gray.nth2} !important;
      color: ${theme.color.gray.nth2} !important;
      box-shadow: none !important;
      background-color: transparent !important;
      opacity: 1;
    }
  `}
`

const textStyles = css`
  color: ${theme.color.primary.nth1};

  &:disabled {
    color: ${theme.color.gray.nth2};
    cursor: not-allowed;
  }
`

const roundedStyles = css`
  color: ${theme.color.white.nth1};
  background: ${theme.color.primary.nth1};
  border-radius: ${theme.border.radius.xl};

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }

  &:disabled {
    color: ${theme.color.white.nth1} !important;
    box-shadow: none !important;
    background: ${theme.color.gray.nth3} !important;
    opacity: 1;
  }
`

const roundedOutlinedStyles = css<{ color?: string }>`
  ${({ color }) => css`
    border: ${theme.border.width.line} solid
      ${color || theme.color.primary.nth2};
    border-radius: ${theme.border.radius.xl};
    color: ${theme.color.primary.nth2};

    :hover {
      opacity: 0.8;
    }

    :active {
      color: ${theme.color.white.nth1} !important;
      background-color: ${color || theme.color.primary.nth2};
    }

    &:disabled {
      border-color: ${theme.color.gray.nth2} !important;
      color: ${theme.color.gray.nth2} !important;
      background-color: transparent !important;
      box-shadow: none !important;
      opacity: 1;
    }
  `}
`

export const Button = styled.button<Props>`
  ${({
    variant,
    fullWidth,
    reverseIcon,
    color,
    bg,
    padding,
    secondary,
    mobileOnlyIcon
  }) => css`
    display: flex;
    color: ${color && `${color} !important`};
    flex-direction: ${reverseIcon && 'row-reverse'};
    justify-content: center;
    gap: ${theme.spacing.nth2};
    align-items: center;
    width: ${fullWidth ? '100%' : 'max-content'};
    padding: ${padding || `${theme.spacing.nth2} ${theme.spacing.nth8}`};
    border: none;
    border-radius: ${theme.border.radius.lg};
    background-color: ${bg ? `${bg} !important` : 'transparent'};
    text-align: center;

    ${variant === 'filled' && filledStyles}
    ${variant === 'outlined' && outlinedStyles}
    ${variant === 'text' && textStyles}
    ${variant === 'rounded' && roundedStyles}
    ${variant === 'rounded-outlined' && roundedOutlinedStyles}

    svg {
      font-size: 20px;
      color: inherit;
    }

    p {
      margin: 0;
      color: inherit;

      display: ${mobileOnlyIcon && 'none'};
    }

    @media (pointer) {
      :hover {
        cursor: pointer;
      }
    }

    &:disabled {
      cursor: not-allowed;
    }

    @media screen and (min-width: 767px) {
      padding: ${padding ||
      (secondary
        ? `${theme.spacing.nth1} ${theme.spacing.nth6}`
        : `${theme.spacing.nth2} ${theme.spacing.nth10}`)};

      p {
        display: inline-block;
      }

      svg {
        font-size: 24px;
      }
    }
  `}
`
