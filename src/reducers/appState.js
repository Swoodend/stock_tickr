const initialState = {
    stockInputValue: '',
    chartTitle: 'Enter a stock below',
    fetchingData: false,
    error: false
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

        case "FETCHING_DATA":
            return Object.assign({}, state, {
                fetchingData: action.payload
            })

        case "ERROR":
            return Object.assign({}, state, {
                error: action.payload
            })
        default: 
            return state;
    }
}