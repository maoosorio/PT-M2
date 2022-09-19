import React from 'react';

export default function SearchBar(props) {
	// acá va tu código
	return <div>
		<div>
			<input type="text" placeholder="Ciudad"/>
			<button onClick={() => props.onSearch('Mexico')}>Buscar</button>
		</div>
	</div>
};