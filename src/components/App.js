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
        dispatch: store.dispatch,
        fetchingData: store.appState.fetchingData,
        error: store.appState.error
    }
})
export default class App extends Component {
    render(){
        let currentStocks = this.props.chartData.series.map(series => series.name);
        return (
            <div className="app">
                <MainTitle/>
                <MainChart 
                    error={this.props.error} 
                    fetchingData={this.props.fetchingData} 
                    chartData={this.props.chartData}
                    dispatch={this.props.dispatch}
                />
                <CurrentStocksPanel 
                    dispatch={this.props.dispatch} 
                    currentStocks={currentStocks}
                />
                <StockInputField dispatch={this.props.dispatch}/>
            </div>
        );  
    }
}