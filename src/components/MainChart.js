import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../styles/mainchart.css';

export default class MainChart extends Component {
    
    render(){
        return (
            <div className="main-chart-container">
                <ReactHighcharts 
                    config={this.props.chartData} 
                    domProps={{style: {height: "100%", width:"100%"}}}
                    ref="chart"
                />
            </div>
        )
    }
}