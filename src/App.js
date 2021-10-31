import React, {useEffect, useState } from 'react';
import axios from 'axios';

import Header from "./components/header/header.js";
import Graph from "./components/graph/graph.js";
import Table from "./components/table/table.js";
import Industry from "./components/industry/industry.js";

import './App.css';

function App(){
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [occupationTitle, setOccupationTitle] = useState('');
	const [areaTitle, setAreaTitle] = useState('');

	const apiUrl = 'http://www.mocky.io/v2/5a29b5672e00004a3ca09d33';

	useEffect(() => {
		axios.get(apiUrl).then(response => {
			console.log('respsonse', response)
			const data = response.data;

			setData(data);
			setOccupationTitle(data.occupation.title);
			setAreaTitle(data.region.title);
			setIsLoading(true);
		})
		.catch(error => {
			console.log('error', error);
			setIsLoading(false);
		});
	}, [])

	return (
		<div className="container">
			<h3 className="mt-4">Occupation Overview</h3>
			<p className="title mb-4">{occupationTitle} in {areaTitle}</p>
			<br/>
			<br/>

			{isLoading &&
				<Header
					dataObj={data}
				/>
			}

			{isLoading &&
				/* Regional Trend Table */
				<Graph
					dataObj={data}
				/>
			}
			<br/>
			{isLoading &&
				/*Table of jobs and change in jobs*/
				<Table
					dataObj={data}
				/>
			}
			<br/>
			{isLoading &&
				/*Industry Table */
				<Industry
					dataObj={data}
				/>
			}
		</div>
	);
};

export default App;
