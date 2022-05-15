import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest
	})
}));
//aggiungo delle props
export default function RecipeReviewCard(props) {
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	//creo funzione per aggiungere al carrello il prodotto selezionato e aggiornare il numero di prodotti nel carrello
	const addToCart = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			if (cart.includes(id)) {
				cart.splice(cart.indexOf(id), 1);
			} else {
				cart.push(id);
			}
		} else {
			cart.push(id);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		props.setCart(cart);
		props.setCartItems(cart.length);
	};

	//faccio una funzione che mi permette di salvare i preferiti
	const addToFav = (id) => {
		const fav = JSON.parse(localStorage.getItem('fav'));
		if (fav) {
			if (fav.includes(id)) {
				fav.splice(fav.indexOf(id), 1);
			} else {
				fav.push(id);
			}
		} else {
			fav.push(id);
		}
		localStorage.setItem('fav', JSON.stringify(fav));
	};
	//faccio una funzione che mi permette di vedere i preferiti
	const fav = JSON.parse(localStorage.getItem('fav'));
	const favItems = fav ? fav.length : 0;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				action={
					<IconButton aria-label="add to favorites" onClick={() => addToFav(props.id)}>
						<FavoriteIcon />
					</IconButton>
				}
				title={props.title}
				subheader={props.date}
			/>
			<CardMedia component={'img'} image={props.image} alt={props.title} />
			<CardContent />
			<CardActions disableSpacing>
				<IconButton aria-label="settings" onClick={() => addToCart(props.id)}>
					<ShoppingCartIcon />
				</IconButton>

				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{props.overview}
					</Typography>
					<Typography paragraph>Piu Info:</Typography>
					<Typography paragraph>Titutlo Originale: {props.original_title}</Typography>
					<Typography paragraph>Lingua Originale: {props.original_language}</Typography>
					<Typography paragraph>Voto: {props.vote_average}</Typography>
					<Typography paragraph>popularita: {props.popularity}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
