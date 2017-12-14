const initialState = {

    chart: {
        type: 'line'
    },
    title: {
        text: 'Enter a stock below'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Price Per Share (USD)'
        }
    },
    series: []

};

export function stockManipulator(state = initialState, action){
    switch (action.type){

        case "ADD_STOCK":
            return Object.assign({}, state, {
                series: state.series.concat(action.payload)
            });

        case "REMOVE_STOCK":
            let series = state.series.filter( chartObj => {
                return chartObj.name !== action.payload
            });
            
            return Object.assign({}, state, { 
                series
            })

        default: 
            return state;

    }
}