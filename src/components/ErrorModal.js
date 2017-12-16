import React, { Component } from 'react';
import { caughtError } from '../actions/appState';

export default class ErrorModal extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.props.dispatch(caughtError(false));
    }


    render(){
        let errorModalStyle = {
            position: "absolute",
            border: "2px solid black",
            minWidth: "300px",
            minHeight: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: '0px 25px',
            background: "white"
        }

        let closeButtonStyle = {
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer"
        }
        return (
            <div style={errorModalStyle}>
                <h1 style={{padding:"0"}}>{this.props.error}</h1>
                <div onClick={this.handleClick} style={closeButtonStyle}>X</div>
            </div>
        )
    }
}