import { useState, useEffect } from 'react'
import { Genres } from '../../components/Genres/Genres'

import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation/Navigation'
import { Popup } from '../../components/Popup/Popup'
import { Home } from '../Home/Home'
import Skeleton from '../../components/CardVideo/CardSkeleton'
import UserSettings from "../../components/UserSettings/UserSettings";


export const Main = ({ userData, isAuth }) => {
  const [videos, setVideos] = useState([])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [popup, setPopup] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [genres, setGenres] = useState(null)
  const [genreIsChecked, setGenreIsChecked] = useState(0)
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true)
    const apiRequest = async () => {
      try {
        const response = await fetch(
          `/api/v1/video/${genreIsChecked > 0 ? `${genreIsChecked}/category/` : ''}`,
        )
        const data = await response.json()
        setVideos(data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    apiRequest()
  }, [genreIsChecked])

  useEffect(() => {
    fetch('/api/v1/category/')
      .then((res) => res.json())
      .then((data) => setGenres(data))
  }, [])

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
      <div className='overlay'>
    <>
      {popup && <Popup userData={userData} isAuth={isAuth} onClosePopup={() => setPopup(false)} />}

      <Header
        userData={userData}
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
        navIsOpen={() => setNavIsOpen(!navIsOpen)}
        onPopup={() => setPopup(!popup)}
      />
      <div className="container">
        <Navigation navIsOpen={navIsOpen} />

        <div className={navIsOpen ? 'main__content' : 'main__content-nav'}>
          <Genres genres={genres} genreIsChecked={genreIsChecked} onGenre={setGenreIsChecked} />

          {

            isLoading ? [...new Array(6)].map((_,Index) => <Skeleton key={Index}/>) :

            <Home
            videos={videos}
            navIsOpen={navIsOpen}
            onChangeSearchInput={onChangeSearchInput}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isAuth={isAuth}
          />

          }
        </div>
      </div>
    </>
</div>
  )
}
