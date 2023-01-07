import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {HOST} from '../HOST/HOST'
export const Success = () => {
  // const [token, setToken] = useState('')

  let location = useLocation()

  useEffect(() => {
    const uid = location.pathname.split('/')[2]
    const token = location.pathname.split('/')[3]

    console.log(location.pathname.split('/'))
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: uid, token: token }),
      }

      fetch(HOST+'/api/v1/auth/users/activation/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
    } catch (err) {
      console.log('Ошибка:', err)
    }

    console.log(token)
    console.log(token.token[0])
    // console.log(token.token)
  }, [])

  return (
    <div>
      <h1>Registration successful completed</h1>
      <h2>Token: </h2>
    </div>
  )
}
