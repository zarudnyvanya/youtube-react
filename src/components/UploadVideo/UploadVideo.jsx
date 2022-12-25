import { useDispatch, useSelector } from 'react-redux'
import { setVideoUpload, setIsUploaded } from './../../redux/slices/videoUploadSlice'

import s from './UploadVideo.module.scss'
import { useEffect } from 'react'

const UploadVideo = () => {
  const dispatch = useDispatch()
  const isOpenVideoUpload = useSelector((state) => state.videoUpload.isOpenVideoUpload)
  const isUploaded = useSelector((state) => state.videoUpload.isUploaded)

  const closeVideoUpload = () => {
    dispatch(setVideoUpload(!isOpenVideoUpload))
  }

  const handleChangeFile = (event) => {
    const file = event.target.files[0]
    console.log(file)
    dispatch(setIsUploaded(true))
  }

  useEffect(() => {
    if (isUploaded) {
    }
  }, [isUploaded])

  return (
    <div className={s.overlay}>
      <div className={s.videoUpload}>
        <div className={s.video__header}>
          <div className={s.video__title}>Загрузка видео</div>
          <div onClick={closeVideoUpload} className={s.video__close}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </div>
        </div>

        <div className={s.video__main}>
          <div className={s.video__text}>
            Перетащите файлы сюда или нажмите кнопку ниже, чтобы выбрать их на компьютере.
          </div>
          <input onChange={handleChangeFile} type="file" accept=".mp4" />
        </div>

        <div className={s.video__footer}>
          Добавляя видео, вы принимаете Условия использования и правила сообщества Нашего ахеренного
          приложения. Также вы обязуетесь соблюдать авторские права и конфиденциальность данных
          других пользователей
        </div>
      </div>
    </div>
  )
}

export default UploadVideo
