import { useEffect, useRef, useState } from 'react'
import { loadUsersAction } from '../actions/load-users.action'
import type { User } from '../interfaces/reqres.response'

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const currentPage = useRef(1)

  useEffect(() => {
    loadUsersAction(currentPage.current)
      .then(setUsers)
  }, [])

  const nextPage = async () => {
    currentPage.current++
    const newUsers = await loadUsersAction(currentPage.current)

    if (newUsers.length === 0) {
      currentPage.current--
      return
    }

    setUsers(newUsers)
  }

  const previousPage = async () => {
    if (currentPage.current === 1) return

    currentPage.current--
    const newUsers = await loadUsersAction(currentPage.current)

    if (newUsers.length === 0) {
      currentPage.current++
      return
    }

    setUsers(newUsers)
  }

  return {
    users,
    currentPage: currentPage.current,

    nextPage,
    previousPage
  }
}
