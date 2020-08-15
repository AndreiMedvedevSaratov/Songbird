import React from 'react'
import './Quiz.css'
import AnimalImage from '../AnimalImage/AnimalImage'
import AudioPlayer from '../AudioPlayer/AudioPlayer'

export default function Quiz(props) {
	return (
		<div className="quiz">
			<AnimalImage src={props.image} />
			<div style={{ display: 'flex', flex: 'auto' }}>
				<h2 style={{ textAlign: 'center' }}>{props.name}</h2>
				<AudioPlayer src={props.audio} toPlay={props.toPlay} />
			</div>
		</div>
	)
}