const initialState = {
    stockInputValue: '',
    chartTitle: 'Enter a stock below'
}

function appState(state = initialState, action){
    switch(action.type){
        case "UPDATE_INPUT_VALUE":

        case "UPDATE_CHART_TITLE":

        default: 
            return state;
    }
}