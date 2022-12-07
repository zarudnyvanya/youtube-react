import s from './CardVideo.module.scss'

export const CardVideo = ({ videoTitle, videoImage, videoOwner, videoDate,navIsOpen }) => {
  console.log(videoOwner.banner)
  return (
    <div className={ navIsOpen ? s.video__item : s.video__item_video_item_is_wide }>
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
            {videoOwner.name} <br /> 15K Views .{videoDate}
          </span>
        </div>
      </div>
    </div>
  )
}
