import React from 'react'
import './Choices.css'
import animalsInfo from '../../Assets/Data/animalsInfo'

export default function Choices(props) {

	const choices = animalsInfo[props.currentTabNum].map((arr, index) => {
		return (
			<div key={index} data-index={index} className="choice" onClick={props.onClick}>
				<div className={props.mistakes[index]}></div>
				<span>{arr.name}</span>
			</div>
		)
	})

	return (
		<div className="choice" onClick={props.onTap}>
			{choices}
		</div>
	)
}