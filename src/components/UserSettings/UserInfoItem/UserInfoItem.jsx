import s from './UserInfoItem.module.scss'


const UserInfoItem = ({ title, description, isOpen,setIsOpen }) => {
  // console.log(title)
    console.log('userInfo ',isOpen)
  return (
    <li className={s.item__info} onClick={()=>setIsOpen(!isOpen)}>
      <span className={s.title__person_info}>{title}</span>
      <div className={s.person__description}>
        <span className={s.person__info}>{description}</span>
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
export default UserInfoItem
