import s from './Popup.module.scss'

import Registration from '../../Pages/Registration/Registration'

import userImg from './../../assets/svg__header/user.png'
import { forwardRef } from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Popup = ({ onClosePopup, userData, isAuth }) => {
  const outsideClick = () => {
    onClosePopup()
  }

  return (
    <div className={s.overlay} onClick={outsideClick}>
      <div className={s.popup_registr_authoriz}>
        <div className="wrapper_popup">
          <div className={s.user_info}>
            <img src={userImg} alt="profile" />
            <span>{userData && userData.userEmail ? userData.userEmail : 'Anonymous'}</span>
          </div>

          <div className={s.user_account}>
            <div className={s.about_user}>
              <div className={s.chanel}>
                {!isAuth && (
                  <>
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
                  </>
                )}
              </div>

              <div className={s.chanel}>
                {!isAuth && (
                  <>
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
                  </>
                )}
              </div>

              <div className={s.logout}>
                {isAuth && (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
