import React from 'react'
import './Tabs.css'

const tabsArr = [
	'Домашние животные',
	'Кошкообразные',
	'Копытные',
	'Обезьянки',
	'Пушистые',
	'Африканские'
]

export default function Tabs(props) {
	const tabs = tabsArr.map((name, index) => {
		return (
			<li key={index} className={'tabs_item' + (props.currentTabNum === index ? ' active' : ' passive')}>
				<span>{name}</span>
			</li>
		)
	})

	return (
		<ul className='tabs'>
			{tabs}
		</ul>
	)
}
