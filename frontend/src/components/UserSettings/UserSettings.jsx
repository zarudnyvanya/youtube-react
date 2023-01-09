import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

import { Popup } from '../Popup/Popup'
import { Header } from '../Header/Header'

import NavSettings from './NavSettings/NavSettings'
import InfoAboutUser from './InfoAboutUser/InfoAboutUser'
import SettingsPopup from '../SettingsPopup/SettingsPopup'
import ChangeLogoPopup from "../ChangeLogoPopup/ChangeLogoPopup";
import s from './UserSettings.module.scss'
const UserSettings = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLogo,setIsOpenLogo] = useState(false)
  const popup = useSelector((state) => state.userPopup.popup)
  return (
    <>
      {isOpen && <SettingsPopup isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpenLogo && <ChangeLogoPopup isOpenLogo={isOpenLogo} setIsOpenLogo={setIsOpenLogo}/>}
      {popup && <Popup />}
      <Header />

      <div className="container">
        <NavSettings />
        <div className={s.wrapper__user__info}>
          <div className={s.user__info}>
            <header className={s.header__info}>
              <h3 className={s.title__personal_info}>Личная информация</h3>
              <p className={s.description__info}>Сведения о вас</p>
            </header>
            <InfoAboutUser userData={userData} setIsOpen={setIsOpen} isOpen={isOpen} isOpenLogo={isOpenLogo} setIsOpenLogo={setIsOpenLogo} />
          </div>
        </div>
      </div>
    </>
  )
}
// setIsOpen(isOpen)
export default UserSettings
