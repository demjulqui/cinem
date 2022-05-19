import React from 'react';
const Card = ({ imgsrc, title, text }) => {
	return (
		<div>
			<div className="col-md-4 col-10 mx-auto">
				<div className="card">
					<img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
					<div className="card-body">
						<h4 className="card-title">{title}</h4>
						<p className="card-text">{text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
