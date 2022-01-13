import React from 'react';
import PropTypes from 'prop-types';

const SingleCategory = (props) => {
	const { data } = props;

	const headers = [...new Set( data.map((d) => d.x ) )]

	const dataTable = {};

	for(let d = 0; d < data.length; d++){
		const datum = data[d];

		if(Object.keys(dataTable).includes(datum.x)){
			dataTable[datum.x].push(datum.y);
		} else {
			dataTable[datum.x] = [datum.y];
		}
	}

	let rows = 0;

	for(let header in dataTable){
    const len = dataTable[header].length;

    if(len > rows){
    	rows = len;
    }
	}

  const rowsArray = new Array(rows).fill(0);

  console.log(dataTable, "rowsArray", rows)

	return (
		<div className="desktop-table-single">
			<table className="table table-striped table-bordered">
				<thead>
				  <tr>
					{headers.map((h, i) => (<th key={`header-${i}`}>{h}</th>))}
					</tr>
				</thead>
				<tbody>
					{
						rowsArray.map((row, r) => {
							return (
								<tr key={`table-row-${r}`}>
									{
										headers.map((h) => {
											return (
												<td key={`cell-${h}`}>{dataTable[h][r] == undefined ? 'N/A' : dataTable[h][r]  }</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

SingleCategory.propTypes = {
	data: PropTypes.any,
	options: PropTypes.object
}

const DesktopTable = (props) => {
	
	const { data } = props;	

	return (
		<div className="desktop-table-container">
			<SingleCategory data={data} />
		</div>
	)
}

DesktopTable.propTypes = {
	data: PropTypes.any,
	options: PropTypes.object
}

export default DesktopTable;