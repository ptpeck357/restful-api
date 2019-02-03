import React, { Component } from 'react';
import Chart from "chart.js";

import "./graph.css";

class Graph extends Component {

  render() {
    var ctx = "graph";

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["2001", "2003", "2005", "2007", "2009", "2011", "2013", "2015", "2017","2019", "2021", "2023", "2025"],
          datasets: [
            {
              label: "Data1",
              fill:false,
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(200,122,20,1)",
              data: [34, 24, 40, 55],
              displayColors: false
          },
          {
              label: "Data2",
              fill:false,
              strokeColor: 'rgba(220,180,0,1)',
              pointColor: 'rgba(220,180,0,1)',
              data: [0, 20, 40, 50]
          },
          {

              label: "Data5",
              fill:false,
              fillColor: "rgba(0,0,0,0)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(152,188,204,1)",
              data: [0, 20, 40, 50]
          },

          ]
      },
      options: {
          scales: {
            xAxes: [{
             
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
    });

    return(
      <div>

    <canvas id="graph" width="" height=""></canvas>


      </div>
    )
  };
};

export default Graph;
