import cn from 'classnames'
import { useEffect } from 'react'

import { setGenres, setGenresId } from './../../redux/slices/genresSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Genre } from './../Genre/Genre'
import s from './Genres.module.scss'
import { useSelector, useDispatch } from 'react-redux'

const genresBase = [
  {
    id: 0,
    title: 'Все',
    description: 'Все',
  },
  {
    id: 100,
    title: 'Просмотренные',
    description: 'Просмотренные',
  },
  {
    id: 101,
    title: 'Новое',
    description: 'Новое',
  },
]

export const Genres = () => {
  const dispatch = useDispatch()
  const genres = useSelector((state) => state.genres.genres)

  const onSelectGenre = (id) => {
    dispatch(setGenresId(id))
  }

  useEffect(() => {
    fetch('/api/v1/category/')
      .then((res) => res.json())
      .then((data) => dispatch(setGenres(data)))
  }, [])

  return (
    <section className={s.genres}>
      <nav className={s.genres__list}>
        <ul className={s.genres__items}>
          {genresBase.map((genre, index) => {
            return (
              <Genre
                key={genre.id}
                genre={genre}
                index={index + 1}
                genreId={genre.id}
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
                  onClickGenre={() => onSelectGenre(genre.id)}
                />
              )
            })}
        </ul>
      </nav>
    </section>
  )
}
