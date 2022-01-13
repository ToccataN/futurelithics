import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BarChartComponent from '../../charts/BarChart';
import DesktopTable from '../../tables/DesktopTable';
import SelectInput from '../../shared/SelectInput';

const options = {
	orientation: [
	  { value: 'landscape', key: "Landscape"},
		{ value: 'portriat', key: "Portriat"},
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

	const [ orientation, setOrientation] = useState(options.orientation[0].value)
	const [ chartType, setChartType] = useState(options.chartType[0]);

	const componentOptions = {
		orientation,
		containerId: 'bar-divy-1',
		width: 600,
	  height: 300
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
		  	<DesktopTable  data={defaultData} />
		  </div>
		</div>
	);
}

BarChartInterface.propTypes = {
	data: PropTypes.any,
	info: PropTypes.any
}

export default BarChartInterface;