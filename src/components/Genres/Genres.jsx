import cn from 'classnames'
import { useEffect } from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Genre } from './../Genre/Genre'
import s from './Genres.module.scss'

const genre = [
  {
    id: 0,
    title: 'Все',
    description: 'Все',
  },
]

export const Genres = ({ genres, genreIsChecked, onGenre }) => {
  console.log(genres)

  const onSelectGenre = (id) => {
    console.log(genreIsChecked)
    onGenre(id)
  }

  return (
    <section className={s.genres}>
      <nav className={s.genres__list}>
        <ul className={s.genres__items}>
          {/* {genres[0].title} */}

          {genre.map((genre, index) => {
            return (
              <Genre
                key={genre.id}
                genre={genre}
                index={index + 1}
                genreId={genre.id}
                genreIsChecked={genreIsChecked}
                onClickGenre={() => onSelectGenre(genre.id)}
              />
            )
          })}
          {genres &&
            genres.map((genre, index) => {
              return (
                <Genre
                  key={genre.id}
                  genre={genre}
                  index={index}
                  genreId={genre.id}
                  genreIsChecked={genreIsChecked}
                  onClickGenre={() => onSelectGenre(genre.id)}
                />
              )
            })}
        </ul>
      </nav>
    </section>
  )
}
