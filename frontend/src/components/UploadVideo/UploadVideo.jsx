import { useDispatch, useSelector } from 'react-redux'
import { setVideoUpload, setIsUploaded } from './../../redux/slices/videoUploadSlice'

import s from './UploadVideo.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'

const UploadVideo = () => {
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.user.userToken)
  const isOpenVideoUpload = useSelector((state) => state.videoUpload.isOpenVideoUpload)
  const isUploaded = useSelector((state) => state.videoUpload.isUploaded)

  const [videoFile, setVideoFile] = useState(null)

  const closeVideoUpload = () => {
    dispatch(setVideoUpload(!isOpenVideoUpload))
  }

  const handleChangeFile = async (event) => {
    const file = event.target.files[0]
    dispatch(setIsUploaded(true))
    console.log(file)

    const formData = new FormData()

    formData.append('file', file)
    formData.append('file', file.name)

    formData.append('title', file.name)
    formData.append('description', 'Описание отсутствует')

    const res = await fetch('api/v1/video/', {
      method: 'POST',
      headers: {
        Authorization: `token ${userToken}`,
      },
      body: formData,
    })

    // const data = await res.json()

    // console.log(data)
  }

  // useEffect(() => {
  //   // if (isUploaded) {
  //   //   const formData = new FormData()
  //   //   formData.append('video', )
  //   // }
  // }, [isUploaded])

  return (
    <div className={s.overlay}>
      <div className={s.videoUpload}>
        <div className={s.video__header}>
          <div className={s.video__title}>Загрузка видео</div>
          <div onClick={closeVideoUpload} className={s.video__close}>
            <svg enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100">
              <polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 " />
            </svg>
          </div>
        </div>

        <div className={s.video__main}>
          <label htmlFor="file" className={s.block__input}>
            <svg height="24" viewBox="0 0 24 24" width="24">
              <path d="M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z" />
            </svg>
            <div className={s.video__text}>
              Перетащите файлы сюда или нажмите кнопку ниже: чтобы выбрать их на компьютере.
            </div>
            <input
              onChange={handleChangeFile}
              type="file"
              accept=".mp4"
              encType="multipart/form-data"
              id="file"
              className={s.input__file}
            />
            <span className={s.btn__input}>Выбрать файлы</span>
          </label>
        </div>

        <div className={s.video__footer}>
          Добавляя видео, вы принимаете Условия использования и правила сообщества Нашего ахеренного
          приложения. <br />
          Также вы обязуетесь соблюдать авторские права и конфиденциальность данных других
          пользователей
        </div>
      </div>
    </div>
  )
}

export default UploadVideo
