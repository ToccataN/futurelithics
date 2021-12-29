import React from 'react';

import HeroSection from '../../components/pages/HomePage/HeroSection';
import ServiceSection from '../../components/pages/HomePage/ServiceSection';

export const Home = () => {
	return (
	  <React.Fragment>
	  	<HeroSection />
	  	<ServiceSection />
	  </React.Fragment>
	);
}