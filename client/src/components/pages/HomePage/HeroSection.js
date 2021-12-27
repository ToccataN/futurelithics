import React from 'react';

import CircuitLogo1 from '../../../assets/images/CircuitLogo1.svg';

const HeroSection = () => {
	return (
		<div className="custom-radial-bg py-4">
			<div className="container py-4">
				<div className="row justify-content-between">
					<div className="col-md-6 text-secondary">
						<div className="">
							Hello! Ruh roh!!!
						</div>
					</div>
					<div className="col-md-6 text-primary">
						<img src={CircuitLogo1} className="hero-image" />
					</div>
				</div>
			</div>	
		</div>
	);
}

export default HeroSection;