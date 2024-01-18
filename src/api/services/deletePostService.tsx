import { AxiosResponse } from 'axios'
import { api } from '../api'

/* eslint-disable camelcase */
export const deletePostService = async (id: number) => {
  const { data }: AxiosResponse =
    await api.delete(`/posts/${id}`).then(response => response)

  return data
}
