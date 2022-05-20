import React from 'react';
import scrittablu from '../images/scrittablu.png';
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
				imgsrc={scrittablu}
				isCompName={true}
				compName="Film'S"
				visit="/Trend"
				btnname="Inizia ora"
			/>
		</div>
	);
};

export default HomeLanding;
