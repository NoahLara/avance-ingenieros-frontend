import { useState } from 'react'
import LoginForm from '../components/LoginForm'

function LoginScreen() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Login Screen</h1>
    <LoginForm />
    </>
  )
}

export default LoginScreen
