import { fetchingData, caughtError } from './appState';


export function getData(symbol){
    //takes a stock symbol (string) and retreives data from api for said symbol
    let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${process.env.API_KEY}`;
    return (
        fetch(endpoint)
        .then((res) => { return res.json() })
        .then((data) => {
            return data;
        })
        .catch((e) => {
            return e;
        })
    )
}

export function addStock(seriesObj){
    return {
        type: "ADD_STOCK",
        payload: seriesObj
    }
}

export function wsAddStock(seriesObj){
    return {
        type: "WS_ADD_STOCK",
        payload: seriesObj
    }
}

export function addNewStock(symbol){
    return dispatch => {
        dispatch(fetchingData(true));
        getData(symbol)
        .then(
            stockData => {
                dispatch(fetchingData(false));
                if (!stockData['Error Message']){
                    let formattedData = formatDataForHighcharts(stockData);
                    dispatch(addStock(formattedData));
                } else {
                    let error = `Cannot find stock data for ${symbol.toUpperCase()}`
                    throw new Error(error);
                }

            }
        )
        .catch(e => {
            dispatch(caughtError(e.message));
        })
    }
}
export function removeStock(symbol){
    return {
        type: "REMOVE_STOCK",
        payload: symbol 
    }
}

export function wsRemoveStock(symbol){
    return {
        type: "WS_REMOVE_STOCK",
        payload: symbol
    }
}

export function formatDataForHighcharts(apiResponse, year="2017"){
    //takes in apiResponse (obj literal) and formats for usage by highchartsApi  
    console.log('called with', apiResponse);  
    let symbol = apiResponse['Meta Data']['2. Symbol'].toUpperCase();

    //get all the data keys for year 2017, you could allow the user to choose a year    
    let allDataKeysForYear = Object.keys(apiResponse['Weekly Adjusted Time Series']).filter(date => {
        return date.indexOf(year) === 0;
    });

    //get MOST recent keys for each month in 2017 (we want the latest data for each month)
    let mostRecentKeys = allDataKeysForYear.reduce((hash, date) => {
        let dateSubstr = date.slice(0, 7);
        if(hash[dateSubstr]){
            return hash;
        } else {
            hash[dateSubstr] = date;
            return hash;
        }
    }, {});

    //want the values from mostRecentKeysHash
    let recentKeysArr = Object.keys(mostRecentKeys).map(date => {
        return mostRecentKeys[date];
    });
    //reverse as API lists from Dec -> Jan
    let monthlyValues = recentKeysArr.map( date => {
        return parseInt([apiResponse['Weekly Adjusted Time Series']][0][date]['4. close']);
    }).reverse();

    //these objects get put into the series array
    return {
        name: symbol,
        data: monthlyValues
    }
}