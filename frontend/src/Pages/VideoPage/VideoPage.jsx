
import s from './VideoPage.module.scss'
import {Header} from "../../components/Header/Header";
import {useSelector} from "react-redux";
import {useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import doRequest from "../../components/doRequest/doRequest";
import axios from "axios";

const reDate = (date) => {
    let fullDate = new Date(date)
    let month = fullDate.getMonth()+1
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
const VideoPage = ()=>{
    const { videoId } = useParams()
    console.log(videoId)

    const [data, setData] = useState({})

    useEffect(()=>{
        const getVideo = async ()=> {
            const response = await fetch(`/api/v1/video/${videoId}/`)
            const data = await response.json()
            setData(data)
        }

        getVideo()
    },[])





    return (
    <>
        <Header/>
        <div className={s.block__video_wrapper}>
            <video className={s.block__video_player}
                   src={`/stream/${videoId}/`}
                   poster="assets/poster_for_video/poster_inst.png" controls></video>

            <div className={s.block__video_info}>
                <div className={s.block__info_container}>
                    <h1 className={s.title__for_video}>{}</h1>
                    <div className={s.userChanel_info}>
                        <div className={s.wrapper__logo_name}>
                            { data.owner.logo ? data.owner.logo :

                                <svg enableBackground="new 0 0 50 50" height="40px" version="1.1" viewBox="0 0 50 50"
                                  width="40px">
                                <circle cx="25" cy="25" fill="none" r="24" stroke="white" strokeLinecap="round"
                                        strokeMiterlimit="10" strokeWidth="2"/>
                                <rect fill="none" height="40" width="40"/>
                                <path
                                    d="M29.933,35.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z"
                                    fill="none" stroke="white" strokeLinecap="round" strokeMiterlimit="10"
                                    strokeWidth="2"/>
                            </svg>}
                                <div className={s.name__chanel_subscribe}>
                                    <h2 className={s.name__chanel_subscribe_title}>{data.owner.name}</h2>
                                    <p className={s.quantity__subscribe}>{data.owner.subscribers}</p>
                                </div>
                        </div>

                        <div className={s.channel__sub}>
                            <button className={s.btn__subscribe}>Подписаться</button>

                            <button className={s.btn__like}>
                                <div className={s.wrapper__like_quantity}>
                                    <svg viewBox="0 0 512 512" fill="white" width="24px" height="24px">
                                        <g>
                                            <path
                                                d="M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z"/>
                                            <path
                                                d="M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z"/>
                                        </g>
                                    </svg>
                                    <span className={s.quantity__likes}>{data.likes}</span>
                                </div>
                            </button>
                            <button className={s.btn__dislike}>
                                <svg viewBox="0 0 512 512" fill="white" width="24px" height="24px">
                                    <g>
                                        <path
                                            d="M242.28,427.39a43.85,43.85,0,0,1-13.1-2c-18.22-5.69-29.87-21.64-29.69-40.62.16-17.35-3.15-32.5-9.83-45-8.19-15.33-21.83-27.13-40.55-35.08A15,15,0,1,1,160.83,277c45.4,19.26,69.14,56.6,68.65,108a12.28,12.28,0,0,0,22.33,7c28.34-41.71,3.47-87.63,3.22-88.09a15,15,0,0,1,13.12-22.27H409.79a14.22,14.22,0,0,0,0-28.43H389.34a15,15,0,1,1,0-30,14.2,14.2,0,0,0,14.21-14.21,14.23,14.23,0,0,0-14.21-14.21H368.9a15,15,0,0,1,0-30,14.21,14.21,0,1,0,0-28.42H348.45a15,15,0,0,1,0-30,14.21,14.21,0,1,0,0-28.42H261.8a111.69,111.69,0,0,0-39.07,7l-67.5,25.07A15,15,0,0,1,144.78,82l67.5-25.07A141.5,141.5,0,0,1,261.8,48h86.65a44.25,44.25,0,0,1,40,63,44.27,44.27,0,0,1,20.45,58.43,44.27,44.27,0,0,1,20.44,58.42,44.21,44.21,0,0,1-19.59,83.84H290.11c6.77,23.11,11.23,60.85-13.48,97.22A41.21,41.21,0,0,1,242.28,427.39Z"/>
                                        <path
                                            d="M155,305.85H69.13a15,15,0,0,1-15-15V85.21a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V290.85A15,15,0,0,1,155,305.85Zm-70.84-30H140V100.21H84.13Z"/>
                                    </g>
                                </svg>
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
                            <br/>
                            я хороший классный дружелюбный frontend разработчик начинающий

                        </div>

                    </div>
                </div>
                <div className={s.block__other_video}>
                    <ul className={s.other__video_list}>

                        <li className={s.other__video_item}>
                            <video className={s.other__video}
                                   src='assets/mixkit-small-mountain-covered-with-vegetation-and-mist-44262.mp4'
                                   poster="assets/poster_for_video/poster_inst.png" controls></video>
                            <div className={s.wrapper__chanel_other}>
                                <p className={s.chanel__title_other}>youtube_clone</p>
                                <h1 className={s.chanel__name_other}>ladic</h1>
                                <p className={s.chanel__description_other}>32тыс 6 месяцев назад</p>
                            </div>

                        </li>


                        <li className={s.other__video_item}>

                            <video className={s.other__video}
                                   src='assets/mixkit-small-mountain-covered-with-vegetation-and-mist-44262.mp4'
                                   poster="assets/poster_for_video/poster_inst.png" controls></video>
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
</>
    )
}

export default VideoPage