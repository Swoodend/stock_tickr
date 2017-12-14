import React, { Component } from 'react';
import { removeStock } from '../actions/actions';
import { updateChartTitle } from '../actions/appState';
import '../styles/stocktag.css';

export default class StockTag extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.dispatch(removeStock(this.props.symbol));
        //if there is one stock left and you remove it, switch the title of the chart
        //back to "Enter a stock below"
        if(this.props.allStocks.length === 1){
            this.props.dispatch(updateChartTitle('Enter a stock below'));
        }
    }

    render(){
        return (
            <div className="stock-tag">{this.props.symbol}<div onClick={this.handleClick}>x</div></div>
        )
    }
}