import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import BarChartInterface from '../../components/pages/ChartPages/BarChartInterface';

const chartSwitch = (chart, info) => {
	switch(chart){
		case 'bar-chart':
			return (<BarChartInterface info={info}/>);
		default:
			return (<BarChartInterface info={info} />);
	}
}

const ChartPage = (props) => {
	const { info, history } = props;

	return (
		<div className="chart-page">
		  <div className="container">
		  	{chartSwitch(info.chart, info)}
		  </div>
		  <div className="container text-center pt-4">
		    <button className="btn btn-info" onClick={() => history.goBack()}>
					Go Back
				</button>
		  </div>
		</div>
	);
}

ChartPage.propTypes = {
	info: PropTypes.object,
	history: PropTypes.object
}

export default withRouter(ChartPage);