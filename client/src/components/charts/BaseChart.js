import * as d3 from 'd3';

const defaultOptions = {
	width: 600,
	height: 300
}

class BaseChart {

	constructor(options = defaultOptions){
    this.options = options;
		this.setDimensions();
		this.containerId = options.containerId;
    this.container = d3.select(`#${this.containerId}`);
  	this.container.selectAll("svg").remove();	
	}

  setDimensions(){
		this.height = this.options.height;
		this.width = this.options.width;	
  }

  createChart(){
  	this.svg = this.container.append("svg");

  	this.box = this.container.node().getBoundingClientRect();

  	this.margins = {
  		top: this.height / 15,
  		bottom: this.height / 15,
  		right: this.width / 30,
  		left: this.width / 30
  	}

  	this.dimensions = {
  		innerWidth: this.width - this.margins.left - this.margins.right,
  		innerHeight: this.height - this.margins.top - this.margins.bottom,
  	}

  	this.svg.attr("viewBox", `0 0 ${this.width} ${this.height}`)
  		.attr("preserveAspectRatio", "xMinYMin  meet")

    this.mainGroup = this.svg.append("g");

    this.mainGroup.attr("transform", `translate(${this.margins.left}, ${this.margins.top})`)
  }
}

export default BaseChart;