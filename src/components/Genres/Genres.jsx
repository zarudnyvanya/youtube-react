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

const viewed = [
  {
    id: 6,
    title: 'Просмотренные',
    description: 'Просмотренные',
  },
]

export const Genres = ({ genres, genreIsChecked, onGenre, setVideos, isAuth, userData }) => {
  const [onViewed, setOnViewed] = useState(false)

  useEffect(() => {
    setOnViewed(false)

    if (userData) {
      const authToken = {
        Authorization: `token ${userData.userToken}`,
      }

      if (userData.userToken) {
        const getMyself = async () => {
          const response = await fetch('api/v1/video/last_views/', {
            headers: authToken,
          })
          const result = await response.json()
          setVideos(result)
        }

        getMyself()
      }
    }
  }, [onViewed, userData])

  const onClickViewed = () => {
    console.log('clickekdke')
    setOnViewed(true)
  }

  const onSelectGenre = (id) => {
    onGenre(id)
  }

  return (
    <section className={s.genres}>
      <nav className={s.genres__list}>
        <ul className={s.genres__items}>
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

          {/* {isAuth &&
            viewed.map((genre, index) => {
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
            })} */}
          {userData && (
            <li
              onClick={onClickViewed}
              // className={`${genreId === genreIsChecked ? classNames : s.genres__item}`}
            >
              <a href="#" className={s.genres__link}>
                {viewed[0].title}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </section>
  )
}
