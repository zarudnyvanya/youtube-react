import s from './NavItem.module.scss'

export const NavItem = ({ item }) => {
  return (
    <li className={s.nav__item}>
      <div className={s.nav__icons}>
        <img src={item.image} alt="img" />
      </div>
      <a href="#" className={s.nav__links}>
        {item.title}
      </a>
    </li>
  )
}
