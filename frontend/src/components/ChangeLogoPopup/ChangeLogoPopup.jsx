import s from "./ChangeLogoPopup.module.scss";
import {useState} from "react";

import {HOST} from "../HOST/HOST";
import {useDispatch, useSelector} from "react-redux";


const ChangeLogoPopup = ({isOpenLogo,setIsOpenLogo})=>{
	const [value, setValue] = useState(null);
	const userToken = useSelector(state => state.user.userToken)
	const dispatch = useDispatch()
	const onSendLogo = async (event) => {
		event.preventDefault()
		
		const formData = new FormData()
		formData.append('logo', value)
		
		const res = await fetch(HOST+'/api/v1/channel/me/', {
			method: 'PATCH',
			headers: {
				Authorization: `token ${userToken}`,
			},
			body: formData,
		})
		
		
		
		setIsOpenLogo(!isOpenLogo)
	}
	
	const handleChangeFile = (event) => {
		const file = event.target.files[0]
		setValue(file)
		

	}
	
	
	return (
		<>
			<div className={s.overlay} onClick={() => setIsOpenLogo(!isOpenLogo)}></div>
			<div className={s.wrapper__popup}>
				{/*<h1 className={s.wrapper__title}>Название канала</h1>*/}
				<form method="post" className={s.wrapper__info}>
					<div className={s.info__block}>
						<label className={s.info__label__content}>
							<h2 className={s.info__title__content}>логотип</h2>
							<div className={s.input__button}>
								<input
									onChange={handleChangeFile}
									type="file"
									className={s.info__content}
									accept="image/png, image/jpeg,image/HEIC"
								/>
							</div>
						</label>
						
						<button  className={s.submit_changes} onClick={onSendLogo}>
							Сохранить
						</button>
					</div>
				</form>
			</div>
		</>
	)


}

export default ChangeLogoPopup