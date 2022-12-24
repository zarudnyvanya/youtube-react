import s from './Navigation.module.scss'

import { NavItem } from './../NavItem/NavItem'
import { NavItemMini } from './../NavItemMini/NavItemMini'
import { useEffect, useState } from 'react'
import doRequest from '../doRequest/doRequest'
import SubscribeItem from '../SubscribeItem/SubscribeItem'
import { useDispatch, useSelector } from 'react-redux'

const navItems = [
  {
    id: 1,
    title: 'Главная',
    image: '/assets/svg_aside/home.svg',
  },
  {
    id: 2,
    title: 'Навигатор',
    image: './assets/svg_aside/explore.svg',
  },
  {
    id: 3,
    title: 'Подписка',
    image: './assets/svg_aside/subscriptions.svg',
  },
  {
    id: 4,
    title: 'Библиотека',
    image: './assets/svg_aside/library.svg',
  },
]

export const Navigation = () => {
  const userToken = useSelector((state) => state.user.userToken)
  const navIsOpen = useSelector((state) => state.navigation.navIsOpen)

  const [subPerson, setSubPerson] = useState([])

  useEffect(() => {
    if (userToken) {
      const apiRequest = async () => {
        const response = await doRequest('api/v1/channel/follow/', userToken)
        const data = await response.json()

        setSubPerson(data)
      }
      apiRequest()
    }
  }, [userToken])

  return (
    <aside className={`${s.aside__nav}`}>
      <nav className={s.nav__list}>
        <ul className={s.nav__items}>
          {navIsOpen
            ? navItems.map((item) => {
                return <NavItem key={item.id} item={item} />
              })
            : navItems.map((item) => {
                return <NavItemMini key={item.id} item={item} />
              })}
        </ul>
      </nav>

      {navIsOpen ? (
        <div className={s.wrapper__subscription}>
          <h1 className={s.title__sub}>Подписки</h1>
          <ul className={s.subscription__list}>
            {subPerson.map((obj) => {
              return <SubscribeItem image={obj.logo} nameChanel={obj.name} />
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
    </aside>
  )
}
