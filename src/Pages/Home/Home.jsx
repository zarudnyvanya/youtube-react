import { CardVideo } from '../../components/CardVideo/CardVideo'

import s from './Home.module.scss'

export const Home = ({ videos, searchValue, navIsOpen }) => {
  return (
    <div className={s.video__content}>
      <div className={s.video__wrapper}>
        <div className={navIsOpen ? s.video__list : s.video__list_video_list_is_wide}>
          {videos
            .filter((item) => {
              return item.title.toLowerCase().includes(searchValue.toLowerCase())
            })
            .map((video) => {
              return (
                <CardVideo
                  key={video.id}
                  navIsOpen={navIsOpen}
                  videoId={video.id}
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
    </div>
  )
}
