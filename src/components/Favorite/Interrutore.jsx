import React, { useState, useEffect } from 'react';
import { styled } from '@mui/styles';
import { Button } from '@mui/material';
import styledComponents from 'styled-components';

//creo una funzione che mi permette di salvare y creare una variabile che mi permette di salvare il valore della variabile
//a fianco mi permette di vedere il valore della variabile

class Interruttore extends React.Component {
	constructor(props) {
		super(props);
		this.state = { acceso: true };

		// Necessario per accedere al corretto valore di `this` all'interno della callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			acceso: !prevState.acceso
		}));
	}

	render() {
		return <MyButton onClick={this.handleClick}>{this.state.acceso ? 'Acceso' : 'Spento'}</MyButton>;
	}
}

export default Interruttore;

const MyButton = styled(Button)({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	height: 48,
	padding: '0 30px'
});
