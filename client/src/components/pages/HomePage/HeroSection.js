import React from 'react';

import CircuitLogo1 from '../../../assets/images/CircuitLogo1.svg';
import CTAButton from '../../shared/CTAButton';

const HeroSection = () => {
	return (
		<div className="custom-radial-bg py-4">
			<div className="container py-4 my-4">
				<div className="row justify-content-between position-relative">
					<div className="col-md-5 col-sm-12 text-secondary px-4 m-0 m-md-4 pt-0 pt-sm-4">
						<div className="hero-card my-4 mx-auto p-4 d-flex flex-column justify-content-between">
						  <div className="mb-4">
								<h2 className="mb-4">Let’s get started building your vision today.</h2>
								<h6>
									Look through services offered below, or schedule a consultation if you require a custom solution.
								</h6>
							</div>
							<CTAButton url="#contact-section" innerText="Schedule Consultation" />
						</div>
					</div>
					<div className="d-sm-none d-none d-md-flex col-md-6 text-primary-data flex-column justify-content-center">
					  <div className="hero-image-container">
					  	<img src={CircuitLogo1} className="hero-image" />
					  </div>
					</div>
					<div className="d-md-none d-sm-block position-absolute text-primary-data hero-image-absolute">
					  <div className="hero-image-container">
					  	<img src={CircuitLogo1} className="hero-image" />
					  </div>
					</div>
				</div>
			</div>	
		</div>
	);
}

export default HeroSection;