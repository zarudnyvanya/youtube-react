import s from './CardVideo.module.scss'
import {useRef, useState} from 'react'
import userLogo from '../../assets/svg__header/user.png'
import {Link} from "react-router-dom";
import {showViews, reDate, reDuration} from "../../utils/api";

export const CardVideo = ({
                              videoId,
                              videoView,
                              videoFile,
                              videoTitle,
                              videoImage,
                              videoOwner,
                              videoDate,
                              videoDuration
                          }) => {


    return (
        <div className={s.video__item}>
            <div className={s.block__video}>
                <Link to={`/videoPage/${videoId}`}>
                    <video
                        className={s.block__video__poster}
                        poster={videoImage}
                    />
                </Link>
                <span>{reDuration(videoDuration)}</span>
            </div>
            <div className={s.video__info}>
                <div className={s.channel}>
                    <a href="#" className={s.channel__link}>
                        <img
                            src={videoOwner.logo ? videoOwner.logo : userLogo}
                            alt="profile"
                        />
                    </a>
                </div>
                <div className={s.description}>
                    <p title={videoTitle}>{videoTitle}</p>
                    <span>
                        {videoOwner.name}
                        <br/>
                        {showViews(videoView)} • {reDate(videoDate)}
                    </span>
                </div>
            </div>
        </div>
    )
}
