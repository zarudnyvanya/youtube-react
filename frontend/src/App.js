import { Route, Routes } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import UploadVideo from './components/UploadVideo/UploadVideo'
import { Registration } from './Pages/Registration/Registration'
import { Authorization } from './Pages/Authorization/Authorization'

import { setIsAuth, setUserChannel, setUserData, setUserToken } from './redux/slices/userDataSlice'
import { useEffect } from 'react'
import { Logout } from './components/Logout/Logout'
import UserSettings from './components/UserSettings/UserSettings'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'
import UserChannel from './Pages/UserChannel/UserChannel'
import VideoPage from './Pages/VideoPage/VideoPage'
import {HOST} from '../src/components/HOST/HOST'
function App() {
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.user.userToken)
  const isOpen = useSelector((state) => state.videoUpload.isOpen)
  
  useEffect(() => {
    dispatch(setIsAuth(false))

    dispatch(setUserToken(localStorage.getItem('user')))

    if (userToken) {
      const authToken = {
        Authorization: `token ${userToken}`,
      }

      const getMyself = async () => {
        const response = await fetch(HOST+'/api/v1/auth/users/me/', {
          headers: authToken,
        })

        const response2 = await fetch(HOST+'/api/v1/channel/me/', {
          headers: authToken,
        })

        const result = await response.json()
        const result2 = await response2.json()

        dispatch(setUserData(result))
        dispatch(setUserChannel(result2))
      }
      getMyself()

      dispatch(setIsAuth(true))
    }
  }, [userToken])

  return (
    <div className="App">
      {isOpen && <UploadVideo />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/channel/:pk" element={<UserChannel />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/userSettings" element={<UserSettings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  )
}

export default App
