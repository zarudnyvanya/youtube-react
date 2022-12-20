
import s from './SubscribeItem.module.scss'
import userLogo from '../../assets/svg__header/user.png'
const SubscribeItem = ( {image,nameChanel} )=>{

    return(
            <li className={s.subscription__item}>
                <img src={image ? image : userLogo } alt=' '/>
                <p title={nameChanel}>{nameChanel}</p>
            </li>
    )
}


export default SubscribeItem