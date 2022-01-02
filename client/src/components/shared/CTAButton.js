import React from 'react';
import PropTypes from 'prop-types';

const CTAButton = (props) => {

	const { url, innerText } = props;

	return (
		<a href={url} className="btn cta-button"><strong className="text-warning">{innerText}</strong></a>
	)
}

CTAButton.propTypes = {
	url: PropTypes.string,
	innerText: PropTypes.string
}

export default CTAButton;