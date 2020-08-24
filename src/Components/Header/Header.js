import React from 'react'
import './Header.css'
import Logotip from '../Logotip/Logotip'
import Result from '../Result/Result'

export default function Header(props) {
	console.log('2= ' + props.score);
	return (
		<header className="header">
			<Logotip />
			<Result score={props.score} />
		</header>
	)
}