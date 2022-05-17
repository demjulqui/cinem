import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

class Preferiti extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorite: false
		};
	}

	handleClick = () => {
		this.setState({
			isFavorite: !this.state.isFavorite
		});
	};

	render() {
		const { isFavorite } = this.state;
		return (
			<Button
				onClick={this.handleClick}
				variant="contained"
				color="primary"
				style={{
					margin: '0px 10px',
					backgroundColor: isFavorite ? '#ff0000' : '#ffffff',
					color: isFavorite ? '#ffffff' : '#ff0000'
				}}
			>
				{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
			</Button>
		);
	}
}

export default Preferiti;
