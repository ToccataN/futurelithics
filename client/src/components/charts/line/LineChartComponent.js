import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import BaseChart from '../BaseChart';

const seasons = ['winter', 'spring', 'summer', 'fall'];

const determineSeason = (date) => {
	const month = new Date(date).getMonth();

	if([0,1,2].includes(month)){
		return 0;
	} else if([3,4,5].includes(month)){
		return 1;
	} else if([6,7,8].includes(month)){
		return 2;
	} else if([9,10,11].includes(month)){
		return 3;
	}
}

class LineChart extends BaseChart {
	constructor(options){
		super(options);
		
		this.colorFxn = d3.scaleOrdinal(d3[`scheme${options.colorScheme.scheme}`]);
		this.createTooltip();
	}

	createTooltip(){
		this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
		  .style("opacity", 0);
	}

	displayTooltip(e, d){
	  
    this.targetBar = d3.select(event.currentTarget);
    this.targetBar.style("fill", this.color)

    this.tooltip.transition()		
	    .duration(200)		
	    .style("opacity", .9);

	  const dataHtml = `Category: <strong class="text-primary">${d.x}</strong> <br /> 
	    Subcategory: <strong class="text-primary">${d.x2}</strong> <br /> 
	    Value: <strong class="text-primary">${d.y}</strong>`;

	  this.tooltip.html(dataHtml)
      .style("left", (e.pageX) + "px")		
      .style("top", (e.pageY - 30) + "px");
	}

  hideTooltip(e){

  	this.targetBar = d3.select(event.currentTarget);
  	this.targetBar.style("fill", (d) => this.colorFxn(d.x2) )

    this.tooltip.transition()		
	    .duration(200)		
	    .style("opacity", 0);
  }

  setScalesAndAxis(data){

  	this.scaleX = d3.scaleLinear()
		  .domain(d3.extent(data, (d) => d.x ))
  	  .range([this.margins.left, this.dimensions.innerWidth ] );

  	this.scaleY = d3.scaleLinear()
  	  .domain([0, d3.max(data, (d) => d.y) + 1])
  	  .range([this.dimensions.innerHeight, this.margins.bottom])

  	this.axisX = d3.axisBottom(this.scaleX).ticks(4).tickFormat( (d) =>{
  	  return seasons[d] 
  	});

  	this.axisY = d3.axisLeft(this.scaleY).ticks(5);

  	this.axisXGrid = d3.axisBottom(this.scaleX).ticks(4).tickFormat("").tickSize(-this.dimensions.innerHeight + this.margins.top);
  	this.axisYGrid = d3.axisLeft(this.scaleY).ticks(5).tickFormat("").tickSize(-this.dimensions.innerWidth + this.margins.left );  	

  	this.bottomAxis = this.mainGroup.append("g")
  	  .attr("class", "text-secondary")
  	  .attr("transform", `translate(${0}, ${this.dimensions.innerHeight - this.margins.bottom})`)
  		.call(this.axisX);

  	this.leftAxis = this.mainGroup.append("g")
  	  .attr("class", "text-secondary")
  	  .attr("transform", `translate(${this.margins.left}, -${this.margins.bottom})`)
  		.call(this.axisY);

  	this.bottomAxisGrid = this.mainGroup.append("g")
  	  .attr("class", "grid-lines")
  	  .attr("transform", `translate(${0}, ${this.dimensions.innerHeight - this.margins.bottom})`)
  		.call(this.axisXGrid);

  	this.leftAxisGrid = this.mainGroup.append("g")
  	  .attr("class", "grid-lines")
  	  .attr("transform", `translate(${this.margins.left}, -${this.margins.bottom})`)
  		.call(this.axisYGrid);

    d3.selectAll(".text-secondary .domain")
      .style("stroke", "#484641ff")
  }

  setInitialLines(data){

  	const nestData = d3.group(data, ( d )=> d.x2 );

  	console.log(nestData, 'nested!')

  	const line =  d3.line()
	  	.x( (d) => this.scaleX(d.x) )
	  	.y( (d) => this.scaleY(d.y) );

	  this.lines = this.mainGroup.append("g")
  	
  	this.lines.selectAll("path")
	  	  .data(nestData)
	  	  .join("path")
		  	  .attr("stroke", (d) => this.colorFxn(d[0]) )
		  	  .attr('fill', 'none')
	        .attr("stroke-width", 1.5)
		  	  .attr("d",(d) => line(d[1]) )
	  	  
/*	  this.lines
	      .transition()
	  	  .attr("width",(d) => this.scaleY(d.y) - this.margins.left )

	  this.lines.on("mouseover", (e, d) => this.displayTooltip(e, d) )
	  	  .on("mouseout", (e) => this.hideTooltip(e) )  
	  	  .on("touchstart", (e, d) => this.displayTooltip(e, d) )
	  	  .on("touchend", (e) => this.hideTooltip(e) )
*/	
  }

  displayData(data){

  	data = data.map((d) => {
  		const date = determineSeason(d.x);
  		d.x = date

  		return d;
  	})

  	this.setScalesAndAxis(data);
  	this.setInitialLines(data);
  }


}

const LineChartComponent = (props) => {

	const { data, options } = props;

	const [ dataArray, setDataArray ] = useState(data);

	const defaultOptions = {
    containerId: "line-chart",
    width: 600,
	  height: 300
	}

  const setOptions = (options) => {
		if(options == undefined){
			return defaultOptions;	
		} else {
			return options;
		}
  }

  const getOptions = setOptions(options);

  useEffect(()=>{
  	const chart = new LineChart(getOptions); 
    chart.createChart();
	  chart.displayData(dataArray)
  }, [options])

	return (
		<div>
			<div id={getOptions.containerId} className="chart-viewbox"></div>
		</div>
	)
}

LineChartComponent.propTypes = {
	data: PropTypes.any,
	options: PropTypes.any
}

export default LineChartComponent;