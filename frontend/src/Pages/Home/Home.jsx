import { CardVideo } from '../../components/CardVideo/CardVideo'

import s from './Home.module.scss'
import UserSettings from '../../components/UserSettings/UserSettings'
import { User } from '../../components/User/User'
import { useSelector } from 'react-redux'
export const Home = ({ videos, searchValue }) => {
  const isAuth = useSelector((state) => state.user.isAuth)

  return (
    <div className={s.video__content}>
      <div className={s.video__wrapper}>
        <div className={s.video__list}>
          {isAuth ? (
            videos
              .filter((item) => {
                return item.title.toLowerCase().includes(searchValue.toLowerCase())
              })
              .map((video) => {
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
                    videoDuration={video.duration}
                  />
                )
              })
          ) : (
            <h1 style={{ fontSize: '30px', position: 'absolute', left: '38%' }}>
              Войдите или авторизируйтесь
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}
