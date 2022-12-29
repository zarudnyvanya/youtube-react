import s from './VideoPage.module.scss'
import { Header } from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import doRequest from '../../components/doRequest/doRequest'
import axios from 'axios'

const reDate = (date) => {
  let fullDate = new Date(date)
  let month = fullDate.getMonth() + 1
  let day = fullDate.getDate()
  let year = fullDate.getFullYear()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }

  return `${day}.${month}.${year}`
}

const VideoPage = () => {
  const { videoId } = useParams()

  const userToken = useSelector(state=>state.user.userToken)

  const [disLikeIsActive, setDisLikeIsActive] = useState(false);

  const [data, setData] = useState()

  const [isLoading, setIsLoading] = useState(false)

  const [isSubscribe,setIsSubscribe] = useState(false)

  const [isLike,setIsLike] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    const getVideo = async () => {
      console.log('zapros')
      const response = await fetch(`/api/v1/video/${videoId}/`)
      const data = await response.json()
      setData(data)

      setIsLoading(true)
    }

    getVideo()
  }, [])

  useEffect(() => {

    const getLikes = async () => {
      const response = await doRequest(`/api/v1/video/${videoId}/like/`, userToken)
      const status = await response.json()
      setIsLike(status.like)
      setIsSubscribe(status.subscribe)

    }
    if(userToken) {
      getLikes()
    }
  }, [userToken]);



const handlerLike = ()=>{

  if(isLike){
    setIsLike(false)
    doRequest(`/api/v1/video/${videoId}/like/`,userToken,'DELETE')

  }else{
    setIsLike(true)
    doRequest(`/api/v1/video/${videoId}/like/`,userToken,'POST')

  }

}

  const handlerSubscribe = ()=>{
    if(isSubscribe){
      setIsSubscribe(false)
      doRequest(`/api/v1/channel/${data.owner.pk}/subscribe/`,userToken,'DELETE')
    }else{
      setIsSubscribe(true)
      doRequest(`/api/v1/channel/${data.owner.pk}/subscribe/`,userToken,'POST')
    }

  }





  return (
    <>
      <Header />
      {isLoading && (
        <div className={s.block__video_wrapper}>
          <video
            className={s.block__video_player}
            src={`/stream/${videoId}/`}
            poster="assets/poster_for_video/poster_inst.png"
            autoPlay={true}
            controls></video>

          <div className={s.block__video_info}>
            <div className={s.block__info_container}>
              <h1 className={s.title__for_video}>{}</h1>
              <div className={s.userChanel_info}>
                <div className={s.wrapper__logo_name}>
                  {data.owner.logo ? (
                    data.owner.logo
                  ) : (
                    <svg
                      enableBackground="new 0 0 50 50"
                      height="40px"
                      version="1.1"
                      viewBox="0 0 50 50"
                      width="40px">
                      <circle
                        cx="25"
                        cy="25"
                        fill="none"
                        r="24"
                        stroke="white"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <rect fill="none" height="40" width="40" />
                      <path
                        d="M29.933,35.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z"
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  <div className={s.name__chanel_subscribe}>
                    <h2 className={s.name__chanel_subscribe_title}>{data && data.owner.name}</h2>
                    <p className={s.quantity__subscribe}>{data && data.owner.subscribers}</p>
                  </div>
                </div>

                <div className={s.channel__sub}>
                  <button
                      className={s.btn__subscribe}
                      onClick={()=>handlerSubscribe()}
                      style={isSubscribe ? {backgroundColor: "gray"} : {backgroundColor: 'red'}}
                  >
                    {isSubscribe ? 'Отписаться' : 'Подписаться'}</button>

                  <button className={s.btn__like} onClick={()=>handlerLike()}>
                    <div className={s.wrapper__like_quantity}>
                      <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" width='24px' height='24px' stroke='white' fill={isLike? 'white': 'none'} ><path d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13  c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002  c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z"/><path d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z   M5,25.5c-0.828,0-1.5-0.672-1.5-1.5c0-0.828,0.672-1.5,1.5-1.5c0.828,0,1.5,0.672,1.5,1.5C6.5,24.828,5.828,25.5,5,25.5z" /></svg>
                      <span className={s.quantity__likes}>{data.likes}</span>
                    </div>
                  </button>
                  <button className={s.btn__dislike} onClick={()=>setDisLikeIsActive(!disLikeIsActive)}>
                    <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" width='24px' height='24px' stroke='white'
                         fill={disLikeIsActive? 'white': 'none'}><path d="M2.156,14.901l2.489-8.725C5.012,4.895,6.197,4,7.528,4h13.473C21.554,4,22,4.448,22,5v14  c0,0.215-0.068,0.425-0.197,0.597l-5.392,7.24C15.813,27.586,14.951,28,14.027,28c-1.669,0-3.026-1.357-3.026-3.026V20H5.999  c-1.265,0-2.427-0.579-3.188-1.589C2.047,17.399,1.809,16.12,2.156,14.901z"/><path d="M25.001,20h4C29.554,20,30,19.552,30,19V5c0-0.552-0.446-1-0.999-1h-4c-0.553,0-1,0.448-1,1v14  C24.001,19.552,24.448,20,25.001,20z M27.001,6.5c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.672-1.5-1.5  C25.501,7.172,26.173,6.5,27.001,6.5z" /></svg>
                  </button>
                </div>
              </div>

              <div className={s.block__description}>
                <div className={s.block__description_header}>
                  <p className={s.views}>{data.views}</p>
                  <p className={s.realise__date}>{reDate(data.created_at)}</p>
                </div>

                <div className={s.video__description}>
                  {data.description}
                  <br />я хороший классный дружелюбный frontend разработчик начинающий
                </div>
              </div>
            </div>
            <div className={s.block__other_video}>
              <ul className={s.other__video_list}>
                <li className={s.other__video_item}>
                  <video
                    className={s.other__video}
                    src="assets/mixkit-small-mountain-covered-with-vegetation-and-mist-44262.mp4"
                    poster="assets/poster_for_video/poster_inst.png"
                    controls></video>
                  <div className={s.wrapper__chanel_other}>
                    <p className={s.chanel__title_other}>youtube_clone</p>
                    <h1 className={s.chanel__name_other}>ladic</h1>
                    <p className={s.chanel__description_other}>32тыс 6 месяцев назад</p>
                  </div>
                </li>

                <li className={s.other__video_item}>
                  <video
                    className={s.other__video}
                    src="assets/mixkit-small-mountain-covered-with-vegetation-and-mist-44262.mp4"
                    poster="assets/poster_for_video/poster_inst.png"
                    controls></video>
                  <div className={s.wrapper__chanel_other}>
                    <p className={s.chanel__title_other}>youtube_clone</p>
                    <h1 className={s.chanel__name_other}>ladic</h1>
                    <p className={s.chanel__description_other}>32тыс 6 месяцев назад</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoPage
