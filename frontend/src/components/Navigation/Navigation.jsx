import s from './Navigation.module.scss'

import {NavItem} from './../NavItem/NavItem'
import {NavItemMini} from './../NavItemMini/NavItemMini'
import {useEffect, useState} from 'react'
import doRequest from '../doRequest/doRequest'
import SubscribeItem from '../SubscribeItem/SubscribeItem'
import {useSelector} from 'react-redux'

import home from '../../assets/svg__aside/home.svg'
import explorer from '../../assets/svg__aside/explore.svg'
import library from '../../assets/svg__aside/library.svg'
import subscriptions from '../../assets/svg__aside/subscriptions.svg'


const navItems = [
	{
		id: 1,
		title: 'Главная',
		image: home,
	},
	{
		id: 2,
		title: 'Навигатор',
		image: explorer,
	},
	{
		id: 3,
		title: 'Подписка',
		image: subscriptions,
	},
	{
		id: 4,
		title: 'Библиотека',
		image: library,
	},
]

export const Navigation = () => {
	const userToken = useSelector((state) => state.user.userToken)
	const navIsOpen = useSelector((state) => state.navigation.navIsOpen)
	
	const [subPerson, setSubPerson] = useState([])
	
	useEffect(() => {
		if (userToken) {
			const apiRequest = async () => {
				const response = await doRequest('/api/v1/channel/follow/', userToken)
				const data = await response.json()
				
				setSubPerson(data)
			}
			apiRequest()
		}
	}, [userToken])
	
	return (
		<aside className={`${s.aside__nav}`}>
			<nav className={s.nav__list}>
				<ul className={s.nav__items}>
					{navIsOpen
						? navItems.map((item) => {
							return <NavItem key={item.id} item={item}/>
						})
						: navItems.map((item) => {
							return <NavItemMini key={item.id} item={item}/>
						})}
				</ul>
			</nav>
			
			{navIsOpen ? (
				<div className={s.wrapper__subscription}>
					<h1 className={s.title__sub}>Подписки</h1>
					<ul className={s.subscription__list}>
						{subPerson.map((obj) => {
							return <SubscribeItem image={obj.logo} nameChannel={obj.name} pkChannel={obj.pk}/>
						})}
					</ul>
				</div>
			) : (
				''
			)}
		</aside>
	)
}
