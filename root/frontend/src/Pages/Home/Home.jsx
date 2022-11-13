import { CardVideo } from '../../components/CardVideo/CardVideo';

import s from './Home.module.scss';

export const Home = ({ videos, onChangeFiltered, searchValue, setSearchValue }) => {
  return (
    <div className={s.video__content}>
      <div className={s.video__wrapper}>
        <div className={s.video__list}>
          {videos
            .filter((item) => {
              return item.title.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((video) => {
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
