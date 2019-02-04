import React, { Component } from 'react';
import Chart from "chart.js";
import percentDiff from 'percentage-difference';
// import "./graph.css";

class Graph extends Component {

  //Declaring states
  state={
    regionalTrends: null,
    stateTrends: null,
    nationTrends: null
  };
  componentDidMount(){

    //Calcuate percentage change for the following year
    const constcalculatesChange = array => {
      let diffsArr = [];
        for(let i=0; i < array.length; i++){
          diffsArr.push(percentDiff(array[0], array[i]))
        }
      // Return values in percent
      return(diffsArr);
    }

    //Shortening name
    let data = this.props.dataObj;
    // console.log(data);
    this.setState({

      //Trends
      regionalTrends: constcalculatesChange(data.trend_comparison.regional),
      stateTrends: constcalculatesChange(data.trend_comparison.state),
      nationTrends: constcalculatesChange(data.trend_comparison.nation),

    });
  };

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
              data: this.state.regionalTrends
            },
            {
              fill:false,
              borderColor: "rgb(0,0,255)",
              borderWidth: 2,
              data: this.state.stateTrends,
              pointStyle:'rect'
            },
            {
              fill:false,
              borderColor: "rgb(0,191,255)",
              borderWidth: 2,
              data: this.state.nationTrends,
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
    );
  };
};

export default Graph;
