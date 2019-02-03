import React, { Component } from 'react';
import Chart from "chart.js";

import "./graph.css";

class Graph extends Component {

  render() {

    const ctx = "graph";
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["2001", "2003", "2005", "2007", "2009", "2011", "2013", "2015", "2017","2019", "2021", "2023", "2025"],
          datasets: [
            {
              fill:false,
              borderColor: "rgb(25,25,112)",
              borderWidth: 1,
              data: this.props.regionalTrends
            },
            {
              fill:false,
              borderColor: "rgb(0,0,255)",
              borderWidth: 1,
              data: this.props.stateTrends,
            },
            {
              fill:false,
              borderColor: "rgb(0,191,255)",
              borderWidth: 1,
              data: this.props.nationTrends,
            }
          ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                min: -20,
                max: 70
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage Change"
              }
            }
          ]
        }
      }
    });

    return(
      <div>
        <p className="title">Regional Trends</p>
        <hr style={{borderWidth:"3px"}}/>
        <canvas id="graph"></canvas>
      </div>
    )
  };
};

export default Graph;
