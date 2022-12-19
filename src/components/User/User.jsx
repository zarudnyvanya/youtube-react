import s from './User.module.scss'

import userImg from './../../assets/svg__header/user.png'

export const User = ({ onPopup }) => {
  return (
    <>
      <img className={s.userImg} onClick={onPopup} src={userImg} alt="profile" />
    </>
  )
}
