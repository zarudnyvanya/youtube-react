import { Routes, Route } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import { Registration } from './Pages/Registration/Registration'
import { Authorization } from './Pages/Authorization/Authorization'

import { setUserData, setUserToken } from './redux/slices/userDataSlice'

import { Success } from './components/Success/Success'
import { useEffect, useState } from 'react'
import { Logout } from './components/Logout/Logout'
import UserSettings from './components/UserSettings/UserSettings'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'

function App() {
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.user.userData)
  const userToken = useSelector((state) => state.user.userToken)

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setIsAuth(false)
    dispatch(setUserToken(localStorage.getItem('user')))

    if (userToken) {
      setIsAuth(true)

      const authToken = {
        Authorization: `token ${userToken}`,
      }

      const getMyself = async () => {
        const response = await fetch('api/v1/auth/users/me/', {
          headers: authToken,
        })
        const result = await response.json()

        const data = {
          id: result.id,
          email: result.email,
          firstName: result.first_name,
          lastName: result.last_name,
        }

        console.log(data)

        dispatch(setUserData(data))
        console.log('user redux ->', userData)
      }
      getMyself()
    }
  }, [userToken])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isAuth={isAuth} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization userToken={userToken} />} />
        <Route path="/activate/:uid/:token/" element={<Success />} />

        {/* <Route path="/userSettings" element={<UserSettings userData={userData} />} /> */}

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
