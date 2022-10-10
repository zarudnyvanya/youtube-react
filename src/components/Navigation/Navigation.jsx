import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <aside className={s.aside__nav}>
      <nav className={s.nav__list}>
        <ul className={s.nav__items}>
          <li className={s.nav__item}>
            <div className={s.nav__icons}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white" />
              </svg>
            </div>
            <a href="#" className={s.nav__links}>
              Главная
            </a>
          </li>
          <li className={s.nav__item}>
            <div className={s.nav__icons}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97L9.8 9.8ZM13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.46 13.25 11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.48 13.08 12.77ZM12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                  fill="white"
                />
              </svg>
            </div>

            <a href="#" className={s.nav__links}>
              Навигатор
            </a>
          </li>

          <li className={s.nav__item}>
            <div className={s.nav__icons}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#" className={s.nav__links}>
              Подписка
            </a>
          </li>
          <li className={s.nav__item}>
            <div className={s.nav__icons}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#" className={s.nav__links}>
              Библиотека
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
