import { useDispatch, useSelector } from 'react-redux'

import { setIsOpen, setVideoUpload, setVideoFile } from './../../redux/slices/videoUploadSlice'

import s from './UploadVideo.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'

const UploadVideo = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.videoUpload.isOpen)
  const videoFile = useSelector((state) => state.videoUpload.videoFile)
  const isUploaded = useSelector((state) => state.videoUpload.isUploaded)

  const userToken = useSelector((state) => state.user.userToken)

  const [videoName, setVideoName] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const [dataForm, setDataForm] = useState()

  // useEffect(() => {
  //   const formData = new FormData()
  //
  //   if (videoFile) {
  //     formData.append('file', videoFile)
  //     formData.append('title', videoName)
  //     formData.append('description', 'Описание отсутствует')
  //
  //     setDataForm(formData)
  //     dispatch(setVideoUpload(true))
  //   }
  //  }, [videoFile])

  const closeVideoUpload = () => {
    dispatch(setIsOpen(!isOpen))
  }

  const onVideoName = (event) => {
    setVideoName(event.target.value)
  }

  const onVideoDescription = (event) => {
    setVideoDescription(event.target.value)
  }

  const onSendVideo = async (event) => {
    event.preventDefault()
    setButtonDisabled(true)

    const formData = new FormData()

    formData.append('file', videoFile)
    formData.append('title', videoName)
    formData.append('description', videoDescription || 'Без описания')

    const res = await fetch('/api/v1/video/', {
      method: 'POST',
      headers: {
        Authorization: `token ${userToken}`,
      },
      body: formData,
    })

    const data = await res.json()

    window.location.href = '/'

    console.log(data)
  }

  const handleChangeFile = async (event) => {
    const file = event.target.files[0]
    setVideoName(file.name)

    dispatch(setVideoFile(file))
    dispatch(setVideoUpload(true))
  }

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

          {isUploaded && (
            <>
              <div>
                <label htmlFor="">Название видео:</label>
                <input type="text" value={videoName} onChange={(event) => onVideoName(event)} />
              </div>
              <div>
                <label htmlFor="">Описание видео:</label>
                <input
                  type="text"
                  value={videoDescription}
                  onChange={(event) => onVideoDescription(event)}
                />
              </div>
              <button onClick={onSendVideo} disabled={buttonDisabled}>
                onSendVideo
              </button>
            </>
          )}
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
