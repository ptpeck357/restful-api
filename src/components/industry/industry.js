import React, { Component } from "react";
// import "./industry.css";

class Industry extends Component {

  //Declaring states
  state={
    year: null,
    jobs2015: null,
    jobsPeryear: [],
    in_occupation_jobs: [],
    title: [],
    changeNation: []
  };

  componentWillMount(){

    // console.log(this.props.dataObj);
    const parsingJobs = (obj, total) => {

      //Total jobs(12352) for 2015
      let totalJobs=total;
      let IndustryArr = [];

      //Looping through array and find the change in ratio
      obj.forEach(element => {
        IndustryArr.push((element.in_occupation_jobs/totalJobs * 100).toFixed(1));
      })
      return IndustryArr;
    };

    //Parsing through prop.dataObj and getting job titles and putting them into an array
    const parsingName = obj => {
      let jobTitlesArr = [];
      obj.forEach(element => {
        jobTitlesArr.push(element.title);
      });
      return jobTitlesArr;
    };

    //Parsing through prop.dataObj and calculating change in occupation to industry
    const startYears = obj => {
      let startJobsArr = [];

      //Looping through array and find the change in ratio
      obj.forEach(element => {
        startJobsArr.push((element.in_occupation_jobs));
      });
      return startJobsArr;
    };

    //Parsing through props and calculating change in jobs to industry
    const occupationRatio = arr => {
      let changeArry = [];

      //Looping through array and find the change in ratio
      arr.forEach(element => {
        let occupationJobs = element.in_occupation_jobs;
        let totalJobs = element.jobs;
        changeArry.push((occupationJobs/totalJobs * 100).toFixed(1));
      });
      return changeArry;
    };

    //Shortening name
    let data = this.props.dataObj;

    //Setting state from the prop.dataObj
    this.setState({
      year: data.employing_industries.year,
      title: parsingName(data.employing_industries.industries),
      in_occupation_jobs: parsingJobs(data.employing_industries.industries, data.employing_industries.jobs),
      jobsPeryear:  startYears(data.employing_industries.industries),
      changeNation: occupationRatio(data.employing_industries.industries)
    });
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
    );
  };
};

export default Industry;
