import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
	LineChartComponent
} from '../../charts/line';

import DesktopTable from '../../tables/DesktopTable';
import MobileTable from '../../tables/MobileTable';
import SelectInput from '../../shared/SelectInput';

const options = {
	colorScheme: [
		{ value: 'default', key: "Default Colors", highlight: '#25DD87', scheme: 'Dark2' },
		{ value: 'second', key: "Category 10", highlight: '#F8BA42', scheme: 'Category10' },
		{ value: 'tableau', key: "Tableau 10", highlight: '#d82340', scheme: 'Tableau10' }
	]
}

const LineChartInterface = (props) => {

	const { data, info } = props;

	const [ stateData, setStateData ] = useState([...data]);

	const [ colorScheme, setColorScheme] = useState(options.colorScheme[0]);

	const colorSetter = (value) => {
		const color = options.colorScheme.filter((c) => c.value == value)[0];
		setColorScheme(color);
	}

	const componentOptions = {
		colorScheme,
		containerId: 'line-div-1',
		width: 600,
	  height: 300
	}

	const stillData = [...data.map((d) => d)];

	return (
		<div className="bar-chart-container container my-4" >
		  <div className="p-4 ash-container my-2">
				<h5>{info.title}</h5>
				<div className="col-md-3 py-2">
			  	<SelectInput options={options.colorScheme} value={colorScheme.value} handler={colorSetter} />
			  </div>
				<LineChartComponent options={componentOptions} data={stillData} />
			</div>
			<div className="text-center p-4 ash-container my-4 d-none d-md-block">
		  	<DesktopTable  data={stateData} type={'double'} />
		  </div>
		  <div className="text-center p-4 ash-container my-4 d-block d-md-none">
		  	<MobileTable  data={stateData} type={'double'} />
		  </div>
		</div>
	)
}

LineChartInterface.propTypes = {
	data: PropTypes.any,
	info: PropTypes.any
}

export default LineChartInterface;