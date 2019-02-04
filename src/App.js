import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/header/header.js";
import Graph from "./components/graph/graph.js";
import Table from "./components/table/table.js";
import Industry from "./components/industry/industry.js";
import './App.css';

class App extends Component {

  //Declaring states
  state = {
    dataObj: null,
    getData: false
  };

  //Calls API before components mounts
  componentDidMount(){

    //Calling API with GET request
		axios.get('https://www.mocky.io/v2/5a29b5672e00004a3ca09d33').then(response => {
      // console.log(response.data);
      //Setting state from the response data
      this.setState({

        //Titles
        title: response.data.occupation.title,
        regionTitle: response.data.region.title,

        //Start and end year of job growth
        startYear: response.data.summary.jobs_growth.start_year,
        endYear: response.data.summary.jobs_growth.end_year,

        //Data object from response
        dataObj: response.data,

        getData: true
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="mt-4">Occupation Overview</h3>
        <p className="title mb-4">{this.state.title} in {this.state.regionTitle}</p>
        <br/>
        <br/>

        {/* Header with 3 summary boxes */}
        {this.state.getData &&
          <Header
            dataObj={this.state.dataObj}
          />
        }

        {/* If state.getData is true, render the component */}
        {this.state.getData &&
          /* Regional Trend Table */
          <Graph
            dataObj={this.state.dataObj}
          />
        }
        <br/>
        {/* If state.getData is true, render the component */}
        {this.state.getData &&
          <Table
            dataObj={this.state.dataObj}
          />
        }
        <br/>
        {/* If state.getData is true, render the component */}
        {this.state.getData &&
          <Industry
            dataObj={this.state.dataObj}
          />
        }
      </div>
    );
  };
};

export default App;
