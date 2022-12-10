import { Routes, Route } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import { Registration } from './Pages/Registration/Registration'
import { Authorization } from './Pages/Authorization/Authorization'

import './App.scss'
import { Success } from './components/Success/Success'
import { useEffect, useState } from 'react'

function App() {
  const [userToken, setUserToken] = useState('')
  const [userData, setUserData] = useState()

  useEffect(() => {
    const authToken = {
      Authorization: `token ${userToken}`,
    }

    const getMyself = async () => {
      const response = await fetch('api/v1/auth/users/me/', {
        headers: authToken,
      })

      const result = await response.json()
      setUserData(result)
    }

    getMyself()
    // console.log('dasda', userData.id)
    // localStorage.setItem('id', userData.id)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/authorization"
          element={<Authorization userToken={userToken} onToken={setUserToken} />}
        />
        <Route path="/activate/:uid/:token/" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
