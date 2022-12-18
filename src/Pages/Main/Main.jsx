import {useEffect, useState} from 'react'
import {Genres} from '../../components/Genres/Genres'

import {Header} from '../../components/Header/Header'
import {Navigation} from '../../components/Navigation/Navigation'
import {Popup} from '../../components/Popup/Popup'
import {Home} from '../Home/Home'
import Skeleton from '../../components/CardVideo/CardSkeleton'

export const Main = ({userData, isAuth}) => {
    const [videos, setVideos] = useState([])

    // const [viewedVideos, setViewedVideos] = useState([])
    const [navIsOpen, setNavIsOpen] = useState(false)
    const [popup, setPopup] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [genres, setGenres] = useState(null)
    const [genreIsChecked, setGenreIsChecked] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    // const [userToken, setUserToken] = useState()

    const doRequest = (url) => {
        // userData нет при первом запросе. пофикси из-за этого не берется токен
        let headers = {}
        try {
            headers = {
                Authorization: `token ${userData.userToken}`,
            }
        } catch {
            console.log("userToken not found")
        }

        try {
            return fetch(url, {headers: headers})
        } catch {
            console.log('error_request')
        }
    }
    useEffect(() => {
            const apiRequest = async () => {
                let url = '/api/v1/video/'
                if (genreIsChecked === 100) {
                    url = url + "last_views/"
                } else if (genreIsChecked === 101) {
                    url = url + 'new/'
                } else if (genreIsChecked > 0) {
                    url = url + genreIsChecked + '/category/'
                }
                const response = await doRequest(url)
                const data = await response.json()

                setVideos(data)
                setIsLoading(false)
            }
            apiRequest()
        }, [genreIsChecked]
    )
    // useEffect(() => {
    //   const apiLastViewed = async () => {
    //     try {
    //       const response = await fetch(`/api/v1/video/${genreIsChecked === 6 ? `last_views/` : ''}`)
    //       const data = await response.json()

    //       console.log('data vvv', data)

    //       console.log('userData', userData.userToken)

    //       const authToken = {
    //         Authorization: `token ${userData.userToken}`,
    //       }

    //       if (userData.userToken) {
    //         console.log('viewed ->', userData.userToken)

    //         const getMyself = async () => {
    //           const response = await fetch('api/v1/video/last_views/', {
    //             headers: authToken,
    //           })
    //           const result = await response.json()

    //           setVideos(data)
    //           setIsLoading(false)
    //           // localStorage.setItem('id', result.id)
    //           // localStorage.setItem('email', result.email)
    //         }

    //         //   window.location.href = '/'

    //         getMyself()
    //       }
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

    //   apiLastViewed()
    // }, [genreIsChecked, userData])

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
                {popup && (
                    <Popup userData={userData} isAuth={isAuth} onClosePopup={() => setPopup(false)}/>
                )}

                <Header
                    userData={userData}
                    onChangeSearchInput={onChangeSearchInput}
                    searchValue={searchValue}
                    navIsOpen={() => setNavIsOpen(!navIsOpen)}
                    onPopup={() => setPopup(!popup)}
                />
                <div className="container">
                    <Navigation navIsOpen={navIsOpen}/>

                    <div className={navIsOpen ? 'main__content' : 'main__content-nav'}>
                        <Genres
                            isAuth={isAuth}
                            genres={genres}
                            genreIsChecked={genreIsChecked}
                            onGenre={setGenreIsChecked}
                            setVideos={setVideos}
                            userData={userData}
                        />

                        {isLoading ? (
                            [...new Array(6)].map((_, Index) => <Skeleton key={Index}/>)
                        ) : (
                            <Home
                                videos={videos}
                                navIsOpen={navIsOpen}
                                onChangeSearchInput={onChangeSearchInput}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                isAuth={isAuth}
                            />
                        )}
                    </div>
                </div>
            </>
        </div>
    )
}
