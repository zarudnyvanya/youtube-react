import {setUserVideos} from '../../redux/slices/userDataSlice'
import {useDispatch, useSelector} from 'react-redux'

import {useEffect, useState} from 'react'

import {Navigation} from './../../components/Navigation/Navigation'
import {Header} from './../../components/Header/Header'
import {Popup} from '../../components/Popup/Popup'
import Skeleton from './../../components/CardVideo/CardSkeleton'

import doRequest from './../../components/doRequest/doRequest'

import s from './UserChannel.module.scss'
import {CardVideo} from '../../components/CardVideo/CardVideo'


import {useParams} from "react-router-dom";
import {HOST} from '../../components/HOST/HOST'

const options = ['Главная', 'Плейлисты', 'Каналы', 'О канале']

const UserChannel = () => {
	const dispatch = useDispatch()
	
	
	const userToken = useSelector((state) => state.user.userToken)
	const userChannel = useSelector((state) => state.user.userChannel)
	const userVideos = useSelector((state) => state.user.userVideos)
	const popup = useSelector((state) => state.userPopup.popup)
	
	const [isLoading, setIsLoading] = useState(true)
	const [value, setValue] = useState(0)
	
	const [currentChannel, setCurrentChannel] = useState({});
	
	const [isSubscribe, setIsSubscribe] = useState(false)
	const [bellIsActive, setBellIsActive] = useState(false);
	
	const [edit, setEdit] = useState(false);
	
	const {pk} = useParams()
	
	useEffect(() => {
		setEdit(false)
		setIsLoading(true)
		const url = `/api/v1/channel/${pk}/`
		
		const getUserVideos = async () => {
			const response = await doRequest(url, userToken)
			const data = await response.json()
			
			// dispatch(setUserChannel(data))
			setCurrentChannel(data)
			setIsLoading(false)
		}
		
		if (userToken) {
			getUserVideos()
		}
	}, [pk, userToken])
	
	
	
	useEffect(() => {
		
		const getVideos = async () => {
			const response = await fetch(HOST+`/api/v1/video/${pk}/channel/`)
			const data = await response.json()
			dispatch(setUserVideos(data))
		}
		if (pk) {
			getVideos()
			setIsLoading(false)
		}
		// fetch(`/api/v1/video/${pk}/channel/`)
		// 	.then((res) => res.json())
		// 	.then((data) => dispatch(setUserVideos(data)))
		
		
	}, [pk])
	
	const onOption = (index) => {
		setValue(index)
	}
	
	useEffect(() => {
		
		const getSubscribe = async () => {
			const response = await doRequest(`/api/v1/channel/${pk}/subscribe/`, userToken)
			const status = await response.json()
			setIsSubscribe(status.subscribe)
			setBellIsActive(status.mail)
			
		}
		if (userToken) {
			getSubscribe()
		}
	}, [userToken]);
	
	const handlerSubscribe = () => {
		if (isSubscribe) {
			setIsSubscribe(false)
			doRequest(`/api/v1/channel/${pk}/subscribe/`, userToken, 'DELETE')
		} else {
			setIsSubscribe(true)
			doRequest(`/api/v1/channel/${pk}/subscribe/`, userToken, 'POST')
		}
		
	}
	const handlerBell = () => {
		if (bellIsActive) {
			setBellIsActive(false)
			doRequest(`/api/v1/channel/${pk}/mail/`, userToken, 'DELETE')
		} else {
			setBellIsActive(true)
			doRequest(`/api/v1/channel/${pk}/mail/`, userToken, 'POST')
		}
		
	}
	
	
	
	return (
		<>
			{popup && <Popup/>}
			<Header/>
			<div className={s.container}>
				<Navigation/>
				<main className={s.main__content}>
					<div className={s.user__chanel}>
						<div className={s.header__chanel}>
							<div className={s.header__leftpart__chanel}>
								{
									currentChannel.logo ?
										<img
											src={currentChannel.logo}
											alt="logo"
											className={s.logo__chanel}/>
										:
										<svg
											enableBackground="new 0 0 50 50"
											height="80px"
											version="1.1"
											viewBox="0 0 50 50"
											width="80px">
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
								
								<div className={s.name__sub__chanel}>
									<h1>{currentChannel.name}</h1>
									<p className={s.subscribers}>{currentChannel.subscribers} подписчик</p>
								</div>
							</div>
							
							{
								pk == userChannel.pk ?
									<div className={s.manager__wrapper}
									     onClick={()=>setEdit(!edit)}
									     style={!edit ? {backgroundColor: '#3ea6ff'} : {backgroundColor: 'orange'}}>
										<span className={s.video__management}>
											{!edit ? 'Управление видео' : 'Закрыть управление'}
										</span>
									</div>
									
									:
									
									<div className={s.wrapper__bell__following}
									     style={isSubscribe ? {backgroundColor: "gray"} : {backgroundColor: 'red'}}>
										<button
											className={s.btn__subscribe}
											onClick={() => handlerSubscribe()}
										
										>
											{isSubscribe ? 'Отписаться' : 'Подписаться'}
										</button>
										{isSubscribe ?
											<button className={s.bell_notification} onClick={() => handlerBell()}>
												<svg viewBox="0 0 32 32" width='24px' height='24px'
												     fill={bellIsActive ? 'white' : 'none'}
												     stroke={bellIsActive ? 'none' : 'white'}>
													<g id="Bell">
														<path
															d="M16,8a3,3,0,1,1,3-3A3,3,0,0,1,16,8Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,16,4Z"/>
														<path
															d="M19,24H13a1,1,0,0,0-1,1v1a4,4,0,0,0,8,0V25A1,1,0,0,0,19,24Z"/>
														<path
															d="M28.45,24.11A6.21,6.21,0,0,1,25,18.53V15A9,9,0,0,0,7,15v3.53a6.21,6.21,0,0,1-3.45,5.58A1,1,0,0,0,4,26H28a1,1,0,0,0,.45-1.89Z"/>
													</g>
												</svg>
											</button> : ''}
									</div>
							}
						</div>
						
						<div className={s.select__options__chanel}>
							<nav className={s.options__chanel}>
								{options.map((option, index) => {
									return (
										<div
											onClick={() => onOption(index)}
											key={index}
											className={
												value === index
													? `${s.active} ${s.option__item} ${s.option__main}`
													: `${s.option__item}`
											}>
											{option}
										</div>
									)
								})}
								
								<div className={s.option__item}>
									<button className={s.option__search}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path
												d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
												fill="white"/>
										</svg>
									
									</button>
								</div>
							</nav>
						</div>
						
						<div className={s.content__chanel}>
							{isLoading
								? [...new Array(8)].map((_, Index) => <Skeleton key={Index}/>)
								: userVideos.map((video) => {
									return (
										<CardVideo
											key={video.id}
											videoId={video.id}
											videoView={video.views}
											videoFile={video.file}
											videoTitle={video.title}
											videoImage={video.image}
											videoOwner={video.owner}
											videoDate={video.created_at}
											videoDuration={video.duration}
											edit={edit}
											setEdit={setEdit}
										/>
									)
								})}
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default UserChannel
