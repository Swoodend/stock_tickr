const initialState = {
    chartData : {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Closing Price'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar']
        },
        yAxis: {
            title: {
                text: 'Price Per Share (USD)'
            }
        },
        series: [{
            name: 'GOOG',
            data: [1, 0, 4]
        }, {
            name: 'AAPL',
            data: [5, 7, 3]
        }]
    }
};

export function stockManipulator(state = initialState, action){
    switch (action.type){

        default: 
            return state;

    }
}