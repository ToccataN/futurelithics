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
		{ value: 'bar', key: "Bar", table: 'single'},
		{ value: 'scaleBand', key: "Scale Band", table: 'double'},
		{ value: 'stacked', key: "Stacked Bar", table: 'double'},
	]
}

const BarChartInterface = (props) => {
	const { data, info } = props;

	const [ orientation, setOrientation] = useState(options.orientation[0].value)
	const [ chartType, setChartType] = useState(options.chartType[0]);

	const tableOptions = {
		type: chartType.table,
	}

	const chartSetter = (value) => {
		const chart = options.chartType.filter((c) => c.value == value)[0];
		setChartType(chart);
		tableOptions.type = chartType.table;
	}

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
				  <div className="col-md-2 py-2">
				  	<SelectInput options={options.orientation} value={orientation.value} handler={setOrientation} />
				  </div>
					<div className="col-md-2 py-2">
				  	<SelectInput options={options.chartType} value={chartType.value} handler={chartSetter} />
				  </div>	
				</div>
			  <BarChartComponent data={data} options={componentOptions} />
			</div>

		  <div className="text-center p-4 ash-container my-4">
		  	<DesktopTable  data={data} type={chartType.table} />
		  </div>
		</div>
	);
}

BarChartInterface.propTypes = {
	data: PropTypes.any,
	info: PropTypes.any
}

export default BarChartInterface;