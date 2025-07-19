import { useForm } from 'react-hook-form'

type FormInputs = {
  email: string
  password: string
}

export default function FormsPage() {
  const { handleSubmit, register } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: FormInputs) => {
    console.log('Form submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formularios</h3>

      <input
        type='email'
        className='border border-gray-300 p-2 rounded-xl'
        placeholder='Email'
        {...register('email', { required: true })}
      />

      <input
        type='password'
        placeholder='********'
        className='border border-gray-300 p-2 rounded-xl'
        {...register('password', { required: true })}
      />

      <button type='submit' className='bg-blue-500 text-white p-2 rounded-xl'>
        Ingresar
      </button>
    </form>
  )
}
