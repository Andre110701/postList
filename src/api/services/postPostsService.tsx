import { AxiosResponse } from 'axios'
import { api } from '../api'

export type GetPostsType = {
body: string
id: number
title: string
userId: number
}

export type Request = {
  title: string,
  mensage: string,
}

/* eslint-disable camelcase */
export const postPostsService = async (register: Request) => {
  const body = {
    title: register.title,
    body: register.mensage,
    userId: Math.random()
   }
  const { data }: AxiosResponse<GetPostsType[]> =
    await api.post(`/posts`, body).then(response => response)

  return data
}
