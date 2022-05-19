import React from 'react';
import online from '../images/online.jpg';
import Common from './Common';

const HomeLanding = () => {
	return (
		<div>
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
