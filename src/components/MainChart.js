import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../styles/mainchart.css';

export default class MainChart extends Component {
    render(){
        let config = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Closing Price'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar']
            },
            yAxis: {
                title: {
                    text: 'Price (millions)'
                }
            },
            series: [{
                name: 'GOOG',
                data: [1, 0, 4]
            }, {
                name: 'AAPL',
                data: [5, 7, 3]
            }]
        }
        return (
            <div className="main-chart-container">
                <ReactHighcharts config={config} domProps={{style: {height: "100%", width:"100%"}}}/>
            </div>
        )
    }
}