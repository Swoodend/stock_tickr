import React, { Component } from 'react';
import MainTitle from './MainTitle';
import MainChart from './MainChart';
import CurrentStocksPanel from './CurrentStocksPanel';
import StockInputField from './StockInputField';
import '../styles/app.css';

export default class App extends Component {
    render(){
        return (
            <div className="app">
                <MainTitle/>
                <MainChart/>
                <CurrentStocksPanel/>
                <StockInputField/>
            </div>
        );  
    }
}