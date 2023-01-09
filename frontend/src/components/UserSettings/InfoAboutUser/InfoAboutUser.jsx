import s from './InfoAboutUser.module.scss'

import UserInfoItem from '../UserInfoItem/UserInfoItem'

const InfoAboutUser = ({ isOpen ,setIsOpen,isOpenLogo,setIsOpenLogo }) => {

  const fieldsSettings = [{}]

  return (
    <div className={s.wrapper__basicInformation}>
      <ul className={s.basicInformation}>
        <li className={s.item__info_title}>
          <h4 className={s.info_title}>Информация о Вас</h4>
        </li>
        {fieldsSettings.map((field, index) => {
          return (
            <UserInfoItem key={index} isOpen={isOpen} setIsOpen={setIsOpen} isOpenLogo={isOpenLogo} setIsOpenLogo={setIsOpenLogo}/>
          )
        })}
      </ul>
    </div>
  )
}
// onClickHandler(true)
export default InfoAboutUser
