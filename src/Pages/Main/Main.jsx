import { useEffect, useState } from 'react'
import { Genres } from '../../components/Genres/Genres'

import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation/Navigation'
import { Popup } from '../../components/Popup/Popup'
import { Home } from '../Home/Home'
import Skeleton from '../../components/CardVideo/CardSkeleton'

import { setNavIsOpen } from './../../redux/slices/navigationSlice'
import doRequest from '../../components/doRequest/doRequest'
import { useDispatch, useSelector } from 'react-redux'

export const Main = () => {
  const userToken = useSelector((state) => state.user.userToken)
  const navIsOpen = useSelector((state) => state.navigation.navIsOpen)
  const popup = useSelector((state) => state.userPopup.popup)
  const genreIsChecked = useSelector((state) => state.genres.genreIsChecked)

  const [videos, setVideos] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="overlay">
      <>
        {popup && <Popup />}

        <Header onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} />

        <div className="container">
          <Navigation />

          <div className={navIsOpen ? 'main__content' : 'main__content-nav'}>
            <Genres setVideos={setVideos} />

            {isLoading ? (
              [...new Array(8)].map((_, Index) => <Skeleton key={Index} />)
            ) : (
              <Home
                videos={videos}
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
