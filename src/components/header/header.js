import React, { Component } from 'react';
import "./header.css";

class Header extends Component {

  render() {

    return(
      <div className="header">

        <p className="title">Occupation Summary for {this.props.title}</p>
        <div className="summary">
          <p className="mt-4 titleSummary">{this.props.jobCount}</p>
          <p className="subTitle">Jobs({this.props.regionalYear})</p>
          <p>190% <span style={{color: "green"}}>above</span> National Average</p>
        </div>

        <div className="summary">
          <p className="mt-4 titleSummary" style={{color: "green"}}>+{this.props.regional_avg}%</p>
          <p className="subTitle">% Change ({this.props.startYear}-{this.props.endYear})</p>
          <p>Nation <span style={{color: "green"}}>+{this.props.national_avg}%</span></p>
        </div>

        <div className="summary">
          <p className="mt-4 titleSummary">${this.props.regionalEarnings}/hr</p>
          <p className="subTitle">Median Hourly Earnings</p>
          <p>Nation: ${this.props.nationalEarnings}/hr</p>
        </div>

      </div>
    )
  };
};

export default Header;
