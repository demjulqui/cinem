import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Container } from '@mui/material';

export default function Footer() {
	return (
		<MDBFooter class = 'footer' className="text-center text-lg-start text-muted" style={{ backgroundColor: '#3498db' }}>
			<div>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-facebook-f" />
				</a>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-twitter" />
				</a>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-google" />
				</a>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-instagram" />
				</a>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-linkedin" />
				</a>
				<a href="" className="me-4 text-reset">
					<a className="fab fa-github" />
				</a>
			</div>
			<section className="">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div  className="text-center col-md-3 col-lg-4 col-xl-3 mb-4">
							<h6 className="text-uppercase fw-bold mb-4" style={{ color: 'white' }}>
								
								Company name
							</h6>
							
							<img
								class ="logo"
								src="https://cdn.discordapp.com/attachments/973882360368074804/977139742195974164/solobordoblu.png"
								alt="FilmS"
		
							/>
							
						</div>

						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4" style={{ color: 'white' }}>
								Products
							</h6>
							<p>
									<p style={{ color: 'white' }}>JavaScript</p>
									<p style={{ color: 'white' }}>React</p>
									<p style={{ color: 'white' }}>Bootstrap</p>
									<p style={{ color: 'white' }}>Material Design for Bootstrap</p>
								
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4" style={{ color: 'white' }}>
								Contact
							</h6>
							<p style={{ color: 'white' }}>
								<i className="fas fa-home me-3" /> Italia
							</p>
							<p style={{ color: 'white' }}>
								<i className="fas fa-envelope me-3" />
								Films@info.com
							</p>
							<p style={{ color: 'white' }}>
								<i className="fas fa-phone me-3" /> Alessio Guidotti
							</p>
							<p style={{ color: 'white' }}>
								<i className="fas fa-print me-3" /> Demerson Julio Quiroz
							</p>
							<p style={{ color: 'white' }}>
								<i className="fas fa-print me-3" /> Lorenzo Bucci
							</p>
							
						</div>
					</div>
				</div>
			</section>

			<div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: 'white' }}>
				© 2022 Copyright: Film'S
				<a className="text-reset fw-bold" href="https://mdbootstrap.com/" />
			</div>
		</MDBFooter>
	);
}
