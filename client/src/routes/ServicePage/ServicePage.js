import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const ServicePage = (props) => {
	console.log(props, "servicePage pr!");
	const { info, history } = props;

	return (
		<div className="custom-layer-bg service-page mt-4">
			<div className="container pt-4">
				<div className="subheader p-4 mb-4 text-center mx-auto w-sm-75 w-xs-100">
				  <h2 className="mb-3 text-center text-primary-data">{info.title}</h2>		  
				  <p><strong>{info.description}</strong></p>
			  </div>				
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
	info: PropTypes.object,
	history: PropTypes.object
}

export default withRouter(ServicePage);