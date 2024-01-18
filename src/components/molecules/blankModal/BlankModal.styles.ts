import { theme } from '../../designSystem/theme'
import styled, { css } from 'styled-components'

export const Container = styled.div<{
  isOpen: boolean
  containerPadding: string
  zIndex: number
}>`
  ${({ isOpen, containerPadding, zIndex }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1001;
    align-items: flex-end;

    background: ${theme.color.overlay.nth1};
    padding-top: ${containerPadding};
    z-index: ${zIndex};

    @media (min-width: 768px) {
      align-items: center;
      justify-content: center;
      padding: ${containerPadding};
    }
  `}
`

export const ContentWrapper = styled.div<{
  hasScroll: boolean
  scrollGap: string
  scrollWidth: string
  scrollBorderRadius: string
  scrollTrackColor: string
  scrollThumbColor: string
}>`
  ${({
    hasScroll,
    scrollGap,
    scrollWidth,
    scrollBorderRadius,
    scrollTrackColor,
    scrollThumbColor
  }) => css`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    overflow-y: auto;

    padding-right: ${hasScroll ? scrollGap : 0};

    ::-webkit-scrollbar {
      width: ${scrollWidth};
    }

    ::-webkit-scrollbar-track {
      background: ${scrollTrackColor};
      border-radius: ${scrollBorderRadius};
    }

    ::-webkit-scrollbar-thumb {
      background: ${scrollThumbColor};
      border-radius: ${scrollBorderRadius};
    }
  `}
`

export const Card = styled.div<{
  borderRadius: string
  width: string
  cardPadding: string
  backgroundColor?: string
}>`
  ${({ borderRadius, width, cardPadding, backgroundColor }) => css`
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    box-sizing: border-box;

    background-color: ${backgroundColor ?? theme.color.gray.nth4};
    padding: ${cardPadding};
    border-radius: ${borderRadius} ${borderRadius} 0 0;

    @media screen and (min-width: 768px) {
      background-color: ${backgroundColor ?? theme.color.white.nth1};
      width: ${width};
      border-radius: ${borderRadius};
    }
  `}
`
