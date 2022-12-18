
import s from './SubscribeItem.module.scss'

const SubscribeItem = ( {image,nameChanel} )=>{

    return(
            <li className={s.subscription__item}>
                <img src={image} alt=' '/>
                <p title={nameChanel}>{nameChanel}</p>
            </li>
    )
}


export default SubscribeItem