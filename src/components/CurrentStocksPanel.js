import React, { Component } from 'react';
import StockTag from './StockTag';
import '../styles/currentstockspanel.css';

export default class CurrentStocksPanel extends Component {
    render(){
        let stockTags = this.props.currentStocks.map((stockName, i) => {
            return (
                <StockTag dispatch={this.props.dispatch} key={i} symbol={stockName}/>
            )
        })
        return (
            <div className="current-stocks-panel">
                {stockTags}
            </div>
        )
    }
}