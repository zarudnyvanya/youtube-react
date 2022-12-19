import s from './UserSettings.module.scss'
import NavSettings from './NavSettings/NavSettings'
import InfoAboutUser from './InfoAboutUser/InfoAboutUser'
import { Header } from '../Header/Header'
import SettingsPopup from "../SettingsPopup/SettingsPopup";
import {useState} from "react";
const UserSettings = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {
        isOpen ?
        <SettingsPopup />
            : ''
      }
      {/*<Header />*/}

      <div className="container">
        <NavSettings />

        <div className={s.wrapper__user__info}>
          <div className={s.user__info}>
            <header className={s.header__info}>
              <h3 className={s.title__personal_info}>Личная информация</h3>
              <p className={s.description__info}>Сведения о вас</p>
            </header>
            <InfoAboutUser userData={userData} onClickHandler={(isOpen)=>setIsOpen(isOpen)}/>
          </div>
        </div>
      </div>
    </>
  )
}
// setIsOpen(isOpen)
export default UserSettings
