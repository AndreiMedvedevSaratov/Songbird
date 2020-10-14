import React from 'react'
import './ButtonNextLevel.css'

export default function ButtonNextLevel(props) {
	return <button
		className={'button' + (props.active ? ' button_active' : ' button_passive')}
		onClick={props.onClick}
	>{props.name}</button>
}