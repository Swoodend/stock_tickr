const initialState = {
    stockInputValue: '',
    chartTitle: 'Enter a stock below'
}

export function appState(state = initialState, action){
    switch(action.type){
        case "UPDATE_INPUT_VALUE":
            return Object.assign({}, state, {
                stockInputValue: action.payload
            })

        case "UPDATE_CHART_TITLE":
            return Object.assign({}, state, {
                chartTitle: action.payload
            })
        default: 
            return state;
    }
}