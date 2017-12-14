import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainTitle from './MainTitle';
import MainChart from './MainChart';
import CurrentStocksPanel from './CurrentStocksPanel';
import StockInputField from './StockInputField';
import '../styles/app.css';

@connect((store) => {
    return {
        chartData: store.chartData,
        dispatch: store.dispatch
    }
})
export default class App extends Component {
    render(){
        let currentStocks = this.props.chartData.series.map(series => series.name);
        return (
            <div className="app">
                <MainTitle/>
                <MainChart chartData={this.props.chartData}/>
                <CurrentStocksPanel 
                    dispatch={this.props.dispatch} 
                    currentStocks={currentStocks}
                />
                <StockInputField dispatch={this.props.dispatch}/>
            </div>
        );  
    }
}