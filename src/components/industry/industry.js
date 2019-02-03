import React, { Component } from 'react';
import Chart from "chart.js";
import "./industry.css";

class Industry extends Component {

  render() {

    const ctx = "progressBar";
    const myChart = new Chart(ctx, {
      type: 'horizontalBar',
      labels: ["Category 1", "Category 2", "Category 3", "Interview 4", "Category 5", "Category 6", "Category 7"],
      data: {
        datasets: [
          {
            fill:false,
            borderColor: "rgb(25,25,112)",
            borderWidth: 1,
            data: this.props.regionalTrends
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{ticks: {mirror: true}}]
        }
      }

    })

    return(
      <div>
       <p className="title">Industries Employing {this.props.occupationTitle} </p>
       <hr style={{borderWidth:"3px"}}/>

       <canvas id="progressBar"></canvas>

      </div>
    )
  };
};

export default Industry;
