import React, { Component } from 'react';
import StockTag from './StockTag';
import '../styles/currentstockspanel.css';

export default class CurrentStocksPanel extends Component {
    render(){
        let stockTags = this.props.currentStocks.map((stockName, i, allStocks) => {
            return (
                <StockTag 
                    key={i} 
                    allStocks={allStocks} 
                    dispatch={this.props.dispatch} 
                    symbol={stockName}
                />
            )
        })
        return (
            <div className="current-stocks-panel">
                {stockTags}
            </div>
        )
    }
}