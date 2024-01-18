import styled, { css } from 'styled-components'
import { Props } from './Input'
import { theme } from '../../../components/designSystem/theme'

type StyledInputProps = Omit<Props, 'formik'>

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const Label = styled.label<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    color: ${theme.color.gray.nth1} /* ${
    disabled ? theme.color.gray.nth3 : theme.color.gray.nth1
  }; */
    font-weight: ${theme.font.weight.regular};
    font-size: 10px;
    font-family: ${theme.font.family.brand};
    line-height: 15px;
    text-align: start;

    @media screen and (min-width: 767px) {
      font-size: 16px;
      line-height: 24px;
    }
  `}
`

export const InputWrapper = styled.div`
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;

    @media (pointer) {
      :hover {
        cursor: pointer;
      }
    }
  }

  .eyeIconWrapper {
    padding: 8px;

    .eyeIcon {
      width: 16px;
      height: 16px;
    }

    @media screen and (min-width: 767px) {
      padding: 12px;
    }
  }

  .searchIconWrapper {
    padding: 6px;

    .searchIcon {
      width: 20px;
      height: 20px;

      color: ${theme.color.gray.nth3};

      :hover {
        color: ${theme.color.primary.nth1};
      }
    }

    @media screen and (min-width: 767px) {
      padding: 10px;
    }
  }
`

export const searchStyles = css`
  border: none;
  padding: ${theme.spacing.nth2} ${theme.spacing.nth8} ${theme.spacing.nth2}${theme.spacing.nth4};

  @media screen and (min-width: 767px) {
    padding: ${theme.spacing.nth2} 40px ${theme.spacing.nth2}
      ${theme.spacing.nth4} !important;
  }
`

const passwordStyles = css`
  padding: ${theme.spacing.nth2} 32px ${theme.spacing.nth2}${theme.spacing.nth4};
  @media screen and (min-width: 767px) {
    padding: ${theme.spacing.nth2} 40px ${theme.spacing.nth2}
      ${theme.spacing.nth4} !important;
  }
`

const disabledStyles = css`
  border: none;
  background-color: ${theme.color.gray.nth3};
  cursor: not-allowed;
`

const errorStyles = css`
  border-color: ${theme.color.alert.nth2} !important;
  color: ${theme.color.alert.nth2};
`

export const Input = styled.input<StyledInputProps>`
  ${({
    color,
    fontWeight,
    disabled,
    error,
    variant,
    backgroundColor,
    hasBorder
  }) => css`
    font-size: 14px;
    line-height: 21px;
    font-family: ${theme.font.family.brand};
    font-weight: ${fontWeight === 'regular'
      ? theme.font.weight.regular
      : fontWeight === 'semibold'
      ? theme.font.weight.semiBold
      : theme.font.weight.medium};
    box-sizing: border-box;
    height: 32px;
    color: ${color || theme.color.gray.nth1};
    padding: ${theme.spacing.nth2} ${theme.spacing.nth4};
    width: 100%;
    background-color: ${backgroundColor};
    border: ${`${theme.border.width.line} solid ${
      hasBorder ? theme.color.gray.nth3 : 'transparent'
    }`};
    border-radius: ${theme.border.radius.sm};
    -webkit-appearance: none;

    ${variant === 'search' && searchStyles}
    ${variant === 'password' && passwordStyles}
    ${disabled && disabledStyles}
    ${error && errorStyles}

    :focus {
      border-color: ${theme.color.primary.nth1};
      outline: none;
    }

    :focus + .searchIconWrapper {
      svg {
        color: ${theme.color.primary.nth1};
      }
    }

    @media screen and (min-width: 767px) {
      height: 40px;
      font-size: 16px;
      line-height: 24px;
      padding: ${theme.spacing.nth2} ${theme.spacing.nth4};
    }
  `}
`

export const Error = styled.span`
  color: ${theme.color.alert.nth2};
  font-size: 10px;
  font-family: ${theme.font.family.brand};
  line-height: 15px;
  min-height: 15px;
  text-align: start;

  @media screen and (min-width: 767px) {
    font-size: 12px;
    line-height: 18px;
    min-height: 18px;
  }
`
