import React from 'react';
import online from '../images/online.jpg';
import Common from './Common';
import Navbar from './Navbar';
import Trend from '../../Pages/Trend';
import { Link } from 'react-router-dom';

const HomeLanding = () => {
	return (
		<div>
			<Navbar />
			<Common
				name="Non c'è fine. Non c'è inizio. C'è solo l'infinita passione per"
				imgsrc={online}
				isCompName={true}
				compName="Film'S"
				visit="/Trend"
				btnname="Inizia ora"
			/>
		</div>
	);
};

export default HomeLanding;
