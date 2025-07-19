import axios from 'axios'
import type { User, UserListResponse } from '../interfaces/reqres.response'

export const loadUsersAction = async (page: number): Promise<User[]> => {
  try {
    const response = await axios.get<UserListResponse>(`https://reqres.in/api/users`, {
      params: {
        page: page,
      },
    })

    const { data } = response.data
    return data
  } catch (error) {
    console.error('Error loading users:', error)
    return []
  }
}
