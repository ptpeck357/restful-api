import React, { Component } from 'react';
import axios from 'axios';
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
    regionalTrends: "",
    stateTrends: "",
    nationTrends: "",
    employingIndustries: ""
  }
  componentWillMount(){

    //Calling API with GET request
		axios.get('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33').then(response => {
      console.log(response.data)

      //Setting state to the response
      this.setState({
        occupationTitle: response.data.occupation.title,
        regionTitle: response.data.occupation.title,
        jobCount: response.data.summary.jobs.regional,
        regionalYear: response.data.summary.jobs.year,
        startYear: response.data.summary.jobs_growth.start_year,
        endYear: response.data.summary.jobs_growth.end_year,
        regionalTrends: response.data.trend_comparison.regional,
        stateTrends: response.data.trend_comparison.state,
        nationTrends: response.data.trend_comparison.nation,
        employingIndustries: response.data.employing_industries.industries,
      })
		});
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
        />
        <Graph
          regionalTrends = {this.state.regionalTrends}
          stateTrends = {this.state.stateTrends}
          nationTrends = {this.state.nationTrends}
        />
        <br/>
        <Table/>
        <br/>
        <Industry occupationTitle={this.state.occupationTitle}/>
      </div>
    );
  }
}

export default App;
