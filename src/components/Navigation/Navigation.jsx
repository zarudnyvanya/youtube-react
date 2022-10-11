import s from './Navigation.module.scss';

import { NavItem } from './../NavItem/NavItem';

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
];

export const Navigation = ({ navIsOpen }) => {
  console.log(navIsOpen);

  return (
    <aside className={`${s.aside__nav} ${navIsOpen ? s.hidden : ''}`}>
      <nav className={s.nav__list}>
        <ul className={s.nav__items}>
          {navItems.map((item) => {
            return <NavItem key={item.id} item={item} />;
          })}
        </ul>
      </nav>
    </aside>
  );
};
