import {
  BaseSyntheticEvent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { theme } from '../../designSystem/theme'
import * as S from './BlankModal.styles'

export type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  borderRadius?: string
  containerPadding?: string
  cardPadding?: string
  width?: string
  scrollGap?: string
  backgroundColor?: string
  scrollWidth?: string
  scrollBorderRadius?: string
  scrollTrackColor?: string
  scrollThumbColor?: string
  zIndex?: number
}

export const BlankModal = ({
  isOpen = false,
  onClose,
  children,
  borderRadius = '0',
  containerPadding = '0',
  cardPadding = '0',
  width = 'max-content',
  scrollGap = '0',
  scrollWidth = '9px',
  scrollBorderRadius = '4.5px',
  scrollTrackColor = theme.color.gray.nth4,
  scrollThumbColor = theme.color.primary.nth1,
  backgroundColor,
  zIndex = 10
}: Props) => {
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>

  const [hasScroll, setHasScroll] = useState(false)

  useEffect(() => {
    const resizeOb = new ResizeObserver(function () {
      contentRef.current &&
        setHasScroll(
          contentRef.current.scrollHeight > contentRef.current.clientHeight
        )
    })

    resizeOb.observe(contentRef.current)
  }, [])

  return (
    <S.Container
      isOpen={isOpen}
      onClick={onClose}
      containerPadding={containerPadding}
      zIndex={zIndex}>
      <S.Card
        cardPadding={cardPadding}
        borderRadius={borderRadius}
        width={width}
        backgroundColor={backgroundColor}>
        <S.ContentWrapper
          id="demo-textarea"
          hasScroll={hasScroll}
          scrollGap={scrollGap}
          scrollWidth={scrollWidth}
          scrollBorderRadius={scrollBorderRadius}
          scrollTrackColor={scrollTrackColor}
          scrollThumbColor={scrollThumbColor}
          onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
          ref={contentRef}>
          {children}
        </S.ContentWrapper>
      </S.Card>
    </S.Container>
  )
}
