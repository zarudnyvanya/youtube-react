import doRequest from "../doRequest/doRequest";
import {useSelector} from "react-redux";

import s from './DeleteVideo.module.scss'

const DeleteVideo = ({videoId, setIsOpen}) => {
	const userToken = useSelector(state => state.user.userToken)
	const handlerDeleteVideo = () => {
		setIsOpen(true)
		
		const deleteVideo = async () => {
			const response = await doRequest(`/api/v1/video/${videoId}/`, userToken, 'DELETE')
			window.location.href = ''
			
		}
		if (userToken) {
			deleteVideo()
			
		}
		
		
	}
	
	return (
		<>
			<div className={s.overlay}></div>
			<div className={s.wrapper__content}>
				<h1 className={s.title__wrapper}>Точно хотите удалить видеоролик?</h1>
				<div className={s.wrapper__btn}>
				<button onClick={() => handlerDeleteVideo()} className={s.btn__delete}>Удалить</button>
				<button onClick={() => setIsOpen(false)} className={s.btn__cancel}>Отмена</button>
				</div>
			</div>
		</>
	
	)
	
	
}

export default DeleteVideo