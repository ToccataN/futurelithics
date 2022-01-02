import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ServiceCard from '../../components/shared/ServiceCard';

const ServicePage = (props) => {
	console.log(props, "servicePage pr!");
	const { routes, info, history } = props;

	return (
		<div className="custom-layer-bg">
			<div className="container pt-4">
				<div className="subheader py-4 mb-4 text-center mx-auto w-50">
				  <h2 className="mb-3 text-center text-primary-data">{info.title}</h2>		  
				  <p className="text-secondary"><strong>{info.description}!!!</strong></p>
			  </div>				
			</div>

		  <div className="container p-y w-100 row justify-content-between mx-auto">


		  	{
		  		routes != undefined && routes.map((route) => {
		  				return <ServiceCard  card={route} key={route.name} />
		  		})
		  	}
		  </div>
		  <div className="container text-center pt-4">
		    <button className="btn btn-info" onClick={() => history.goBack()}>
					Go Back
				</button>
		  </div>
		</div>
	);
}

ServicePage.propTypes = {
	routes: PropTypes.array,
	info: PropTypes.object,
	history: PropTypes.object
}

export default withRouter(ServicePage);