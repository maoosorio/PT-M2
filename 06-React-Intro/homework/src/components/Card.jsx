import React from 'react';

export default function Card(props) {
	// acá va tu código
	return <div>
		<button onClick={props.onClose}>X</button>
		<h1>{props.name}</h1>
		<h2>Min {props.min}</h2>
		<h2>Max {props.max}</h2>
		<img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen de clima" />
	</div>
};