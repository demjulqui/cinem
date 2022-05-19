import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import React, { useState, useEffect } from 'react';
import Preferiti from '../Favorite/Preferiti';

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
	const [ cartItems, setCartItems ] = useState(0);
	const [ favItems, setFavItems ] = useState(0);
	const [ cart, setCart ] = useState([]);
	const [ fav, setFav ] = useState([]);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader subheader={props.release_date} />
			<CardMedia component={'img'} image={props.image} alt={props.title} />
			<CardContent />
			<CardActions>
				<h>{props.title ? props.title : 'Titolo non disponibile'}</h>
			</CardActions>
		</Card>
	);
}
