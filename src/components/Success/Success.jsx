import { useEffect } from 'react'

export const Success = () => {
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: 'MTI', token: 'bfxnbz-beafbf14c28c386801c5ec75c9c7127d' }),
    }

    fetch('/api/v1/auth/users/activation/', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return <h1>Registration successful completed</h1>
}
