import React from 'react';
import {withRouter} from 'react-router-dom';
import { mainRoutes } from '../../../routes';
import ServiceCard from '../../layouts/ServiceCard';

import NodeGraphic2 from '../../../assets/images/NodeGraphic2.svg';

const ServiceSection = (props) => {
	console.log(props, "props!");
	return (
		<div className="custom-node-bg">
		  <div className="transition-layer-node">
		  	<img src={NodeGraphic2} /> 
		  </div>
		  <h3 className="py-4 text-center text-primary-data">Services</h3>
		  <div className="container p-y w-100 row justify-content-between mx-auto">
		  	{
		  		mainRoutes.cards.map((card) => {
		  			return <ServiceCard card={card} key={card.name} />
		  		})
		  	}
		  </div>		  	
		</div>
	);
}

export default withRouter(ServiceSection);