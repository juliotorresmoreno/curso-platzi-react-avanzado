import React, { useContext } from 'react'
import SubmitButton from '../components/SubmitButton'
import Context from '../Context'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}

export default User
