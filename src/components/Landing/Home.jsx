import React from 'react';
import online from '../images/online.jpg';
import Common from './Common';

const Home = () => {
	return (
		<div>
			<Common
				name="Non c'è fine. Non c'è inizio. C'è solo l'infinita passione per"
				imgsrc={online}
				isCompName={true}
				compName="Film'S"
				visit="/"
				btnname="Inizia ora"
			/>
		</div>
	);
};

export default Home;
