import s from "./NavSettings.module.scss";


const NavSettings = () => {

    return (
        <aside className={s.nav__block}>
            <nav className={s.nav__list}>
                <h3 className={s.nav__tittle}>Настройки</h3>
                <ul className={s.nav__items}>
                    <li className={s.nav__item}>Личная информация</li>
                </ul>
            </nav>
        </aside>

    )

}


export default NavSettings