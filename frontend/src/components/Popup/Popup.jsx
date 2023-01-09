import s from './Popup.module.scss'

import {setUserPopup} from '../../redux/slices/popupSlice'
import userImg from './../../assets/svg__header/user.png'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {HOST} from '../HOST/HOST'
export const Popup = () => {
	const dispatch = useDispatch()
	const userData = useSelector((state) => state.user.userData)
	const isAuth = useSelector((state) => state.user.isAuth)
	const userChannel = useSelector(state => state.user.userChannel)
	
	console.log('userChannel', userChannel)
	console.log('userData', userData)
	const outsideClick = () => {
		dispatch(setUserPopup(false))
	}
	
	return (
		<div className={s.overlay} onClick={outsideClick}>
			<div className={s.popup_registr_authoriz}>
				<div className="wrapper_popup">
					<div className={s.user_info}>
						<img src={userChannel.logo} alt="profile" style={{width:'32px',height:'32px',borderRadius: '50%'}}/>
						<span>{userData && userData.email ? userData.email : 'Anonymous'}</span>
					</div>
					
					<div className={s.user_account}>
						<div className={s.about_user}>
							{!isAuth && (
								<>
									<div className={s.chanel}>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,
                                      10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.
                                      21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.
                                      73,17.14,14.18,12.72,13.93z"
												fill="white"
											/>
										</svg>
										<Link to="/registration">Регистрация</Link>
									</div>
								</>
							)}
							
							{!isAuth && (
								<>
									<div className={s.chanel}>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,
                                      10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.
                                      21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.
                                      73,17.14,14.18,12.72,13.93z"
												fill="white"
											/>
										</svg>
										<Link to="/authorization">Вход</Link>
									</div>
								</>
							)}
							
							{isAuth && (
								<>
									<div className={s.logout}>
										<svg viewBox="0 0 32 32" width="24px" height="24px" fill="white">
											<g id="about">
												<path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/>
												<path
													d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/>
											</g>
										</svg>
										
										<Link to={`/channel/${userChannel.pk}/`}>Мой канал</Link>
									</div>
								</>
							)}
							
							{isAuth && userData.is_staff && (
								<>
									<div className={s.logout}>
										<svg id="Layer_1_1_" version="1.1" viewBox="0 0 64 64" width='24px' height='24px' fill='white'><g><path d="M36,23c0-2.206-1.794-4-4-4s-4,1.794-4,4v6h8V23z M34,27h-4v-4c0-1.103,0.897-2,2-2s2,0.897,2,2V27z"/><path d="M59.741,32L51,17.015L42.259,32H45v4h-4V13.236l2-4V1h-6v3h-2V1h-6v3h-2V1h-6v8.236l2,4V36h-4v-4h2.741L13,17.015L4.259,32   H7v29H5v2h54v-2h-2V32H59.741z M51,20.985L56.259,30H45.741L51,20.985z M25,3v3h6V3h2v3h6V3h2v5h-2v2h1.382l-1,2H24.618l-1-2H37V8   H23V3H25z M25,14h14v22v1v2h-3v-3h-8v3h-3v-2v-1V14z M23,38v3h7v-3h4v3h7v-3h4v5h-2v2h2v16h-6v-5c0-3.86-3.141-7-7-7s-7,3.14-7,7v5   h-6V45h22v-2H19v-5H23z M37,61H27v-5c0-2.757,2.243-5,5-5s5,2.243,5,5V61z M13,20.985L18.259,30H7.741L13,20.985z M9,59h2v-2H9v-2   h4v-2H9V40h2v-2H9v-2h4v-2H9v-2h8v13h-4v2h4v2h-2v2h2v10H9V59z M55,38h-2v2h2v13h-2v2h2v2h-2v2h2v2h-8V51h2v-2h-2v-2h4v-2h-4v-9h4   v-2h-4v-2h8V38z"/><rect height="2" width="2" x="61" y="61"/><rect height="2" width="2" x="1" y="61"/><rect height="2" width="2" x="49" y="41"/><rect height="2" width="2" x="49" y="53"/><rect height="2" width="2" x="13" y="57"/></g></svg>
										
										<a href={HOST+`/admin`}>Администрирование</a>
									</div>
								</>
							)}
							
							{isAuth && (
								<>
									<div className={s.logout}>
										<svg
											fill="#fff"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											width="24px"
											height="24px">
											<path
												d="M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z"/>
										</svg>
										
										<Link to="/userSettings">Настройки</Link>
									</div>
								</>
							)}
							
							{isAuth && (
								<>
									<div className={s.logout}>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
												fill="white"
											/>
										</svg>
										
										<Link to="/logout">Выход</Link>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
