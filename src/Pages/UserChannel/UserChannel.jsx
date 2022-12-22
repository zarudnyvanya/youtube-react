import { useState } from 'react'

import { Navigation } from './../../components/Navigation/Navigation'
import { Header } from './../../components/Header/Header'

import s from './UserChannel.module.scss'

const options = ['Главная', 'Плейлисты', 'Каналы', 'О канале']

const UserChannel = () => {
  const [value, setValue] = useState(0)

  const onOption = (index) => {
    setValue(index)
  }

  return (
    <>
      <Header />
      <div className={s.container}>
        <Navigation />
        <main className={s.main__content}>
          <div className={s.user__chanel}>
            <div className={s.header__chanel}>
              <div className={s.header__leftpart__chanel}>
                <img src="assets/svg__header/user.png" alt="logo" className={s.logo__chanel} />

                <div className={s.name__sub__chanel}>
                  <h1>Владислав Полевских</h1>
                  <p className={s.subscribers}>1.000.000.000 подписчиков</p>
                </div>
              </div>

              <div className={s.manager__wrapper}>
                <a href="#" className={s.video__management}>
                  Управление видео
                </a>
              </div>
            </div>

            <div className={s.select__options__chanel}>
              <nav className={s.options__chanel}>
                {/* option__item option__main option__item-current */}

                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => onOption(index)}
                      key={index}
                      className={
                        value === index
                          ? `${s.active} ${s.option__item} ${s.option__main}`
                          : `${s.option__item}`
                      }>
                      {option}
                    </div>
                  )
                })}

                <div className={s.option__item}>
                  <button className={s.option__search}>
                    <img src="assets/svg__header/search.svg" alt="" />
                  </button>
                </div>
              </nav>
            </div>

            <div className={s.content__chanel}></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default UserChannel
