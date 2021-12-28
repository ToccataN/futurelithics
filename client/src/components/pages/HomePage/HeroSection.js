import React from 'react';

import CircuitLogo1 from '../../../assets/images/CircuitLogo1.svg';

const HeroSection = () => {
	return (
		<div className="custom-radial-bg py-4">
			<div className="container py-4">
				<div className="row justify-content-between">
					<div className="col-md-5 text-secondary px-4 m-4">
						<div className="hero-card my-4 mx-auto p-4 d-flex flex-column justify-content-between">
						  <div className="mb-4">
								<h2 className="mb-4">Let’s get started building your vision today.</h2>
								<h6>
									Look through services offered below, or schedule a consultation if you require a custom solution.
								</h6>
							</div>
							<a href="#" className="btn btn-primary"><strong className="text-warning">Schedule Consultation</strong></a>
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