import cn from 'classnames';

import { useState } from 'react';

import { Genre } from './../Genre/Genre';
import s from './Genres.module.scss';

const genresStatic = [
  {
    id: 1,
    title: 'Все',
  },
];

const genres = [
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

let classNames = cn(s.genres__item, s.genres__active);

export const Genres = () => {
  const [genreIsChecked, setGenreIsChecked] = useState(null);

  const onSelectGenre = (id) => {
    console.log(genreIsChecked);
    setGenreIsChecked(id);
  };

  return (
    <section className={s.genres}>
      <nav className={s.genres__list}>
        <ul className={s.genres__items}>
          <li
            onClick={() => onSelectGenre(null)}
            className={genreIsChecked === null ? classNames : s.genres__item}>
            <a href="#" className={s.genres__link}>
              {genresStatic[0].title}
            </a>
          </li>

          {genres.map((genre) => {
            return (
              <Genre
                key={genre.id}
                genre={genre}
                genreId={genre.id}
                genreIsChecked={genreIsChecked}
                onClickGenre={() => onSelectGenre(genre.id)}
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
