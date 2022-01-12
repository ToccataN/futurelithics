import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BarChartComponent from '../../charts/BarChart';
import SelectInput from '../../shared/SelectInput';

const options = {
	orientation: [
		{ value: 'portriat', key: "Portriat"},
		{ value: 'landscape', key: "Landscape"},
	],
	chartType: [
		{ value: 'bar', key: "Bar"},
		{ value: 'scaleBand', key: "Scale Band"},
		{ value: 'stacked', key: "Stacked Bar"},
	]
}

const BarChartInterface = (props) => {
	const { data, info } = props;

  const defaultData = [
	  {x: 'Category 1', y: 3},
	  {x: 'Category 2', y: 1},
	  {x: 'Category 3', y: 5},
	  {x: 'Category 4', y: 1},
	  {x: 'Category 5', y: 2}
	]

	const [ orientation, setOrientation] = useState(options.orientation[0])
	const [ chartType, setChartType] = useState(options.chartType[0]);

	const componentOptions = {
		orientation,
		containerId: 'bar-divy-1'
	}

	return (
		<div className="container my-4">
			<div className="p-4 ash-container my-2">
				<h5>{info.title}</h5>
				<div className="my-2 row justify-content-start">
				  <div className="col-md-3">
				  	<SelectInput options={options.orientation} value={orientation.value} handler={setOrientation} />
				  </div>
					<div className="col-md-3">
				  	<SelectInput options={options.chartType} value={chartType.value} handler={setChartType} />
				  </div>	
				</div>
			  <BarChartComponent data={defaultData} options={componentOptions} />
			</div>

		  <div className="text-center p-4 ash-container my-2">

		  </div>
		</div>
	);
}

BarChartInterface.propTypes = {
	data: PropTypes.any,
	info: PropTypes.any
}

export default BarChartInterface;