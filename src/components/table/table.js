import React, { Component } from "react";
import "./table.css";

class Table extends Component {

  //Declaring states
  state={
    regionChange: [],
    stateChange: [],
    nationChange: [],
    startYear: null,
    endYear: null
  };

  componentDidMount(){

    //Find change in percentage in jobs from 2013 to 2018
    const changeInJobs = array => {

      //Jobs in the first year (2013)
      let startYear = array[0];

      //Jobs in the last year (2018)
      let endYear = array[array.length - 1];

      //Change in jobs from 2013 to the end of 2018
      let change = (array[array.length - 1]-array[0]);

      //Calculating in change in jobs in percentage
      let jobChange = ((change/startYear)*100).toFixed(1);

      let dataArr=[];
      dataArr.push(startYear);
      dataArr.push(endYear);
      dataArr.push(change);
      dataArr.push(jobChange);

      //Returning array of arrays to sendback to set state
      return dataArr;
    };

    let data = this.props.dataObj;
    // console.log(data);

    this.setState({

      //Region Change
      regionChange: changeInJobs(data.trend_comparison.regional),
      stateChange: changeInJobs(data.trend_comparison.state),
      nationChange: changeInJobs(data.trend_comparison.nation),

      //Start and end year of job growth
      startYear: data.summary.jobs_growth.start_year,
      endYear: data.summary.jobs_growth.end_year,

    });

    this.setState({
      dataObj: {
        regionChange: this.state.nationChange,
        stateChange: this.state.stateChange,
        nationChange: this.state.nationChange
      }
    });
  };

  render() {
    return(
      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="tableTitle">Region</th>
                <th>{this.state.startYear} jobs</th>
                <th>{this.state.endYear} jobs</th>
                <th>Change</th>
                <th>% Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row"><span className="mr-2 circle"></span>Region</td>
                <td>{this.state.regionChange[0]}</td>
                <td>{this.state.regionChange[1]}</td>
                <td>{this.state.regionChange[2]}</td>
                <td>{this.state.regionChange[3]}%</td>
              </tr>
              <tr>
                <td className="row" ><span className="mr-2 square"></span>State</td>
                <td>{this.state.stateChange[0]}</td>
                <td>{this.state.stateChange[1]}</td>
                <td>{this.state.stateChange[2]}</td>
                <td>{this.state.stateChange[3]}%</td>
              </tr>
              <tr>
                <td className="row"><span className="mr-2 triangle"></span>Nation</td>
                <td>{this.state.nationChange[0]}</td>
                <td>{this.state.nationChange[1]}</td>
                <td>{this.state.nationChange[2]}</td>
                <td>{this.state.nationChange[3]}%</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    );
  };
};

export default Table;
