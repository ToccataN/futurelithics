import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ServiceCard from '../../components/shared/ServiceCard';

const ServicePage = (props) => {
	console.log(props, "servicePage pr!");
	const { routes, info, history } = props;

	return (
		<div className="custom-layer-bg service-page mt-4">
			<div className="container pt-4">
				<div className="subheader p-4 mb-4 text-center mx-auto w-sm-75 w-xs-100">
				  <h2 className="mb-3 text-center text-primary-data">{info.title}</h2>		  
				  <p><strong>{info.description}</strong></p>
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