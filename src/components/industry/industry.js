import React, { Component } from 'react';
import "./industry.css";

class Industry extends Component {

  render() {

    return(
      <div>
       <p className="title">Industries Employing {this.props.occupationTitle} </p>
       <hr style={{borderWidth:"3px"}}/>
      </div>
    )
  };
};

export default Industry;
