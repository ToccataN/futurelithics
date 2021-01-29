const csv = require('csvtojson');

const parseOverviewData = (data) => {
  return newData = {
  	overall: getOverallAverage(data), 
  	productivity: null, 
  	costs: null, 
  	externalities: null, 
  	byDept: {} 
  };
}

const getOverallAverage = (data) => {
  var percentage = 0;
  for(let i = 0; i < data.length; i++){
	let segment = data[i];
        
    //three basic KPI measures
    let productivity = ( segment.productivity.goal / segment.productivity.current ) * 100;
    let costs = ( segment.costs.current / (segment.costs.goal || 1) ) * 100;
    let externalities = ( segment.externalities.current / (segment.externalities.goal || 1) ) * 100;

    //sensitivity constants to help normalize values
    let sum = ( (productivity * 0.1) + (costs * 0.1) + (externalities * 0.01) ) / 3;

    console.log(sum, "sum")

    percentage = ((sum + percentage ) / (i+1));

  }

  return percentage;
}

module.exports = {
	parseOverviewData
} 
