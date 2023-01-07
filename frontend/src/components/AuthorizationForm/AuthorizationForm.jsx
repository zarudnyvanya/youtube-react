import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {setUserData, setUserToken} from '../../redux/slices/userDataSlice'

import s from './AuthorizationForm.module.scss'
import {useDispatch, useSelector} from 'react-redux'

export const AuthorizationForm = () => {
	const dispatch = useDispatch()
	
	const userData = useSelector((state) => state.user.userData)
	const userToken = useSelector((state) => state.user.userToken)
	const userId = useSelector((state) => state.user.userId)
	const userEmail = useSelector((state) => state.user.userEmail)
	// const userEmail = useSelector((state) => state.user.userEmail)
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	
	const [emailError, setEmailError] = useState('Email не может быть пустым')
	const [passwordError, setPasswordError] = useState('Password не может быть пустым')
	
	const [formValid, setFormValid] = useState(false)
	
	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])
	
	useEffect(() => {
		const authToken = {
			Authorization: `token ${userToken}`,
		}
		
		if (userToken) {
			const getMyself = async () => {
				const response = await fetch('api/v1/auth/users/me/', {
					headers: authToken,
				})
				
				const result = await response.json()
				dispatch(setUserData(result))
				window.location.href = '/'
			}
			getMyself()
		}
	}, [userToken])
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		
		const userData = {email, password}
		
		console.log('handle user data -<<', userData)
		
		fetch('auth/token/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.auth_token) {
					localStorage.setItem('user', response.auth_token)
					dispatch(setUserToken(response.auth_token))
				}
				
				if (response.detail) {
					console.log('Govno back')
				}
			})
	}
	
	const emailHandler = (event) => {
		setEmail(event.target.value)
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		
		if (!re.test(String(event.target.value).toLowerCase())) {
			setEmailError('Неверный email')
			console.log(11111)
		} else {
			setEmailError('')
		}
	}
	
	const passwordHandler = (event) => {
		setPassword(event.target.value)
		
		if (event.target.value.length < 5) {
			setPasswordError('Пароль меньше 5 символов')
		} else {
			setPasswordError('')
		}
	}
	
	const blurHandler = (event) => {
		console.log(event.target.name)
		switch (event.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
		}
	}
	
	const [type, setType] = useState('password')
	
	const handlerState = () => {
		if (type === 'text') {
			setType('password')
		} else {
			setType('text')
		}
	}
	
	return (
		<form onSubmit={handleSubmit} class={s.form} method="post">
			Token: {userToken}
			<div class={s.form__group}>
				<input
					onBlur={(event) => blurHandler(event)}
					onChange={(event) => emailHandler(event)}
					value={email}
					type="text"
					id="login"
					name="email"
					class={s.input_authoriz}
					placeholder=""
				/>
				<label for="login" class={s.form__label}>
					{emailDirty && emailError ? (
						<p style={{color: '#eb0052', fontSize: '14px'}}>{emailError}</p>
					) : (
						'Телефон или адрес эл. почты'
					)}
				</label>
			</div>
			<div class={s.form__group}>
				<input
					onBlur={(event) => blurHandler(event)}
					onChange={(event) => passwordHandler(event)}
					value={password}
					type={type}
					id="pass"
					name="password"
					class={s.input_authoriz}
					placeholder=""
				/>
				<span className={s.input_pass_display} onClick={() => handlerState()}>
          {type === 'password' ? (
	          <svg
		          width="24px"
		          height="24px"
		          viewBox="0 0 24 24"
		          version="1.1"
		          xmlns="http://www.w3.org/2000/svg">
		          <g id="Iconly/Broken/Hide" stroke="none" fill="none">
			          <g id="Hide" transform="translate(2.000000, 3.500000)" fill="#000000">
				          <path
					          d="M17.3851033,0.21115261 C17.671103,-0.0703842034 18.1341024,-0.0703842034 18.420102,0.21115261 C18.7061017,0.492689424 18.7061017,0.948464055 18.420102,1.23000087 L18.420102,1.23000087 L2.61512224,16.7883552 C2.47212243,16.9291236 2.28512267,17 2.09812291,17 C1.91012315,17 1.72312338,16.9291236 1.58012357,16.7883552 C1.29412393,16.5068184 1.29412393,16.0510437 1.58012357,15.7704913 L1.58012357,15.7704913 L6.77611692,10.6545934 C6.33711748,10.0245809 6.09811779,9.2813631 6.09811779,8.5007383 C6.09811779,6.38232143 7.84811555,4.65963114 10.0001128,4.65963114 C10.7871118,4.65963114 11.5531108,4.8978546 12.19011,5.32508179 L12.19011,5.32508179 L14.2241074,3.32380787 C11.3561111,1.48692782 7.85911553,1.64443093 5.12711903,3.77367613 C3.68412088,4.89096384 2.44512246,6.52112105 1.53212363,8.50172269 C1.93812311,9.3866933 2.41012251,10.2027563 2.93612183,10.9312082 C3.17012153,11.255074 3.09312163,11.7049422 2.76412205,11.9352905 C2.63512222,12.0258548 2.48712241,12.0691682 2.3401226,12.0691682 C2.11112289,12.0691682 1.88612318,11.9648224 1.74312336,11.7659747 C1.10112418,10.8770665 0.534124906,9.87396856 0.059125514,8.7842439 C-0.0198743849,8.60311532 -0.0198743849,8.39639248 0.0601255127,8.2152639 C1.08112421,5.88815542 2.51912237,3.96071108 4.22112019,2.64260691 C7.51911597,0.0743217812 11.8511104,-0.0526651032 15.277106,2.28724051 L15.277106,2.28724051 Z M17.0230038,4.82097339 C17.3450034,4.58176554 17.8030028,4.64575118 18.0470025,4.96371059 C18.7710016,5.90971366 19.4070008,7.00436029 19.9400001,8.21418107 C20.02,8.39629404 20.02,8.60400127 19.9400001,8.78512985 C17.8430028,13.5683025 14.1270075,16.4240308 10.0000128,16.4240308 C9.06201399,16.4240308 8.13001519,16.2744028 7.23101634,15.9790845 C6.84801683,15.8520976 6.64101709,15.4445583 6.76901693,15.0675353 C6.89601677,14.6895278 7.30901624,14.4887113 7.69401575,14.6117606 C8.44401479,14.8578592 9.22001379,14.9828773 10.0000128,14.9828773 C13.4450084,14.9828773 16.5920044,12.5661889 18.468002,8.50063986 C18.0090025,7.50738585 17.4750032,6.61060251 16.878004,5.82997771 C16.6350043,5.5120183 16.6990042,5.06116564 17.0230038,4.82097339 Z M13.1413824,8.33490816 L13.2397086,8.34579461 C13.6377081,8.41568662 13.9027078,8.78975651 13.8307079,9.18252989 C13.5467083,10.7457483 12.2877099,11.9860853 10.6997119,12.2705753 C10.655712,12.2774661 10.611712,12.2814036 10.5677121,12.2814036 C10.2217125,12.2814036 9.91271291,12.0382582 9.84871299,11.690767 C9.77671308,11.298978 10.0407127,10.9239237 10.4387122,10.8520629 C11.428711,10.6758563 12.21271,9.90212224 12.3907097,8.92757173 C12.4617096,8.53775153 12.8447092,8.27491821 13.2397086,8.34579461 Z M10.0001128,6.09980023 C8.65511452,6.09980023 7.56111592,7.17574336 7.56111592,8.5007383 C7.56111592,8.89154289 7.66711578,9.263644 7.84711555,9.60129129 L7.84711555,9.60129129 L11.1191114,6.38035264 C10.7771118,6.20414604 10.3951123,6.09980023 10.0001128,6.09980023 Z"></path>
			          </g>
		          </g>
	          </svg>
          ) : (
	          <svg
		          width="24px"
		          height="24px"
		          viewBox="0 0 24 24"
		          version="1.1"
		          xmlns="http://www.w3.org/2000/svg">
		          <g id="Iconly/Broken/Show" stroke="none" fill="none">
			          <g id="Show" transform="translate(2.000000, 4.000000)" fill="#000000">
				          <path
					          d="M10.002125,2.04281037e-13 C14.1380733,0.00198782457 17.8530268,2.88632128 19.9400007,7.71375326 C20.0199998,7.89663312 20.0199998,8.10336688 19.9400007,8.28724065 C19.6920038,8.86072804 19.4160073,9.41831283 19.118011,9.9411107 C18.9190135,10.2929556 18.4750191,10.4152069 18.1210235,10.2184122 C17.7690279,10.0196298 17.6450294,9.5773388 17.843027,9.22748167 C18.0650242,8.83687415 18.2750216,8.42440055 18.4680191,8 C16.6010425,3.89613617 13.4530818,1.4560815 10.000125,1.45508759 C6.54616817,1.4560815 3.39820752,3.89613617 1.53123086,8 C3.39820752,12.1038638 6.54616817,14.5449124 10.000125,14.5449124 C12.0080999,14.5449124 13.9450757,13.7140017 15.602055,12.1406386 C15.8950513,11.8653249 16.3570455,11.875264 16.636042,12.1654864 C16.9160385,12.4547149 16.9040387,12.9148963 16.6120423,13.1921978 C14.6790665,15.0279538 12.3940951,15.9990061 10.002125,16 L10.002125,16 C5.86217672,15.9980122 2.14722316,13.1146726 0.0592492594,8.28724065 C-0.0197497531,8.10436079 -0.0197497531,7.89663312 0.0592492594,7.71375326 C2.14722316,2.88632128 5.86217672,0.00198782457 9.99712504,2.04281037e-13 L9.99712504,2.04281037e-13 Z M9.999625,4.12433843 C12.1495981,4.12433843 13.8985763,5.86269102 13.8985763,7.99960244 C13.8985763,10.1375078 12.1495981,11.8758604 9.999625,11.8758604 C9.29163385,11.8758604 8.59864252,11.6850292 7.99565005,11.324239 C7.64865439,11.1184992 7.53665579,10.6712387 7.74565318,10.3263511 C7.95365058,9.98345136 8.40364495,9.86915145 8.74864064,10.0788669 C9.12463594,10.3034911 9.55763053,10.4217667 9.999625,10.4217667 C11.3426082,10.4217667 12.4355946,9.33542055 12.4355946,7.99960244 C12.4355946,6.66577215 11.3426082,5.57942602 9.999625,5.57942602 C8.65664179,5.57942602 7.56365545,6.66577215 7.56365545,7.99960244 C7.56365545,8.40213691 7.23565955,8.72714623 6.8316646,8.72714623 C6.42766965,8.72714623 6.10067374,8.40213691 6.10067374,7.99960244 C6.10067374,5.86269102 7.84965188,4.12433843 9.999625,4.12433843 Z"></path>
			          </g>
		          </g>
	          </svg>
          )}
        </span>
				<label for="pass" class={s.form__label}>
					{passwordDirty && passwordError ? (
						<p style={{color: '#eb0052', fontSize: '14px'}}>{passwordError}</p>
					) : (
						'Пароль'
					)}
				</label>
			</div>
			<a href="#" class={s.recover_pass}>
				Забыли адрес электронной почты или пароль?
			</a>
			<div class={s.createacc_futher}>
				<Link to="/" class={s.create_account}>
					Назад
				</Link>
				<Link to="/registration" class={s.create_account}>
					Создать аккаунт
				</Link>
				<button className={s.next} disabled={!formValid} class={s.futherbtn}>
					Далее
				</button>
			</div>
		</form>
	)
}
