import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import BaseChart from '../BaseChart';

const parseTime = d3.timeParse("%Y-%m-%d");
const formatTime = d3.timeFormat("%Y-%m-%d");

class AreaChart extends BaseChart {
		constructor(options){
		super(options);
		
		this.colorFxn = d3.scaleOrdinal(d3[`scheme${options.colorScheme.scheme}`]);
		this.createTooltip();

		this.curve = d3[`${options.curve}`] || d3.curveLinear;

		this.duration = 1000;

		this.selectedLine = null;
	}

	dataHtml(d){
		return `
	    Category: <strong class="text-primary">${this.categories[d]}</strong> <br />
	  `;
	} 

	displayTooltip(e, d){
	  
    this.targetBar = d3.select(event.currentTarget);

    this.tooltip.transition()		
	    .duration(200)		
	    .style("opacity", .9);

	  this.tooltip.html(this.dataHtml(d))
      .style("left", (e.pageX + 10) + "px")		
      .style("top", (e.pageY - 30) + "px");
	}

  hideTooltip(e){

  	this.targetBar = d3.select(event.currentTarget);

    this.tooltip.transition()		
	    .duration(200)		
	    .style("opacity", 0);
  }

  reColorElements(){
		d3.selectAll(".chart-lines")
		  .transition()
		  .duration(this.duration / 2)
		  .style("stroke", (line) => this.colorFxn(line[1][0].x2))
		  .style("fill", "none")
		  .style("opacity", 1);

		d3.selectAll(".chart-circles")
		  .transition()
		  .duration(this.duration / 2)
		  .style("fill", '#90f1c4')
		  .style("stroke", "none")
		  .style("opacity", 1);
  }

  displayData(data){

  	const newData = [...data].map( (d) => {
      return {x: parseTime(d.x), y: d.y, x2: d.x2};
    });

    this.times = newData.map((d) => d.x);
    this.categories = newData.map( d => d.x2);
    this.vals = newData.map( d => d.y);

    const keys = new d3.InternSet( this.categories );

    const range = d3.range(this.times.length);

    const nestData = d3.rollup(range, ([r]) => r, (r) => this.times[r], (r) => this.categories[r] );

    const stack = d3.stack()
      .keys(keys)
      .value( ([k, m], key) => this.vals[m.get(key)] )
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetDiverging)

    this.mappedSeries = stack(nestData).map( series =>{ 
    	return series.map( (d) => {
    	  return Object.assign(d, {i: d.data[1].get(series.key) }) 
    	}) 
    })
		
  	this.setScalesAndAxis();
  	this.setInitialAreas();
  }

  setScalesAndAxis(){

  	this.scaleX = d3.scaleTime()
		  .domain(d3.extent(this.times, (d) => d ))
  	  .range([ this.margins.left, this.dimensions.innerWidth ] );

  	
  	const yDomain = d3.extent(this.mappedSeries.flat(2));

  	this.scaleY = d3.scaleLinear()
  	  .domain([yDomain[0], yDomain[1] * 2 ])
  	  .range([this.dimensions.innerHeight, 0])

  	this.axisX = d3.axisBottom(this.scaleX).ticks(12);

  	this.axisY = d3.axisLeft(this.scaleY).ticks(6);

  	this.axisXGrid = d3.axisBottom(this.scaleX).ticks(12).tickFormat("").tickSize(-this.dimensions.innerHeight + this.margins.top);
  	this.axisYGrid = d3.axisLeft(this.scaleY).ticks(6).tickFormat("").tickSize(-this.dimensions.innerWidth + this.margins.left );  	

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

  setInitialAreas(){

	  this.area = this.mainGroup.append("g")
	    .attr("transform", `translate(${0}, -${this.margins.bottom})`)
	    .selectAll("path")
	    .data(this.mappedSeries)
	    .join("path")
	      
	  this.area
      .attr("fill", ([{i}]) => this.colorFxn(this.categories[i]))
      .attr("d", (d) => this.drawArea(d, true, false))
      .transition()
      .duration(this.duration)
      .attr("d", (d) => this.drawArea(d, true, true))

	  this.area
	  	.on('mouseover', (e, [{i}]) => this.displayTooltip(e, i) )
	  	.on('mouseout', (e) => this.hideTooltip(e) )
	  	.on('touchstart', (e, d, i) => this.displayTooltip(e, d, i) )
	  	.on('touchend', (e) => this.hideTooltip(e) )
	  

  }

  drawArea(data, boolX = true, boolY = true){
  	return d3.area()
  	  .x(({i}) => boolX ? this.scaleX(this.times[i]) : this.scaleX( this.scaleX.domain()[0] ) )
  	  .y0(([y]) => boolY ? this.scaleY(y) : this.scaleY(0) )
  	  .y1(([,y2]) => boolY ? this.scaleY(y2) : this.scaleY(0) )
  	  .curve(this.curve)(data)
  }
}

const AreaChartComponent = (props) => {

	const { data, options } = props;

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
  	const chart = new AreaChart(getOptions); 
    chart.createChart();
	  chart.displayData(data)
  }, [options])

	return (
		<div>
			<div id={getOptions.containerId} className="chart-viewbox"></div>
		</div>
	)
}

AreaChartComponent.propTypes = {
	data: PropTypes.any,
	options: PropTypes.any
}

export default AreaChartComponent;
