import { AxiosResponse } from 'axios'
import { api } from '../api'

export type GetPostsType = {
body: string
id: number
title: string
}

export type Request = {
  body?: string
  id?: number
  title?: string
}

/* eslint-disable camelcase */
export const postCommentsService = async (register: Request) => {
  const body = {
    id: register.id,
    title: register.title,
    body: register.body
   }
  const { data }: AxiosResponse<GetPostsType[]> =
    await api.post(`/comments`, body).then(response => response)

  return data
}
