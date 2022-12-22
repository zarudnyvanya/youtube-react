import { useEffect, useState } from 'react'
import { Genres } from '../../components/Genres/Genres'

import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation/Navigation'
import { Popup } from '../../components/Popup/Popup'
import { Home } from '../Home/Home'
import Skeleton from '../../components/CardVideo/CardSkeleton'

import doRequest from '../../components/doRequest/doRequest'
import { useSelector } from 'react-redux'

export const Main = () => {
  const userToken = useSelector((state) => state.user.userToken)

  const [videos, setVideos] = useState([])

  // const [viewedVideos, setViewedVideos] = useState([])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [popup, setPopup] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [genres, setGenres] = useState(null)
  const [genreIsChecked, setGenreIsChecked] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState()

  useEffect(() => {
    let url = '/api/v1/video/'
    if (userToken) {
      const apiRequest = async () => {
        if (genreIsChecked === 100) {
          url = url + 'last_views/'
        } else if (genreIsChecked === 101) {
          url = url + 'new/'
        } else if (genreIsChecked > 0) {
          url = url + genreIsChecked + '/category/'
        }
        const response = await doRequest(url, userToken)
        const data = await response.json()

        setVideos(data)
        setIsLoading(false)
      }
      apiRequest()
    }
  }, [genreIsChecked, userToken])

  useEffect(() => {
    fetch('/api/v1/category/')
      .then((res) => res.json())
      .then((data) => setGenres(data))
  }, [])

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="overlay">
      <>
        {popup && <Popup onClosePopup={() => setPopup(false)} />}

        <Header
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
          navIsOpen={() => setNavIsOpen(!navIsOpen)}
          onPopup={() => setPopup(!popup)}
        />
        <div className="container">
          <Navigation navIsOpen={navIsOpen} />

          <div className={navIsOpen ? 'main__content' : 'main__content-nav'}>
            <Genres
              genres={genres}
              genreIsChecked={genreIsChecked}
              onGenre={setGenreIsChecked}
              setVideos={setVideos}
            />

            {isLoading ? (
              [...new Array(8)].map((_, Index) => <Skeleton key={Index} />)
            ) : (
              <Home
                videos={videos}
                navIsOpen={navIsOpen}
                onChangeSearchInput={onChangeSearchInput}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            )}
          </div>
        </div>
      </>
    </div>
  )
}
