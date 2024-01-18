import { AxiosResponse } from 'axios'
import { api } from '../api'

export type GetCommentsType = {
body: string
id: number
postId: number,
name: string,
email: string,
}

/* eslint-disable camelcase */
export const getCommentsService = async (id: number) => {
  const { data }: AxiosResponse<GetCommentsType[]> =
    await api.get(`/posts/${id}/comments`).then(response => response)

  return data
}
