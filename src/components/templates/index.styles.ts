import styled, { css } from 'styled-components'

export const LoginTemplate = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    background-color: ${theme.color.white.nth1};

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: ${theme.spacing.nth12};
      background-color: transparent;

      > button {
        align-self: flex-start;
      }

      > p {
        color: white;
        margin: 0 auto;
      }

      &::before {
        content: '';
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        background-image: ${theme.color.gradient.nth3};
        background-size: 200% 200%;
        background-position: 50% 50%;
        transform: rotate(180deg);
      }
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.white.nth1};
    max-width: 2000px;
    height: 579px;
    justify-content: center;
    margin: 0 auto;
    box-shadow: ${theme.shadow.nth2};
    border-radius: ${theme.border.radius.xl};
    padding: ${theme.spacing.nth12} 100px;
    gap: ${theme.spacing.nth12};
    
  `}
`


export const PostsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    align-items: center;
    gap: ${theme.spacing.nth10};
  `}
`
export const CommentsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    align-items: center;
    gap: ${theme.spacing.nth10};
  `}
`

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    width: 190px;
    height: 66px;
  }
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin-top: ${theme.spacing.nth10};
    row-gap: ${theme.spacing.nth1};
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    row-gap: ${theme.spacing.nth4};
    margin-top: ${theme.spacing.nth12};

    @media screen and (min-width: 768px) {
      row-gap: ${theme.spacing.nth6};
      margin-top: ${theme.spacing.nth6};
    }
  `}
`
export const StatementItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      width: 700px;
      gap: ${theme.spacing.nth6};

    }
  `}
`
export const RowDivider = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    border-bottom: 2px solid ${theme.color.gray.nth3};
  `}
`
export const ModalContentWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.nth6};
    padding: ${theme.spacing.nth6};

    @media screen and (min-width: 768px) {
      width: 540px;
      padding: ${theme.spacing.nth10} ${theme.spacing.nth14};
      row-gap: ${theme.spacing.nth10};
    }
  `}
`
export const Wrapper = styled.div<{ rowGap?: string }>`
  ${({ rowGap }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${rowGap ?? 0};
    align-items: center;
  `}
`
export const DeleteContainder = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.nth3};
    padding: ${theme.spacing.nth6} ${theme.spacing.nth14};
  `}
`