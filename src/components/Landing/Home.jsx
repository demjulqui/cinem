import React from 'react';
import scrittablu from '../images/scrittablu.png';
import Common from './Common';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

const HomeLanding = () => {
	return (
		<div>
			<Navbar />
			<Common
				name="Non c'è fine. Non c'è inizio. C'è solo l'infinita passione per"
				imgsrc={scrittablu}
				isCompName={true}
				compName="Film'S"
				visit="/Login"
				btnname="Inizia ora"
			/>
			<Footer />
		</div>
	);
};

export default HomeLanding;
