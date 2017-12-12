import React, { Component } from 'react';
import '../styles/stocktag.css';

export default class StockTag extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(`you clicked the ${this.props.symbol} tag`);
    }

    render(){
        return (
            <div className="stock-tag">{this.props.symbol}<div onClick={this.handleClick}>x</div></div>
        )
    }
}