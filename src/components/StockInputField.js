import React, { Component } from 'react';
import { addNewStock } from '../actions/actions';
import '../styles/stockinputfield.css';

export default class StockInputField extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let stockSymbol = e.target.stockSymbol.value;
        e.target.stockSymbol.value = '';
        this.props.dispatch(addNewStock(stockSymbol));
    }

    render(){
        return (
            <div className="stock-input-field-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="stockSymbol" placeholder=">Enter a stock symbol"/>
                    <button id="stock-submit" type="submit">Add Stock</button>
                </form>
            </div>
        )
    }
}