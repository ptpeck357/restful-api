import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/header/header.js";
import Graphs from "./components/graphs/graphs.js";
import './App.css';

class App extends Component {

  state = {

  }
  componentWillMount(){
		axios.get('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33').then(response => {
			console.log(response)
		});
	};

  render() {
    return (
      <div className="container">
        <h2>Occupation Overview</h2>
        <p className="title mb-2">Computer Programmers in Seattle-Tacoma-Bellevue, WA</p>
        <br/>
        <br/>
        <Header/>
        <br/>
      </div>
    );
  }
}

export default App;
