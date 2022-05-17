import React, { useState, useEffect } from 'react';
import { styled } from '@mui/styles';
import { Button } from '@mui/material';
import styledComponents from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';

//creo una funzione che prenda un valore booleano della API e si e false non lo aggiunge al preferiti e quando premi il bottone lo fai
//diventare true e quindi aggiungere al preferiti
//uso una props per prendere il valore da altri componenti

/**const getListInfo = async () => {
    await fetch(`http://localhost:2000/${category}`)
        .then((response) => response.json())
        .then((data) => {
        setList(data);
    });
};
*/
const ListPreferiti = (props) => {
	const [ isFavorite, setIsFavorite ] = useState(false);

	useEffect(
		() => {
			setIsFavorite(props.isFavorite);
		},
		[ props.isFavorite ]
	);

	const handleClick = () => {
		setIsFavorite(!isFavorite);
		props.onClick(!isFavorite);
	};

	return (
		<ListPreferitiContainer>
			<Button variant="contained" color="primary" size="small" onClick={handleClick} startIcon={<FavoriteIcon />}>
				{isFavorite ? 'Preferito' : 'Aggiungi ai preferiti'}
			</Button>
			<Typography variant="h6">{props.title}</Typography>
		</ListPreferitiContainer>
	);
};

const ListPreferitiContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export default ListPreferiti;
