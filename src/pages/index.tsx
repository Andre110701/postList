import { useRouter } from 'next/router'
import { Button } from '../components/atoms/button/button'
import { Subtitle } from '../components/atoms/typography/subtitle/Subtitle'
import { Title } from '../components/atoms/typography/title/Title'
import { theme } from '../components/designSystem/theme'
import * as S from '../components/templates/index.styles'
import { useEffect, useState } from 'react'
import { GetPostsType, getPostsService } from '@/api/services/getPostsService'
import { Paragraph } from '@/components/atoms/typography/paragraph/Paragraph'
import { BlankModal } from '@/components/molecules/blankModal'
import {  useFormik } from 'formik'
import { validationSchema } from '@/utils/validationSchema'
import { Input } from '@/components/atoms/input/Input'
import { postPostsService } from '@/api/services/postPostsService'
import { deletePostService } from '@/api/services/deletePostService'
import { GetCommentsType, getCommentsService } from '@/api/services/getCommentsService'
import { postCommentsService } from '@/api/services/postCommentsService'

const PostList = () => {
  const router = useRouter()
  const [date, setDate] = useState<GetPostsType[]>()
  const [showPostPostsModal, setShowPostPostsModal] = useState(false)
  const [showDeletePostModal, setShowDeletePostModal] = useState(false)
  const [showCommentsModal, setShowCommentsModal] = useState(false)
  const [commentsData, setCommentsData] = useState<GetCommentsType[]>()
  const [selectedPost, setSelectedPost] = useState<GetPostsType>()
  console.log("🚀 ~ PostList ~ commentsData:", commentsData)
  const [isId, setIsId] = useState(0)


  const fetch =  async () => {
    try {
      const data = await getPostsService()
      setDate(data)
    } catch (error) {
    }
  }

  const alphabeticalOrder = (a: GetPostsType, b:GetPostsType) => {
    const nomeA = a.title.toUpperCase();
    const nomeB = b.title.toUpperCase();

    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
    return 0;
  };

  const ordenedArray = date?.sort(alphabeticalOrder)

  const addPostInitilValues = {
    title: '',
   mensage: ''
  };
  const addCommentsInitilValues = {
    title: '',
   mensage: ''
  };

  const addPostFormik = useFormik({
    initialValues: addPostInitilValues,
    validationSchema: validationSchema(addPostInitilValues),
    onSubmit: async (values) => {
      try {
        const validate = date?.some((item) => item.title === values.title)
        if (!validate) {
          await postPostsService(values)
          setShowPostPostsModal(false)
          addPostFormik.resetForm()
        } else {
          console.log('erro');
        }
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:98 ~ onSubmit: ~ error:', error);
      }
    },
  });
  const addComment = useFormik({
    initialValues: addCommentsInitilValues,
    validationSchema: validationSchema(addCommentsInitilValues),
    onSubmit: async (values) => {
      const commentData = {
        id: selectedPost?.id,
        title: selectedPost?.title,
        body: values.mensage
      }
      try {
          await postCommentsService(commentData)
          setShowCommentsModal(false)
          addComment.resetForm()
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:98 ~ onSubmit: ~ error:', error);
      }
    },
  });

  const deletePost = async () => {
      try {
        await deletePostService(isId)
        setShowDeletePostModal(false)
      } catch (error) {
        console.log('🚀 ~ error', error);
        // TODO open alert modal
      }
    }
  const displayComments = async (item: GetPostsType) => {
      setSelectedPost(item)
      try {
        const comments = await getCommentsService(item.id)
        setCommentsData(comments)
        setShowCommentsModal(true)
        console.log("🚀 ~ displayComments ~ comments:", comments)
      } catch (error) {
        console.log('🚀 ~ error', error);
        // TODO open alert modal
      }
    }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.LoginTemplate>
        <Button
          variant="text"
          text="Nova Postagem"
          fontWeight="semibold"
          color={theme.color.gray.nth3}
          fullWidth={false}
          icon="octicon:plus-16"
          onClick={() => setShowPostPostsModal(true)}
        />

      <S.Card>
        <Title variant='h2'>Minhas Postagens</Title>
        <S.PostsContainer>
          {ordenedArray?.map((item) => {
            return (
              <>
          <S.StatementItem key={item.id}>
            <div onClick={() => displayComments(item)}
            style={{display: 'flex', width: '100%',
            justifyContent: 'space-between',
            gap: theme.spacing.nth10}}>
            <Title variant='h3'>{item.id}</Title>
            <div className='content'>
            <Paragraph variant='SM'>{item.title}</Paragraph>
            <Paragraph variant='SM'>{item.body}</Paragraph>
            </div>
            </div>
            <Button onClick={() => {
              setShowDeletePostModal(true)
              setIsId(item.id)
            }} variant='text'
            icon='fluent:delete-12-regular'
            fontWeight='semibold'
            color={theme.color.alert.nth2}
            fullWidth={false}/>
          </S.StatementItem>
          <S.RowDivider />
          </>
            )
          })}
        </S.PostsContainer>
      </S.Card>
      {/* add comments modal */}
      <BlankModal
          isOpen={showCommentsModal}
          onClose={() => setShowCommentsModal(false)}
          borderRadius={theme.border.radius.md}
          backgroundColor="var(--cinza-5, #F5F5F5)"
        >
          <S.ModalContentWrapper onSubmit={addComment.handleSubmit}>
            <S.Wrapper rowGap="8px">
              <Title variant="h3" color={theme.color.gray.nth1}>
                Comentários
              </Title>
            </S.Wrapper>

            <S.Wrapper rowGap={theme.spacing.nth6}>
             <S.CommentsContainer>
                  {commentsData?.map((item) => {
                        return (
                          <S.Comments key={item.id}>
                          <Subtitle variant='MD' fontWeight='semibold'>{item.name}</Subtitle>
                          <Paragraph variant='LG'>{item.body}</Paragraph>
                          </S.Comments>
                        )
                  })}
             </S.CommentsContainer>
            </S.Wrapper>
            <S.Wrapper style={{display: 'flex', flexDirection: 'row',gap: theme.spacing.nth2}}
            rowGap={theme.spacing.nth6}>
              <Input
                label='Adicionar comentário'
                variant="text"
                name="mensage"
                formik={addPostFormik}
                backgroundColor="transparent"
                hasBorder
                error={
                  addPostFormik.errors.mensage &&
                  addPostFormik.submitCount > 0
                    ? addPostFormik.errors.mensage
                    : undefined
                }
              />
              <Button color='white' icon='gg:add' variant="filled" type="submit" fullWidth={false} />
            </S.Wrapper>
          </S.ModalContentWrapper>
        </BlankModal>
      {/* add post modal */}
      <BlankModal
          isOpen={showPostPostsModal}
          onClose={() => setShowPostPostsModal(false)}
          borderRadius={theme.border.radius.md}
          backgroundColor="var(--cinza-5, #F5F5F5)"
        >
          <S.ModalContentWrapper onSubmit={addPostFormik.handleSubmit}>
            <S.Wrapper rowGap="8px">
              <Title variant="h3" color={theme.color.gray.nth1}>
                Adicionar Post
              </Title>
            </S.Wrapper>

            <S.Wrapper rowGap={theme.spacing.nth6}>
              <Input
                placeholder='Título'
                variant="text"
                name="title"
                label="Adicionar Título"
                formik={addPostFormik}
                backgroundColor="transparent"
                hasBorder
                error={
                  addPostFormik.errors.title &&
                  addPostFormik.submitCount > 0
                    ? addPostFormik.errors.title
                    : undefined
                }
              />
            </S.Wrapper>
            <S.Wrapper rowGap={theme.spacing.nth6}>
              <Input
                placeholder='Mensagem'
                variant="text"
                name="mensage"
                label="Adicionar Mensagem"
                formik={addPostFormik}
                backgroundColor="transparent"
                hasBorder
                error={
                  addPostFormik.errors.mensage &&
                  addPostFormik.submitCount > 0
                    ? addPostFormik.errors.mensage
                    : undefined
                }
              />
            </S.Wrapper>

            <S.Wrapper
              style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
            >
              <Button variant="filled" type="submit" fullWidth={true}>
                Adicionar Post
              </Button>
            </S.Wrapper>
          </S.ModalContentWrapper>
        </BlankModal>
        {/* delete post modal */}
        <BlankModal
          isOpen={showDeletePostModal}
          onClose={() => setShowDeletePostModal(false)}
          borderRadius={theme.border.radius.md}
          backgroundColor="var(--cinza-5, #F5F5F5)"
        >
          <S.DeleteContainder>
            <S.Wrapper rowGap={theme.spacing.nth2}>
              <Subtitle fontWeight='medium' variant="MD" color={theme.color.alert.nth2}>
              Atenção
              </Subtitle>
              <Paragraph variant="MD">
              Atenção! Ao excluir esta postagem os comentários<br />
              também serão excluídos.
              </Paragraph>
            </S.Wrapper>

            <S.Wrapper
              style={{
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <Button
                variant="filled"
                type="button"
                fullWidth={false}
                onClick={() => setShowDeletePostModal(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="text"
                type="submit"
                fullWidth={false}
                color={theme.color.primary.nth1}
                onClick={() => deletePost()}
              >
                Sim, excluir post
              </Button>
            </S.Wrapper>
          </S.DeleteContainder>
        </BlankModal>
    </S.LoginTemplate>
  )
}

export default PostList
