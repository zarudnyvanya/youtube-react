import s from "./OtherVideos.module.scss"
import {reDate, reDuration, showViews} from "../../utils/api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import doRequest from "../doRequest/doRequest";
import {HOST} from '../HOST/HOST'
const OtherVideos = () => {
    const [videos, setVideos] = useState([])

    const userToken = useSelector(state => state.user.userToken)
    useEffect(() => {

        const getOtherVideos = async () => {
            let response;
            if (userToken) {
                response = await doRequest('/api/v1/video/new/', userToken)
            } else {
                response = await fetch(HOST+`/api/v1/video/`)
            }
            const data = await response.json()
            setVideos(data)

        }
        getOtherVideos()

    }, []);

    console.log(videos)

    return (
        <div className={s.block__other_video}>
            <ul className={s.other__video_list}>

                {videos.map((obj) => {
                    return (
                        <Link to={`/videoPage/${obj.id}`} key={obj.id}>
                            <li className={s.other__video_item}>
                                <div className={s.wrapper__other_video}>
                                    <video
                                        className={s.other__video}
                                        poster={obj.image}></video>
                                    <span>{reDuration(obj.duration)}</span>
                                </div>
                                <div className={s.wrapper__chanel_other}>
                                    <p className={s.chanel__title_other}>{obj.title}</p>
                                    <h1 className={s.chanel__name_other}>{obj.owner.name}</h1>
                                    <p className={s.chanel__description_other}>
                                        {showViews(obj.views)} • {reDate(obj.created_at)}</p>
                                </div>
                            </li>
                        </Link>


                    )


                })}


            </ul>
        </div>


    )
}


    export default OtherVideos