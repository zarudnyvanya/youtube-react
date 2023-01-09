import { useDispatch, useSelector } from 'react-redux'

import {
  setIsOpen,
  setVideoUpload,
  setVideoFile,
  setButtonDisabled,
  setPosterIsUploaded,
} from './../../redux/slices/videoUploadSlice'

import s from './UploadVideo.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import FromatVideo from './FormatVideo'
import {HOST} from '../HOST/HOST'
const UploadVideo = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.videoUpload.isOpen)
  const videoFile = useSelector((state) => state.videoUpload.videoFile)
  const isUploaded = useSelector((state) => state.videoUpload.isUploaded)

  const userToken = useSelector((state) => state.user.userToken)

  const [videoName, setVideoName] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [poster, setPoster] = useState(null)

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
    dispatch(setButtonDisabled(true))

    const formData = new FormData()

    formData.append('file', videoFile)
    formData.append('title', videoName)
    formData.append('description', videoDescription || 'Без описания')

    if (poster) {
      formData.append('image', poster)
    }

    const res = await fetch(HOST+'/api/v1/video/', {
      method: 'POST',
      headers: {
        Authorization: `token ${userToken}`,
      },
      body: formData,
    })

    const data = await res.json()

    window.location.href = '/'
  }

  const handleChangeFile = async (event) => {
    const file = event.target.files[0]
    setVideoName(file.name)

    dispatch(setVideoFile(file))
    dispatch(setVideoUpload(true))
  }

  const handlePoster = async (event) => {
    const poster = event.target.files[0]

    if (poster.name) {
      setPoster(poster)
      dispatch(setPosterIsUploaded(true))
    }
  }

  return (
    <div className={s.overlay}>
      <div className={s.videoUpload}>
        {!isUploaded && (
          <>
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
                <svg  viewBox="0 0 24 24">
                  <path d="M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z" />
                </svg>
                <div className={s.video__text}>
                  Перетащите файлы сюда или нажмите кнопку ниже: чтобы выбрать их на компьютере.
                </div>
                <input
                  onChange={handleChangeFile}
                  type="file"
                  accept=".mp4,.mov,.Mov,.MOV,.mkv"
                  encType="multipart/form-data"
                  id="file"
                  className={s.input__file}
                />
                <span className={s.btn__input}>Выбрать файлы</span>
              </label>
            </div>

            <div className={s.video__footer}>
              Добавляя видео, вы принимаете Условия использования и правила сообщества Нашего
              ахеренного приложения. <br />
              Также вы обязуетесь соблюдать авторские права и конфиденциальность данных других
              пользователей
            </div>
          </>
        )}

        {isUploaded && (
          <FromatVideo
            videoName={videoName}
            videoDescription={videoDescription}
            onVideoName={onVideoName}
            onVideoDescription={onVideoDescription}
            onSendVideo={onSendVideo}
            handlePoster={handlePoster}
            poster={poster}
          />
        )}
      </div>
    </div>
  )
}

export default UploadVideo
