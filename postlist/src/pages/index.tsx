import { useRouter } from 'next/router'
import { Button } from '../components/atoms/button/button'
import { Subtitle } from '../components/atoms/typography/subtitle/Subtitle'
import { Title } from '../components/atoms/typography/title/Title'
import { theme } from '../components/designSystem/theme'
import * as S from '../components/templates/index.styles'
import { useEffect, useState } from 'react'
import { GetPostsType, getPostsService } from '@/api/services/getPostsService'
import { Paragraph } from '@/components/atoms/typography/paragraph/Paragraph'

const PostList = () => {
  const router = useRouter()
  const [date, setDate] = useState<GetPostsType[]>()


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
          onClick={() => router.back()}
        />

      <S.Card>
        <Title variant='h2'>Minhas Postagens</Title>
        <S.PostsContainer>
          {ordenedArray?.map((item) => {
            return (
              <>
          <S.StatementItem key={item.id}>
            <Title variant='h3'>{item.id}</Title>
            <div className='content'>
            <Paragraph variant='SM'>{item.title}</Paragraph>
            <Paragraph variant='SM'>{item.body}</Paragraph>
            </div>
            <Button variant='text' text='Opções...' fontWeight='semibold' color={theme.color.primary.nth1} fullWidth={false}/>
          </S.StatementItem>
          <S.RowDivider />
          </>
            )
          })}
        </S.PostsContainer>
      </S.Card>

    </S.LoginTemplate>
  )
}

export default PostList
