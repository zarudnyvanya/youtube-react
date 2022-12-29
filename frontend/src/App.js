import { Routes, Route } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import { Registration } from './Pages/Registration/Registration'
import { Authorization } from './Pages/Authorization/Authorization'

import { setUserData, setUserToken, setIsAuth } from './redux/slices/userDataSlice'

import { Success } from './components/Success/Success'
import { useEffect, useState } from 'react'
import { Logout } from './components/Logout/Logout'
import UserSettings from './components/UserSettings/UserSettings'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'
import UserChannel from './Pages/UserChannel/UserChannel'
import doRequest from './components/doRequest/doRequest'
import VideoPage from './Pages/VideoPage/VideoPage'

function App() {
  const dispatch = useDispatch()

  const userToken = useSelector((state) => state.user.userToken)

  useEffect(() => {
    dispatch(setIsAuth(false))

    dispatch(setUserToken(localStorage.getItem('user')))

    if (userToken) {
      dispatch(setIsAuth(true))
    }
  }, [userToken])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/channel/" element={<UserChannel />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/userSettings" element={<UserSettings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  )
}

export default App
