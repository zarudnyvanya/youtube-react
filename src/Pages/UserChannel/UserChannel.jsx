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
      <div className="container">
        <Navigation />
        <main class={s.main__content}>
          <div class={s.user__chanel}>
            <div class={s.header__chanel}>
              <div class={s.header__leftpart__chanel}>
                <img src="assets/svg__header/user.png" alt="logo" class="logo__chanel" />

                <div class={s.name__sub__chanel}>
                  <h1>Владислав Полевских</h1>
                  <p class={s.subscribers}>1.000.000.000 подписчиков</p>
                </div>
              </div>

              <div class={s.manager__wrapper}>
                <a href="#" class={s.video__management}>
                  Управление видео
                </a>
              </div>
            </div>

            <div class={s.select__options__chanel}>
              <nav class={s.options__chanel}>
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

                <div class={s.option__item}>
                  <button>
                    <img src="assets/svg__header/search.svg" alt="" />
                  </button>
                </div>
              </nav>
            </div>

            <div class="content__chanel"></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default UserChannel
