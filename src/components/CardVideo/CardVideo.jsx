import s from './CardVideo.module.scss';

export const CardVideo = ({ videoTitle, videoImage }) => {
  return (
    <div className={s.video__item}>
      <div className={s.video__block}>
        <video src="#" poster={videoImage}></video>
      </div>
      <p className={s.desc}>{videoTitle}</p>
    </div>
  );
};
