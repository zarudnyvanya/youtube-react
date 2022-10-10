import { Button } from '../UI/Button/Button';

import s from './Genres.module.scss';

export const Genres = () => {
  return (
    <main className={s.main__content}>
      <section className={s.genres}>
        <nav className={s.genres__list}>
          <ul className={s.genres__items}>
            {/* genres__item genres__white__item */}
            <li className={s.genres__item}>
              {/* genres__link genres__white__link */}
              <a href="#" className={s.genres__link}>
                Все
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Видеоигры
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Сейчас в эфире
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Музыка
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Джемы
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Экшен и приключения
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Фитнес
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Кулинария
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Последние опубликованные видео
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Просмотрено
              </a>
            </li>
            <li className={s.genres__item}>
              <a href="#" className={s.genres__link}>
                Новое для вас
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};
