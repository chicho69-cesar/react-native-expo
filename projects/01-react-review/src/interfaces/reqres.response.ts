export interface UserListResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: Support
}

export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}