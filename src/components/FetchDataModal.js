import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import '../styles/fetchdatamodal.css';

export default class FetchDataModal extends Component {
    render(){
        return (
            <div className="fetch-modal-container">
                <ReactLoading type="spin" color="blue" height='150px' width='150px'/>
                <p>Fetching most recent data from API...</p>
            </div>
        )
    }
}