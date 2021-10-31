import React, { Component } from 'react';
import { Chart } from "chart.js";
import percentDiff from 'percentage-difference';
import range from 'range';

// import "./graph.css";
import { VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryGroup, VictoryTooltip, VictoryScatter, VictoryAxis    } from 'victory';

class Graph extends Component {


	state = {

	// 	regionalTrends: null,
	// 	stateTrends: null,
	// 	nationTrends: null,
		yearsArr: []
	};

	componentDidMount(){
		const constcalculatesChange = array => {
			let diffsArr = [];
				for(let i=0; i < array.length; i++){
					diffsArr.push(percentDiff(array[0], array[i]))
				};

			return(diffsArr);
		};

		//Shortening name
		let data = this.props.dataObj;
		// console.log(data);

		this.setState({

			//Trends
			regionalTrends: constcalculatesChange(data.trend_comparison.regional),
			stateTrends: constcalculatesChange(data.trend_comparison.state),
			nationTrends: constcalculatesChange(data.trend_comparison.nation),
			yearsArr: range.range(data.summary.jobs_growth.start_year, data.summary.jobs_growth.end_year + 1)

		});
	};

	render() {
		return (
			<VictoryChart height={500} width={1000}
				containerComponent={<VictoryVoronoiContainer />}
			>
				{/* <VictoryAxis
					tickValues={[2.11, 3.9, 6.1, 8.05]}
				/>
				<VictoryAxis dependentAxis={true}
					tickValues={this.state.yearsArr}
				/> */}

				<VictoryGroup
					color="#c43a31"
					labels={({ datum }) => `${datum._y}`}
					data={this.state.regionalTrends}
				>

					<VictoryLine />
					<VictoryScatter
						size={({ active }) => active ? 5 : 3}
					/>
				</VictoryGroup>
				<VictoryGroup
					labels={({ datum }) => ` ${datum._y}`}
					data={this.state.stateTrends}
				>
					<VictoryLine />
					<VictoryScatter
						size={({ active }) => active ? 5 : 3}
					/>
				</VictoryGroup>
				<VictoryGroup
					labels={({ datum }) => ` ${datum._y}`}
					data={this.state.nationTrends}
				>

					<VictoryLine />
					<VictoryScatter
						size={({ active }) => active ? 5 : 3}
					/>
				</VictoryGroup>
			</VictoryChart>
		);
	}
};

export default Graph;
