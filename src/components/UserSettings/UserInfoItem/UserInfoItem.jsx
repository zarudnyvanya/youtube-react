import s from './UserInfoItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import doRequest from "../../doRequest/doRequest";
import {setUserChannel, setUserVideos} from "../../../redux/slices/userDataSlice";


const UserInfoItem = ({ isOpen,setIsOpen }) => {
  const dispatch = useDispatch()
  const userChannel = useSelector(state => state.user.userChannel)
  const userToken = useSelector(state => state.user.userToken)
  const userData = useSelector(state=> state.user.userData)

  useEffect(() => {

    const url = 'api/v1/channel/me/'

    const getUser = async () => {
      const response = await doRequest(url, userToken)
      const data = await response.json()

      console.log(data)
      dispatch(setUserChannel(data))

      // setVideos(data)
      // setIsLoading(false)
    }
    getUser()

  }, [userToken])

  // useEffect(() => {
  //   try {
  //     fetch(`api/v1/video/${userChannel.pk}/channel/`)
  //         .then((res) => res.json())
  //         .then((data) => dispatch(setUserVideos(data)))
  //
  //   } catch {}
  // }, [userChannel, userToken])

  const refactorDate = (date)=> {
    let FullDate = new Date(date)
    let reMonth = FullDate.getMonth()+1
    let reDate = FullDate.getDate()
    let reYear = FullDate.getFullYear()
    if(reMonth < 10){
      reMonth = '0' + reMonth
    }
    if(reDate < 10){
      reDate = '0' + reDate
    }

    return `${reDate}.${reMonth}.${reYear}`

  }

    const fieldsSettings = [
      {
        title: 'Имя',
        description: userData.first_name
      },
      {
        title: 'Дата рождения',
        description: refactorDate(userData.birth_date)
      },
      {
        title: 'Пол',
        description: userData.gender
      },
      {
        title: 'Электронная почта',
        description: userData.email

      },
    ]
    const outputPassword =  {
      title: 'Пароль',
    }

  return (
      <>
    <li className={s.item__info} onClick={()=>setIsOpen(!isOpen)}>
      <span className={s.title__person_info}>Логотип</span>
      <div className={s.person__description}>
        <span className={s.person__info}>Добавте лого в аккаунт</span>
        <span className={s.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24">
            <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
          </svg>
        </span>
      </div>
    </li>

    {
        fieldsSettings.map(obj =>
            <li className={s.item__info} onClick={()=>setIsOpen(!isOpen)}>
                <span className={s.title__person_info}>{obj.title}</span>
                <div className={s.person__description}>
                    <span className={s.person__info}>{obj.description}</span>
                    <span className={s.arrow}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="white"
                          viewBox="0 0 24 24">
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                        </svg>
                    </span>
                </div>
            </li>
        )


    }
        <li className={s.item__info} onClick={()=>setIsOpen(!isOpen)}>
          <span className={s.title__person_info}>Пароль</span>
          <div className={s.person__description}>
            <span className={s.person__info}>*******</span>
            <span className={s.arrow}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24">
                <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
              </svg>
            </span>
          </div>
        </li>


      </>
  )
}
export default UserInfoItem
