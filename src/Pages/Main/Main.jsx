import { useState, useEffect } from 'react'
import { Genres } from '../../components/Genres/Genres'

import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation/Navigation'
import { Popup } from '../../components/Popup/Popup'
import { Home } from '../Home/Home'

import { apiRequest } from './../../utils/api'

export const Main = () => {
  const [videos, setVideos] = useState([])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [popup, setPopup] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    apiRequest()
    apiRequest().then((data) => setVideos(data))
  }, [])

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
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

        <div className={navIsOpen ? 'main__content-navIsOpen' : 'main__content'}>
          <Genres />
          <Home
            videos={videos}
            onChangeSearchInput={onChangeSearchInput}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </>
  )
}
