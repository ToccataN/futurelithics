import React from 'react';
import {withRouter} from 'react-router-dom';
import { mainRoutes } from '../../../routes';
import ServiceCard from '../../shared/ServiceCard';

import NodeGraphic2 from '../../../assets/images/NodeGraphic2.svg';

const ServiceSection = () => {
	return (
		<div className="custom-layer-bg">
		  <div className="transition-layer-node">
		  	<img src={NodeGraphic2} /> 
		  </div>
		  <h3 className="py-4 text-center text-primary-data">Services</h3>
		  <div className="container p-y w-100 row justify-content-between mx-auto">
		  	{
		  		mainRoutes.cards.map((route) => {
		  			return <ServiceCard card={route} key={route.name} />
		  		})
		  	}
		  </div>
		</div>
	);
}

export default withRouter(ServiceSection);