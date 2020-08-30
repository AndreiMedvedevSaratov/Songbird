import React from 'react'
import './Header.css'
import Logotip from '../Logotip/Logotip'
import Score from '../Score/Score'

export default function Header(props) {
	return (
		<header className="header">
			<Logotip />
			<Score score={props.score} />
		</header>
	)
}