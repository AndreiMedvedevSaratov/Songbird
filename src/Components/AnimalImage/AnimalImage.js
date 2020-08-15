import React from 'react'
import './AnimalImage.css'

export default function AnimalImage(props) {
	return <img src={props.src} className='animal_image' alt='Animal' />
}