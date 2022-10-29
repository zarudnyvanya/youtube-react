import { CardVideo } from '../../components/CardVideo/CardVideo';

import s from './Home.module.scss';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 2,
    title: 'Video 2',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 3,
    title: 'Video 3',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 4,
    title: 'Video 4',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 5,
    title: 'Video 5',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 6,
    title: 'Video 6',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 7,
    title: 'Video 7',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
  {
    id: 8,
    title: 'Video 8',
    image: 'assets/poster_for_video/poster_youtube.png',
    owner: {
      id: 2,
      username: 'vlad',
      logo: 'assets/svg__header/user.png',
    },
  },
];

export const Home = () => {
  return (
    <div className={s.video__content}>
      <div className={s.video__wrapper}>
        <div className={s.video__list}>
          {videos.map((video) => {
            return (
              <CardVideo
                key={video.id}
                videoTitle={video.title}
                videoImage={video.image}
                videoOwner={video.owner}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
