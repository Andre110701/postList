import { theme } from '../../designSystem/theme'
import { Icon } from '@iconify/react'
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './Input.styles'
import * as Mask from './utils/masks'

export type Props = {
  formik?: any
  name: string
  fontWeight?: 'regular' | 'medium' | 'semibold'
  variant?:
    | 'cnpj'
    | 'currency'
    | 'cpf'
    | 'cep'
    | 'phone'
    | 'password'
    | 'text'
    | 'search'
  placeholder?: string
  label?: string
  value?: string
  error?: string
  color?: string
  disabled?: boolean
  hiddenError?: boolean
  backgroundColor?: string
  hasBorder?: boolean
  onSearch?: () => void
}

export type InputProps = Props & JSX.IntrinsicElements['input']

export const Input = ({
  formik,
  fontWeight = 'regular',
  backgroundColor,
  hasBorder = false,
  variant,
  label,
  value,
  color,
  error,
  disabled,
  hiddenError,
  placeholder,
  name,
  onSearch,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(variant)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current || !onSearch) return

    inputRef.current.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault()

        onSearch()
      }
    })
  }, [])

  const handleIconClick = () => {
    if (inputType !== 'password') {
      setInputType('password')
    } else {
      setInputType('text')
    }
  }

  const handleKeyUp = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (variant === 'cep') {
        Mask.cep(event)
      }
      if (variant === 'cnpj') {
        Mask.cnpj(event)
      }
      if (variant === 'cpf') {
        Mask.cpf(event)
      }
      if (variant === 'currency') {
        Mask.currency(event)
      }
      if (variant === 'phone') {
        Mask.phone(event)
      }
    },
    [variant]
  )

  const formikError =
    formik && formik.errors[name] && formik.touched[name]
      ? formik.errors[name]
      : undefined

  return (
    <S.Container>
      {label && <S.Label disabled={disabled}>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input
          name={name}
          value={
            value ?? (formik && formik.values[name] ? formik.values[name] : '')
          }
          type={inputType === 'password' ? 'password' : 'text'}
          disabled={disabled}
          color={color}
          placeholder={placeholder}
          fontWeight={fontWeight}
          variant={variant}
          onChange={props.onChange || formik?.handleChange}
          error={error || formikError}
          backgroundColor={backgroundColor}
          hasBorder={hasBorder}
          {...props}
          onKeyUp={handleKeyUp}
          ref={inputRef}
        />

        {variant === 'password' && (
          <div className="icon eyeIconWrapper" onClick={handleIconClick}>
            <Icon
              className="eyeIcon"
              icon={
                inputType === 'text' ? 'ph:eye-closed-fill' : 'clarity:eye-line'
              }
              color={error ? theme.color.alert.nth2 : theme.color.gray.nth1}
            />
          </div>
        )}

        {variant === 'search' && (
          <div className="icon searchIconWrapper" onClick={() => onSearch?.()}>
            <Icon className="searchIcon" icon="akar-icons:search" />
          </div>
        )}
      </S.InputWrapper>

      {!hiddenError && <S.Error>{error ?? formikError}</S.Error>}
    </S.Container>
  )
}
