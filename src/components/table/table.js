import React, { Component } from "react";
import "./table.css";

const square =  {
  width: 10,
  height: 10,
  backgroundColor: 'blue',
  marginTop: "7px"
}

const circle= {
  width: 10,
  height: 10,
  borderRadius: 10/2,
  backgroundColor: 'rgb(112, 25, 25)',
  marginTop: "7px"
}

const triangle = {
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '0 5px 10px 5px',
  borderColor: 'transparent transparent rgb(0,191,255) transparent',
  marginTop: "7px"
}

class Table extends Component {

  render() {
    return(
      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Region</th>

                <th>{this.props.startYear} jobs</th>
                <th>{this.props.endYear} jobs</th>
                <th>Change</th>
                <th>% Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row"><span style={circle}></span>Region</td>
                <td>{this.props.regionChange[0]}</td>
                <td>{this.props.regionChange[1]}</td>
                <td>{this.props.regionChange[2]}</td>
                <td>{this.props.regionChange[3]}</td>
              </tr>
              <tr>
                <td className="row" ><span style={square}></span>State</td>
                <td>{this.props.stateChange[0]}</td>
                <td>{this.props.stateChange[1]}</td>
                <td>{this.props.stateChange[2]}</td>
                <td>{this.props.stateChange[3]}</td>
              </tr>
              <tr>
                <td className="row"><span style={triangle}></span>Nation</td>
                <td>{this.props.nationChange[0]}</td>
                <td>{this.props.nationChange[1]}</td>
                <td>{this.props.nationChange[2]}</td>
                <td>{this.props.nationChange[3]}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    )
  };
};

export default Table;
