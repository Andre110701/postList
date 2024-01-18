import { AxiosResponse } from 'axios'
import { api } from '../api'

export type GetPostsType = {
body: string
id: number
title: string
userId: number
}

/* eslint-disable camelcase */
export const getPostsService = async () => {
  const { data }: AxiosResponse<GetPostsType[]> =
    await api.get(`/posts`).then(response => response)

  return data
}
