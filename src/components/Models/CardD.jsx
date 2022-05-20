import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

export default function MediaControlCard(props) {
	return (
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

								<Typography variant="subtitle1" color="text.secondary" component="div">
									{props.release_date}
								</Typography>
							</Col>

							<Col>
								<Figure.Image width={210} height={100} src={props.poster} alt={props.title} />
							</Col>
						</Row>
					</CardContent>
				</Box>
			</Card>
		</Card>
	);
}
