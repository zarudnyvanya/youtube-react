import { Button } from '../UI/Button/Button';

import { Genre } from './../Genre/Genre';

import s from './Genres.module.scss';

const genres = [
  {
    id: 1,
    title: 'Все',
  },
  {
    id: 2,
    title: 'Видеоигры',
  },
  {
    id: 3,
    title: 'Сейчас в эфире',
  },
  {
    id: 4,
    title: 'Музыка',
  },
  {
    id: 5,
    title: 'Джемы',
  },
  {
    id: 6,
    title: 'Фитнес',
  },
  {
    id: 7,
    title: 'Кулинария',
  },
  {
    id: 8,
    title: 'Последние опубликованные видео',
  },
  {
    id: 9,
    title: 'Просмотрено',
  },
  {
    id: 10,
    title: 'Новое для вас',
  },
];

export const Genres = () => {
  return (
    <main className={s.main__content}>
      <section className={s.genres}>
        <nav className={s.genres__list}>
          <ul className={s.genres__items}>
            {genres.map((genre) => {
              return <Genre key={genre.id} genre={genre} />;
            })}
          </ul>
        </nav>
      </section>
    </main>
  );
};
