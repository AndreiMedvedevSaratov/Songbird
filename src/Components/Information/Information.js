import React from 'react'
import './Information.css'
import AnimalImage from '../AnimalImage/AnimalImage'
import Player from '../Player/Player'

export default function Information(props) {
	return (
		<section className="information">
			<p style={{ marginLeft: 20 }} className={props.classHint}>{props.hint}</p>
			<div className={props.classDescription}>
				<div style={{ display: 'flex', padding: 20 }}>
					<AnimalImage src={props.image} />
					<div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', alignItems: 'center' }}>
						<h3>{props.name}</h3>
						<hr />
						<span>{props.latin}</span>
						<hr />
						<Player src={props.audio} />
					</div>
				</div>
				<p style={{ margin: '0 20px 0 20px' }}>{props.description}</p>
			</div>
		</section>
	)
}