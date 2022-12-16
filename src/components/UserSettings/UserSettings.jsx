import s from './UserSettings.module.scss'



const UserSettings = () => {
    return (
        <>
            <aside className={s.nav__block}>
                <nav className={s.nav__list}>
                    <h3 className={s.nav__tittle}>Настройки</h3>
                    <ul className={s.nav__items}>
                        <li className={s.nav__item}>Личная информация</li>
                    </ul>
                </nav>
            </aside>

            <div className={s.wrapper__user__info}>
                <div className={s.user__info}>
                    <header className={s.header__info}>
                        <h3 className={s.title__personal_info}>
                            Личная информация
                        </h3>
                        <p className={s.description__info}>
                            Сведения о вас
                        </p>
                    </header>

                    <div className={s.wrapper__basicInformation}>

                        <ul className={s.basicInformation}>

                            <li className={s.item__info_title}>
                                <h4 className={s.info_title}>Информация о Вас</h4>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Логотип</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}> Добавте лого в аккаунт</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Имя</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}>ladick</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Дата рождения</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}>15.04.2002г.</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Пол</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}>Мужской</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Электронная почта</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}>polevskux@gmail.com</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>

                            <li className={s.item__info}>

                                <span className={s.title__person_info}>Пароль</span>
                                <div className={s.person__description}>
                                    <span className={s.person__info}>**********</span>
                                    <span className={s.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="white" viewBox="0 0 24 24">
                                          <polygon
                                              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                        </svg>

                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
)

}

export default UserSettings