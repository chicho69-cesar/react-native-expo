import useUsers from '../hooks/useUsers'
import UserRow from './UserRow'

export default function UsersPage() {
  const { users, nextPage, previousPage } = useUsers()

  return (
    <>
      <table className='w-[500px] bg-black rounded-xl text-white'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className='flex justify-between w-[500px] mt-2'>
        <button
          onClick={previousPage}
          className='p-2 bg-blue-500 text-white rounded-[5px]'
        >
          Anteriores
        </button>

        <button
          onClick={nextPage}
          className='p-2 bg-blue-500 text-white rounded-[5px]'
        >
          Siguientes
        </button>
      </div>
    </>
  )
}
