import React, { Component } from 'react';
import { removeStock } from '../actions/actions';
import '../styles/stocktag.css';

export default class StockTag extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.dispatch(removeStock(this.props.symbol));
    }

    render(){
        return (
            <div className="stock-tag">{this.props.symbol}<div onClick={this.handleClick}>x</div></div>
        )
    }
}