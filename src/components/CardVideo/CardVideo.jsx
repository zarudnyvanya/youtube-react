import s from './CardVideo.module.scss'
import {useRef,useState} from 'react'

export const CardVideo = ({
                              videoId,
                              videoFile,
                              videoTitle,
                              videoImage,
                              videoOwner,
                              videoDate,
                              navIsOpen
                          }) => {
    console.log('videoFile', videoFile)
    const [videoDuration, setVideoDuration] = useState(0);

    function reDuration(secs)
    {
        const hours = Math.floor(secs / (60 * 60));

        const divisorForMinutes = secs % (60 * 60);
        const minutes = Math.floor(divisorForMinutes / 60);

        const divisorForSeconds = divisorForMinutes % 60;
        const seconds = Math.ceil(divisorForSeconds);


        let newMinutes = minutes
        let newSeconds = seconds


        if(minutes<10) {
            newMinutes = '0' + minutes
        }
        if(seconds<10){
            newSeconds = '0' + seconds
        }
        if(hours===0){

            return minutes + ':' + newSeconds
        }
        return '' + hours + ':' + newMinutes + ':' + newSeconds

    }


    const videoEl = useRef(null)
    const handleLoadedMetadata = () => {
        const video = videoEl.current;
        if (video) {
            //Math.floor(duration / 60) + ':' + (m < 10 ? '0' : '') + m
            setVideoDuration(reDuration(video.duration))
        }

    };


    const reDate = (date) => {

        let reDate = new Date(date)
        let dateSeconds = (Date.now() - reDate) / 1000
        if (dateSeconds < 60) {
            return Math.floor(dateSeconds) + ' seconds ago'
        }

        let dateMinutes = dateSeconds / 60

        if (dateMinutes < 60) {
            return Math.floor(dateMinutes) + ' minutes ago'
        }

        let dateHour = dateMinutes / 60

        if (dateHour < 24) {
            return Math.floor(dateHour) + ' hours ago'
        }

        let dateDay = dateHour / 24

        if (dateDay < 30) {
            return Math.floor(dateDay) + ' days ago'
        }

        let dateMonth = dateDay / 30

        if (dateMonth < 12) {
            return Math.floor(dateMonth) + ' months ago'
        }

        let dateYear = dateMonth / 12

        return Math.floor(dateYear) + ' years ago'


    }




    return (
        <div className={navIsOpen ? s.video__item : s.video__item_video_item_is_wide}>
            <div className={s.block__video}>
                <video

                   src={"http://127.0.0.1:8000/stream/" + videoId + "/"}
                   poster={videoImage}
                   ref={videoEl}
                   onLoadedMetadata={handleLoadedMetadata}

                />
                <span>{videoDuration}</span>
            </div>
            <div className={s.video__info}>
                <div className={s.channel}>
                    <a href="#" className={s.channel__link}>
                        <img src={videoOwner.logo} alt="profile"/>
                    </a>
                </div>
                <div className={s.description}>
                    <p>{videoTitle}</p>
                    <span>
                        {videoOwner.name} <br/> 15K Views • {reDate(videoDate)}
                    </span>
                </div>
            </div>
        </div>
    )

}

