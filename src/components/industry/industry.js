import React, { Component } from "react";
import axios from 'axios';
import "./industry.css";

class Industry extends Component {

  state={
    year: null,
    jobs2015: null,
    jobsPeryear: [],
    in_occupation_jobs: [],
    title: [],
    changeNation: []
  }

  componentWillMount(){

    axios.get('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33').then(response => {
      // console.log(response.data);

       //Setting state from the response data
      this.setState({
        year: response.data.employing_industries.year,
        title: parsingName(response.data.employing_industries.industries),
        in_occupation_jobs: parsingJobs(response.data.employing_industries.industries, response.data.employing_industries.jobs),
        jobsPeryear:  startYears(response.data.employing_industries.industries),
        changeNation: occupationRatio(response.data.employing_industries.industries)
      })
    })

    //Parsing through API and getting job titles and putting them into an array
    const parsingName = obj => {
      let jobTitles = [];
      obj.forEach(element => {
        jobTitles.push(element.title);
      });
      return jobTitles;
    };

    //Parsing through API and calculating change in occupation jobs
    const parsingJobs = (obj, total) => {

      //Total jobs(12352) for 2015
      let totalJobs=total;
      let occupationIndustry = [];

      //Looping through array and find the change in ratio
      obj.forEach(element => {
        occupationIndustry.push((element.in_occupation_jobs/totalJobs * 100).toFixed(1))
      })
      return occupationIndustry;
    };

    //Parsing through API and calculating change in occupation to industry
    const startYears = obj => {
      let startJobs = [];

      //Looping through array and find the change in ratio
      obj.forEach(element => {
        startJobs.push((element.in_occupation_jobs))
      })
      return startJobs;
    };

    //Parsing through API and calculating change in jobs to industry
    const occupationRatio = arr => {
      let change = [];

      //Looping through array and find the change in ratio
      arr.forEach(element => {
        let occupationJobs = element.in_occupation_jobs;
        let totalJobs = element.jobs;
        change.push((occupationJobs/totalJobs * 100).toFixed(1))
      })
      return change;
    };

  };

  render() {
    return(
      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Industry</th>
                <th>Occupation Jobs in Industry ({this.state.year})</th>
                <th>% Occupation Jobs in Industry ({this.state.year})</th>
                <th>% Total of Jobs in Industry ({this.state.year})</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row">{this.state.title[0]}</td>
                <td>{this.state.jobsPeryear[0]}</td>
                <td>{this.state.in_occupation_jobs[0]}%</td>
                <td>{this.state.changeNation[0]}%</td>
              </tr>
              <tr>
                <td className="row">{this.state.title[1]}</td>
                <td>{this.state.jobsPeryear[1]}</td>
                <td>{this.state.in_occupation_jobs[1]}%</td>
                <td>{this.state.changeNation[1]}%</td>
              </tr>
              <tr>
                <td className="row">{this.state.title[2]}</td>
                <td>{this.state.jobsPeryear[2]}</td>
                <td>{this.state.in_occupation_jobs[2]}%</td>
                <td>{this.state.changeNation[2]}%</td>
              </tr>
              <tr>
                <td className="row">{this.state.title[3]}</td>
                <td>{this.state.jobsPeryear[3]}</td>
                <td>{this.state.in_occupation_jobs[3]}%</td>
                <td>{this.state.changeNation[3]}%</td>
              </tr>
              <tr>
                <td className="row">{this.state.title[4]}</td>
                <td>{this.state.jobsPeryear[4]}</td>
                <td>{this.state.in_occupation_jobs[4]}%</td>
                <td>{this.state.changeNation[4]}%</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    )
  };
};

export default Industry;
