import React, { Component } from 'react';
import Chart from "chart.js";

import "./graph.css";

class Graph extends Component {

  render() {
    const ctx = "graph";
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              fill:false,
              borderColor: "rgb(112, 25, 25)",
              borderWidth: 2,
              data: this.props.regionalTrends
            },
            {
              fill:false,
              borderColor: "rgb(0,0,255)",
              borderWidth: 2,
              data: this.props.stateTrends,
              pointStyle:'rect'
            },
            {
              fill:false,
              borderColor: "rgb(0,191,255)",
              borderWidth: 2,
              data: this.props.nationTrends,
              borderDash: [10,5],
              pointStyle:'triangle'

            }
          ]
      },
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                min: -10
                // max: 70
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
