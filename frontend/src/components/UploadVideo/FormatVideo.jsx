import s from './UploadVideo.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { setIsOpen } from '../../redux/slices/videoUploadSlice'

const FromatVideo = ({
  videoName,
  videoDescription,
  onVideoName,
  onVideoDescription,
  onSendVideo,
  handlePoster,
  poster,
}) => {
  const dispatch = useDispatch()
  const buttonDisabled = useSelector((state) => state.videoUpload.buttonDisabled)
  const posterIsUploaded = useSelector((state) => state.videoUpload.posterIsUploaded)

  const onClose = () => {
    dispatch(setIsOpen(false))
  }

  return (
    <div className={s.formatVideo}>
      <div className={s.videoHeader}>
        <span onClick={onClose} className={s.videoFormatClose}>
          ✖
        </span>
      </div>
      <div className={s.videoNameContent}>
        <label className={s.videoNameInfo} htmlFor="">
          Информация
        </label>
        <input
          className={s.videoName}
          type="text"
          value={videoName}
          onChange={(event) => onVideoName(event)}
        />
      </div>
      <div className={s.videoDescriptionContent}>
        <label htmlFor="" className={s.videoDescriptionInfo}>
          Описание видео:
        </label>
        <input
          className={s.videoDescription}
          type="text"
          value={videoDescription}
          onChange={(event) => onVideoDescription(event)}
        />
      </div>
      <div className={s.selectContainer}>
        {posterIsUploaded ? (
          <p>{poster && poster.name}</p>
        ) : (
          <>
            <label htmlFor="" className={s.selectFile}>
              Выберите файл
            </label>
            <input
              className={s.addPoster}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handlePoster}
            />
          </>
        )}
      </div>
      <button className={s.sendBtn} onClick={onSendVideo} disabled={buttonDisabled}>
        Опубликовать
      </button>
    </div>
  )
}

export default FromatVideo
