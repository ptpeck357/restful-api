import React, { Component } from "react";
import "./table.css";

const square =  {
  width: 10,
  height: 10,
  backgroundColor: 'blue',
  marginTop: "7px",
  // paddingRight: "15px",
  marginLeft: "-15px"
}

const circle= {
  width: 10,
  height: 10,
  borderRadius: 10/2,
  backgroundColor: 'rgb(112, 25, 25)',
  marginTop: "7px",
  // paddingRight: "15px",
  marginLeft: "-15px"
}

const triangle = {
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '0 5px 10px 5px',
  borderColor: 'transparent transparent rgb(0,191,255) transparent',
  marginTop: "7px",
  // paddingRight: "15px",
  marginLeft: "-15px"
}

class Table extends Component {

  //Declaring states
  state={
    regionChange: [],
    stateChange: [],
    nationChange: []
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
    }

    let data = this.props.dataObj;
    // console.log(data);
    this.setState({

      //Region Change
      regionChange: changeInJobs(data.trend_comparison.regional),
      stateChange: changeInJobs(data.trend_comparison.state),
      nationChange: changeInJobs(data.trend_comparison.nation)
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
                <td className="row"><span className="mr-2" style={circle}></span>Region</td>
                <td>{this.state.regionChange[0]}</td>
                <td>{this.state.regionChange[1]}</td>
                <td>{this.state.regionChange[2]}</td>
                <td>{this.state.regionChange[3]}%</td>
              </tr>
              <tr>
                <td className="row" ><span className="mr-2" style={square}></span>State</td>
                <td>{this.state.stateChange[0]}</td>
                <td>{this.state.stateChange[1]}</td>
                <td>{this.state.stateChange[2]}</td>
                <td>{this.state.stateChange[3]}%</td>
              </tr>
              <tr>
                <td className="row"><span className="mr-2" style={triangle}></span>Nation</td>
                <td>{this.state.nationChange[0]}</td>
                <td>{this.state.nationChange[1]}</td>
                <td>{this.state.nationChange[2]}</td>
                <td>{this.state.nationChange[3]}%</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    )
  };
};

export default Table;
