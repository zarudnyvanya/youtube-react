import s from './NavItemMini.module.scss'

export const NavItemMini = ({ item }) => {
  return (
    <li className={s.nav__item}>
      <div className={s.nav__icons}>
        <img src={item.image} alt="img" />
        <h1 className={s.title_nav}>{item.title}</h1>
      </div>
    </li>
  )
}
