import React, { Component } from 'react';
import axios from 'axios';
import percentDiff from 'percentage-difference';
import Header from "./components/header/header.js";
import Graph from "./components/graph/graph.js";
import Table from "./components/table/table.js";
import Industry from "./components/industry/industry.js";
import './App.css';

class App extends Component {

    state = {
      occupationTitle: "",
      regionTitle: "",
      jobCount: "",
      regionalYear: "",
      startYear: "",
      endYear: "",
      regional_avg: "",
      national_avg: "",
      regionalEarnings: "",
      nationalEarnings: "",
      regionalTrends: null,
      stateTrends: null,
      nationTrends: null,
      regionChange: null,
      stateChange: null,
      nationChange: null,
      employingIndustries: ""
    }

  //Calls API before components mounts
  componentDidMount(){

    //Calling API with GET request
		axios.get('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33').then(response => {
      // console.log(response.data);
      // console.log(constcalculatesChange(response.data.trend_comparison.regional))
      // constcalculatesChange(response.data.trend_comparison.state)
      // constcalculatesChange(response.data.trend_comparison.nation)

      //Setting state from the response data
      this.setState({

        //Jobs for the the current year of that occupation
        occupationTitle: response.data.occupation.title,
        regionTitle: response.data.occupation.title,
        jobCount: response.data.summary.jobs.regional,
        regionalYear: response.data.summary.jobs.year,

        //Start and end year of job growth
        startYear: response.data.summary.jobs_growth.start_year,
        endYear: response.data.summary.jobs_growth.end_year,

        //Job growth change
        regional_avg: response.data.summary.jobs_growth.regional,
        national_avg: response.data.summary.jobs_growth.national_avg,

        //Salary
        regionalEarnings: response.data.summary.earnings.regional,
        nationalEarnings: response.data.summary.earnings.national_avg,

        //Trends
        regionalTrends: constcalculatesChange(response.data.trend_comparison.regional),
        stateTrends: constcalculatesChange(response.data.trend_comparison.state),
        nationTrends: constcalculatesChange(response.data.trend_comparison.nation),

        //Region Change
        regionChange: changeInJobs(response.data.trend_comparison.regional),
        stateChange: changeInJobs(response.data.trend_comparison.state),
        nationChange: changeInJobs(response.data.trend_comparison.nation),


        //Industries array
        employingIndustries: response.data.employing_industries.industries,

      })
    });

      //Calcuate percentage change for the following year
      const constcalculatesChange = array => {
        var diffs = [];
        var previousYearVal;

        // arr.map(function(yearVal) {
        //     // if(previousYearVal){
        //       diffs.push(percentDiff(yearVal, previousYearVal));
        //     // }

        //     previousYearVal = yearVal;
        // });
        for(let i=0; i < array.length; i++){
          diffs.push(percentDiff(array[i], array[i+1]));
          if(array[i]===array[array.length - 1]){
            console.log("hi");
          }
        }
        return(diffs); // [50, 20, -400] values in percent

      }

      //Find change percentage in jobs from 2013 to 2018
      const changeInJobs = array => {
        let startYear = array[0];
        let endYear = array[array.length - 1];
        let change = Math.abs(array[0]-array[array.length - 1]);
        let obj=[
          startYear,
          endYear,
          change
        ]
        return obj;
      }
	};

  render() {
    return (
      <div className="container">
        <h3 className="mt-4">Occupation Overview</h3>
        <p className="title mb-4">{this.state.occupationTitle} in {this.state.regionTitle}</p>
        <br/>
        <br/>
        <Header
          title={this.state.regionTitle}
          jobCount={this.state.jobCount}
          regionalYear={this.state.regionalYear}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          regional_avg={this.state.regional_avg}
          national_avg={this.state.national_avg}
          regionalEarnings={this.state.regionalEarnings}
          nationalEarnings={this.state.nationalEarnings}
        />

        {/* Regional Trend Table */}
        <Graph
          regionalTrends={this.state.regionalTrends}
          stateTrends={this.state.stateTrends}
          nationTrends={this.state.nationTrends}
        />
        <br/>
        <Table
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          regionChange={this.state.regionChange}
          stateChange={this.state.stateChange}
          nationChange={this.state.nationChange}
        />
        <br/>
        {/* <Industry occupationTitle={this.state.occupationTitle}/> */}
      </div>
    );
  }
}

export default App;
