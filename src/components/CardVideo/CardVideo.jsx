import s from './CardVideo.module.scss';

export const CardVideo = ({ videoTitle, videoImage, videoOwner }) => {
  return (
    <div className={s.video__item}>
      <div className={s.block__video}>
        <video src="#" poster={videoImage}></video>
        <span>23:09</span>
      </div>
      <div className={s.video__info}>
        <div className={s.channel}>
          <a href="#" className={s.channel__link}>
            <img src={videoOwner.logo} alt="profile" />
          </a>
        </div>
        <div className={s.description}>
          <p>{videoTitle}</p>
          <span>
            {videoOwner.username} <br /> 15K Views .1 week ago
          </span>
        </div>
      </div>
    </div>
  );
};
