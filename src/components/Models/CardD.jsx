import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

export default function MediaControlCard(props) {
	const theme = useTheme();

	return (
		<Container>
			<Card style={{ width: '100%' }}>
				<Card sx={{ display: 'flex' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Row>
								<Col>
									<Typography component="div" variant="h5">
										{props.title}
									</Typography>

									<Typography component="div" variant="subtitle1">
										{props.overview}
									</Typography>
								</Col>
								<Col>
									<Typography variant="subtitle1" color="text.secondary" component="div">
										{props.release_date}
									</Typography>
								</Col>
							</Row>
						</CardContent>
					</Box>
					<Figure.Image width={210} height={100} src={props.poster} alt={props.title} />
				</Card>
			</Card>
		</Container>
	);
}
