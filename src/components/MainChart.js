import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../styles/mainchart.css';

export default class MainChart extends Component {
    componentWillReceiveProps(nextProps){
        if (nextProps.chartData.series.length > 0){
            nextProps.chartData.title.text = 'Monthly Closing Price Per Share'
        }
    }

    render(){
        return (
            <div className="main-chart-container">
                <ReactHighcharts 
                    config={this.props.chartData} 
                    domProps={{style: {height: "100%", width:"100%"}}}
                />
            </div>
        )
    }
}