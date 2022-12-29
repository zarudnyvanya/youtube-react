import { setUserChannel, setUserVideos } from '../../redux/slices/userDataSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'
import { useEffect } from 'react'

import { Navigation } from './../../components/Navigation/Navigation'
import { Header } from './../../components/Header/Header'
import { Popup } from '../../components/Popup/Popup'
import Skeleton from './../../components/CardVideo/CardSkeleton'

import doRequest from './../../components/doRequest/doRequest'

import s from './UserChannel.module.scss'
import { CardVideo } from '../../components/CardVideo/CardVideo'

const options = ['Главная', 'Плейлисты', 'Каналы', 'О канале']

const UserChannel = () => {
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.user.userData)
  const userToken = useSelector((state) => state.user.userToken)
  const userChannel = useSelector((state) => state.user.userChannel)
  const userVideos = useSelector((state) => state.user.userVideos)
  const popup = useSelector((state) => state.userPopup.popup)

  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(0)
  const [userId, setUserId] = useState()

  useEffect(() => {
    setIsLoading(true)
    const url = '/api/v1/channel/me/'

    const getUserVideos = async () => {
      const response = await doRequest(url, userToken)
      const data = await response.json()

      dispatch(setUserChannel(data))
    }

    if (userToken) {
      getUserVideos()
    }
  }, [userToken])

  useEffect(() => {
    if (userChannel.pk) {
      fetch(`api/v1/video/${userChannel.pk}/channel/`)
        .then((res) => res.json())
        .then((data) => dispatch(setUserVideos(data)))
      setIsLoading(false)
    }
  }, [userChannel, userToken])

  const onOption = (index) => {
    setValue(index)
  }

  return (
    <>
      {popup && <Popup />}
      <Header />
      <div className={s.container}>
        <Navigation />
        <main className={s.main__content}>
          <div className={s.user__chanel}>
            <div className={s.header__chanel}>
              <div className={s.header__leftpart__chanel}>
                <img src="assets/svg__header/user.png" alt="logo" className={s.logo__chanel} />

                <div className={s.name__sub__chanel}>
                  <h1>{userChannel.name}</h1>
                  <p className={s.subscribers}>{userChannel.subscribers} подписчик</p>
                </div>
              </div>

              <div className={s.manager__wrapper}>
                <a href="#" className={s.video__management}>
                  Управление видео
                </a>
              </div>
            </div>

            <div className={s.select__options__chanel}>
              <nav className={s.options__chanel}>
                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => onOption(index)}
                      key={index}
                      className={
                        value === index
                          ? `${s.active} ${s.option__item} ${s.option__main}`
                          : `${s.option__item}`
                      }>
                      {option}
                    </div>
                  )
                })}

                <div className={s.option__item}>
                  <button className={s.option__search}>
                    <img src="assets/svg__header/search.svg" alt="" />
                  </button>
                </div>
              </nav>
            </div>

            <div className={s.content__chanel}>
              {isLoading
                ? [...new Array(8)].map((_, Index) => <Skeleton key={Index} />)
                : userVideos.map((video) => {
                    return (
                      <CardVideo
                        key={video.id}
                        videoId={video.id}
                        videoView={video.views}
                        videoFile={video.file}
                        videoTitle={video.title}
                        videoImage={video.image}
                        videoOwner={video.owner}
                        videoDate={video.created_at}
                      />
                    )
                  })}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default UserChannel
