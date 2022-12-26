import s from './User.module.scss'

import userImg from './../../assets/svg__header/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { setUserPopup } from '../../redux/slices/popupSlice'

export const User = () => {
  const dispatch = useDispatch()
  const popup = useSelector((state) => state.userPopup.popup)

  const onPopup = () => {
    dispatch(setUserPopup(!popup))
  }

  return (
    <>
      <img className={s.userImg} onClick={onPopup} src={userImg} alt="profile" />
    </>
  )
}
