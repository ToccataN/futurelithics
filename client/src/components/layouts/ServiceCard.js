import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = (props) => {
	const { card } = props;

	return (
		<div className="col-lg-4 col-md-12 px-4 my-2 d-flex justify-content-center">
			<div className="p-2 service-card">
				<div className="m-1 pb-2 service-card-inner">
					<div className="image-container">
						<img src={card.image.src} alt={card.image.alt} />
					</div>
					<h5 className="text-primary text-center py-3 mb-0">{card.title}</h5>
					<div className="mx-2 p-4 text-center description">
						<p>{card.description}</p>						
					</div>
				</div> 
			</div>
		</div>
	);
}

ServiceCard.propTypes = {
	card: PropTypes.object
}

export default withRouter(ServiceCard);