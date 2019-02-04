import React, { Component } from 'react';
import "./header.css";

class Header extends Component {

  //Declaring states
  state={
    occupationTitle: "",
    regionTitle: "",
    jobRegional: "",
    jobNational: "",
    above: "",
    regionalYear: "",
    startYear: "",
    endYear: "",
    regional_avg: "",
    national_avg: "",
    regionalEarnings: "",
    nationalEarnings: ""
  };
  componentDidMount(){

    //Find change in growth
    const changeAve = (regional, national) =>{
      let changeGrowth = ((regional/national)*100).toFixed(1);
      console.log(changeGrowth);
      return changeGrowth;
    };

    //Shortening name
    let data = this.props.dataObj;
    // console.log(data);
    this.setState({

      //Jobs for the the current year of that occupation
      occupationTitle: data.occupation.title,
      // regionTitle: data.occupation.title,
      jobRegional: data.summary.jobs.regional,
      jobNational: data.summary.jobs.national_avg,
      regionalYear: data.summary.jobs.year,

      //Start and end year of job growth
      startYear: data.summary.jobs_growth.start_year,
      endYear: data.summary.jobs_growth.end_year,

      //Job growth change
      regional_avg: data.summary.jobs_growth.regional,
      national_avg: data.summary.jobs_growth.national_avg,
      jobMedian: changeAve(data.summary.jobs.regional, data.summary.jobs.national_avg),

      //Salary
      regionalEarnings: data.summary.earnings.regional,
      nationalEarnings: data.summary.earnings.national_avg

    });
  };

  render() {

    return(
      <div className="header">
        <p className="title">Occupation Summary for {this.state.occupationTitle}</p>

        <div className="summary">
          <p className="mt-4 titleSummary">{this.state.jobRegional}</p>
          <p className="subTitle">Jobs({this.state.regionalYear})</p>
          <p>{this.state.jobMedian}% <span style={{color: "green"}}>above</span> National Average</p>
        </div>

        <div className="summary">
          <p className="mt-4 titleSummary" style={{color: "green"}}>+{this.state.regional_avg}%</p>
          <p className="subTitle">% Change ({this.state.startYear}-{this.state.endYear})</p>
          <p>Nation <span style={{color: "green"}}>+{this.state.national_avg}%</span></p>
        </div>

        <div className="summary">
          <p className="mt-4 titleSummary">${this.state.regionalEarnings}/hr</p>
          <p className="subTitle">Median Hourly Earnings</p>
          <p>Nation: ${this.state.nationalEarnings}/hr</p>
        </div>

      </div>
    );
  };
};

export default Header;
