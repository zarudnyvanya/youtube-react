import { Routes, Route } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import { Registration } from './Pages/Registration/Registration'
import { Authorization } from './Pages/Authorization/Authorization'

import './App.scss'
import { Success } from './components/Success/Success'
import { useEffect, useState } from 'react'
import { Logout } from './components/Logout/Logout'
import UserSettings from "./components/UserSettings/UserSettings";

function App() {
  const [userData, setUserData] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const [userToken, setUserToken] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userId, setUserId] = useState()

  useEffect(() => {
    setIsAuth(false)
    setUserToken(localStorage.getItem('user'))
    setUserEmail(localStorage.getItem('email'))
    setUserId(localStorage.getItem('id'))

    if ((userToken, userEmail, userId)) {
      setUserData({
        userToken,
        userEmail,
        userId,
      })

      setIsAuth(true)
    }

    console.log('userAuthData ->', {
      userToken,
      userEmail,
      userId,
    })
  }, [userToken, userEmail, userId])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main userData={userData} isAuth={isAuth} />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/authorization"
          element={<Authorization userToken={userToken} onToken={setUserToken} />}
        />
        <Route path="/activate/:uid/:token/" element={<Success />} />

        <Route path="/userSettings" element={<UserSettings />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
