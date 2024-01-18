import styled, { css } from 'styled-components'

type DivProps = {
  display?: 'flex' | 'block' | 'inline-block' | 'inline-flex' | 'none'
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: string
  padding?: string
  margin?: string
  maxWidth?: string
  width?: string
  height?: string
  overflow?: string
}

export const Flex = styled.div<DivProps>`
  ${({ theme, ...props }) => css`
    display: ${props.display || 'flex'};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
    margin: ${props.margin};
    padding: ${props.padding};
    height: ${props.height};
    width: ${props.width};
    flex-direction: ${props.flexDirection};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    max-width: ${props.maxWidth};
    overflow: ${props.overflow};
  `}
`

export const Box = styled.div<DivProps>`
  ${({ ...props }) => css`
    display: ${props.display};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
    margin: ${props.margin};
    padding: ${props.padding};
    height: ${props.height};
    width: ${props.width};
    flex-direction: ${props.flexDirection};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    max-width: ${props.maxWidth};
  `}
`

type OverlayProps = {
  isOpen?: boolean
  transparentDesktop?: boolean
  transparentTablet?: boolean
  zIndex?: string
}

export const Overlay = styled.section<OverlayProps>`
  ${({ isOpen, transparentDesktop, transparentTablet, zIndex }) => css`
    display: ${isOpen ? 'block' : 'none'};
    height: 100vh;
    width: 100vw;
    z-index: ${zIndex ?? 10};
    background-color: rgba(49, 49, 49, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (min-width: 768px) {
      background-color: ${transparentTablet && 'transparent'};
    }

    @media screen and (min-width: 1366px) {
      background-color: ${transparentDesktop && 'transparent'};
    }

    @media (pointer: fine) {
      cursor: pointer;
    }
  `}
`
