import { useEffect } from 'react';

import * as d3 from 'd3';

const buildRadial = (num, id) => {

  var container = d3.select(`#${id}`);
  container.selectAll(`#${id} > *`).remove();

  let svg = container.append("svg")
	.attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 250 225");

  let width = svg.node().getBoundingClientRect().width;

  let g = svg.append("g")
    .attr("width", "200px")
    .attr("transform", "translate(" + (width/ 2) + ", 125)");
  
  const radius = 100;

  const color = d3.scaleDiverging().range(["lightgreen", "red"]).domain([0, 100]);

  var arc = d3.arc()
    .innerRadius(radius * 0.8)
    .outerRadius(radius)



  var data = new Array(100).fill(1);
  var pie = d3.pie()
    .sort(null)
     .startAngle(-0.75 * Math.PI)
    .endAngle(0.75 * Math.PI)
    .value((d) => d)(data);

  console.log(data, "ddaamn")

   g.selectAll('pathSlices')
    .data(pie)
    .enter()
    .append('path')
    .attr('d', arc)  
    .attr("fill", (d, i) => {
    	console.log(i < num)
    	return i < num ? color(i) : "grey";
    })
    .attr("stroke", "black")
    .attr("transform", "translate(0, -5)");

  g.append("foreignObject")
    .attr("width", "120px")
    .attr("height", "80px")
    .attr("x", -55)
    .attr("y", -50)
    .append("xhtml:div")
    .html(`<h4 style="font-size: 42pt;">${ parseInt(num) }%</h4>`)

}

const Radial = (props) => {
  
  const id = props.id;
  const data = props.data
  
  useEffect(() => {
  	buildRadial(data, id);
  	console.log(data);
  },[])
  
  
  return (
    <div style={{width: "250px", margin: "0 auto"}}>
      <div id={id} width="250px"></div>
      <h4 className="text-center mt-0">{props.title}</h4>
    </div>    
  )
}

export default Radial;