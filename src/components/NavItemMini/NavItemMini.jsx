import s from './NavItemMini.module.scss'

export const NavItemMini = ({ item }) => {
  return (
    <li className={s.nav__item}>
      <div className={s.nav__icons}>
        <img src={item.image} alt="img" />
      </div>
    </li>
  )
}
