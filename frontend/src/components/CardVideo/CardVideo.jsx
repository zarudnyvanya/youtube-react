import s from './CardVideo.module.scss'
import {Link} from "react-router-dom";
import {reDate, reDuration, showViews} from "../../utils/api";

import DeleteVideo from "../DeleteVideo/DeleteVideo";
import {useState, useEffect} from "react";
import doRequest from "../doRequest/doRequest";
// import {HOST} from '../HOST/HOST'

export const CardVideo = ({
	                          videoId,
	                          videoView,
	                          videoFile,
	                          videoTitle,
	                          videoImage,
	                          videoOwner,
	                          videoDate,
	                          videoDuration,
	                          edit,
	                          setEdit
                          }) => {
	
	
	
	
	const [isOpen, setIsOpen] = useState(false);
	
	
	return (
		<>
			{
				isOpen &&
				<DeleteVideo
					setIsOpen={setIsOpen}
					videoId={videoId}
				/>
			}
			
			<div className={s.video__item}>
				<div className={s.block__video}>
					<Link to={`/videoPage/${videoId}`}>
						<video
							className={s.block__video__poster}
							poster={videoImage}
						/>
					</Link>
					
					{edit && <p className={s.video__edit} onClick={() => setIsOpen(!isOpen)}>
						<svg version="1.1" viewBox="0 0 512 512">
							<path
								d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
						</svg>
					</p>}
					<span>{reDuration(videoDuration)}</span>
				</div>
				<div className={s.video__info}>
					<div className={s.channel}>
						<Link to={`/channel/${videoOwner.pk}`} className={s.channel__link}>
							{
								videoOwner.logo ?
									
									<img
										src={videoOwner.logo}
										alt="profile"
									/> :
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
										<rect fill="none" height="40" width="40"/>
										<path
											d="M29.933,35.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z"
											fill="none"
											stroke="white"
											strokeLinecap="round"
											strokeMiterlimit="10"
											strokeWidth="2"
										/>
									</svg>
							}
						</Link>
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
		</>
	)
}
