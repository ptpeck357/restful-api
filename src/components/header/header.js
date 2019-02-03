import React, { Component } from 'react';
import "./header.css";

class Header extends Component {

  render() {

    return(
      <div className="header">

      <p className="title ">Occupation Summary for {this.props.title}</p>
      <div className="summary">
        <p>{this.props.jobCount}</p>
        <p>Jobs({this.props.regionalYear})</p>
        <p>190% <span style={{color: "green"}}>above</span> National Average</p>
      </div>
      <div className="summary">
        <p style={{color: "green"}}>+10.2%</p>
        <p>% Change ({this.props.startYear}-{this.props.endYear})</p>
        <p>Nation <span style={{color: "green"}}>+8.5%</span></p>
      </div>
      <div className="summary">
        <p>$57.24/hr</p>
        <p>Median Hourly Earnings</p>
        <p>Nation: $38.20/hr</p>
      </div>

    </div>
    )
  };
};

export default Header;
