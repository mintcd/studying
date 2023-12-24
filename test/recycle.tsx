
// 'use client'

// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import 'katex/dist/katex.min.css';
// import Latex from 'react-latex-next'; // Import BlockMath component

// const ForceDirectedGraph = () => {
//   const svgRef = useRef(null);
//   const [cx, setCx] = useState(0);


//   useEffect(() => {
//     const width = 928;
//     const height = 600;
//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     const data = {
//       nodes: [
//         { id: "Myriel", group: 1, pos: 300 },
//         { id: "Napoleon", group: 1, pos: 500 },
//         { id: "Mlle.Baptistine", group: 1 },
//         // { id: "Mme.Magloire", group: 1 },
//         // { id: "CountessdeLo", group: 1 },
//         // { id: "Geborand", group: 1 },
//         // { id: "Champtercier", group: 1 },
//         // { id: "Cravatte", group: 1 },
//         // { id: "Count", group: 1 },
//         // { id: "OldMan", group: 1 },
//         // { id: "Labarre", group: 2 },
//       ],
//       links: [
//         // { source: "Napoleon", target: "Myriel", value: 1 },
//         // { source: "Mlle.Baptistine", target: "Myriel", value: 8 },
//         // { source: "Mme.Magloire", target: "Myriel", value: 10 },
//         // { source: "Mme.Magloire", target: "Mlle.Baptistine", value: 6 },
//         // { source: "CountessdeLo", target: "Myriel", value: 1 },
//         // { source: "Geborand", target: "Myriel", value: 1 },
//         // { source: "Champtercier", target: "Myriel", value: 1 },
//         // { source: "Cravatte", target: "Myriel", value: 1 },
//         // { source: "Count", target: "Myriel", value: 2 },
//         // { source: "OldMan", target: "Myriel", value: 1 },
//       ],
//     };

//     const links = data.links.map((d) => ({ ...d }));
//     const nodes = data.nodes.map((d) => ({ ...d }));

//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id((d) => d.id))
//       .force("charge", d3.forceManyBody())
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collide", d3.forceCollide(30))
//       .on("tick", ticked);

//     const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     const link = svg.append("g")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .selectAll()
//       .data(links)
//       .join("line")
//       .attr("stroke-width", (d) => Math.sqrt(d.value))
//       .attr("marker-end", "url(#arrowhead)");

//     const node = svg
//       .append("g")
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5)
//       .selectAll()
//       .data(nodes)
//       .join("circle")
//       .attr("r", 50)
//       // .attr("fx", 200)
//       .attr("fill", (d) => {
//         console.log(d.cx)
//         setCx(d.x)
//         return color(d.group)
//       })

//     const text = svg
//       .append("g")
//       .selectAll()
//       .data(nodes)
//       .join("foreignObject")
//       .attr("text-anchor", "middle")
//       .attr("alignment-baseline", "middle")
//       .attr("x", (d) => {
//         return d.x

//       })
//       //   .attr("y", d => d.cy)
//       .attr("width", 50) // Adjust the width of the foreignObject to accommodate the label
//       .attr("height", 50)

//       .append("xhtml:div")
//       .style("width", "auto")
//       .style("height", "auto")
//       .style("display", "flex")
//       .style("justify-content", "center")
//       .style("align-items", "center")
//       .html(`<div>Hello</div>`);


//     // const text = svg
//     //   .append("g")
//     //   .selectAll()
//     //   .data(nodes)
//     //   .join("text")

//     //   .attr("fill", "white")
//     //   .style("font-size", "14px")
//     //   .text("Hello");



//     function ticked() {
//       link
//         .attr("x1", (d) => d.source.x)
//         .attr("y1", (d) => d.source.y)
//         .attr("x2", (d) => d.target.x)
//         .attr("y2", (d) => d.target.y);

//       node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
//       text.attr("x", (d) => d.x).attr("y", (d) => d.y);
//     }

//     return () => simulation.stop();
//   }, []);

//   return <svg ref={svgRef}></svg>;
// };

// export default ForceDirectedGraph;