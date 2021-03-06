import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

const Services = () => {
	return (
			<div>
			<Navbar />
			<div className="my-5">
				<h1 className="text-center">I tuoi servizi</h1>
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-4">
							{ServiceData.map((val, index) => {
								return <Card imgsrc={val.imgsrc} title={val.title} text={val.text} key={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
		
	);
};

export default Services;
