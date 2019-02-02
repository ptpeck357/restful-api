import React, { Component } from 'react';
import "./header.css";

class Header extends Component {

  render() {

    return(
      <div className="header">

      <p className="title ">Occupation Summary for Computers Programmers</p>
      <div className="summary">
        <p>Job Title</p>
        <p>Job Title</p>
        <p>Job Title</p>
      </div>
      <div className="summary">
        <p>Job Title</p>
        <p>Job Title</p>
        <p>Job Title</p>
      </div>
      <div className="summary">
        <p>Job Title</p>
        <p>Job Title</p>
        <p>Job Title</p>
      </div>

    </div>
    )
  };
};

export default Header;
