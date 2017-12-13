const initialState = {
    chartData : {
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
    }
};

export function stockManipulator(state = initialState, action){
    switch (action.type){

        case "ADD_STOCK":
            return Object.assign({}, state, {
                chartData: {
                    ...state.chartData,
                    series: state.chartData.series.concat(action.payload)   
                }
            });

        default: 
            return state;

    }
}