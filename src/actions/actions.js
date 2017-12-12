
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

export function getInitialState(){
    //want to have some stock data displayed to the user on initial page load.
    //this fn will get stock prices for GOOG and AAPL
    return dispatch => {
        Promise.all([getData('GOOG'), getData('AAPL')])
        .then(([goog, aapl]) => {
            console.log("promises have resolved with:");
            console.log("GOOG", goog);
            console.log("AAPL", aapl);
            //dispatch some action here
        }).catch((e) => {
            console.log(e);
            //dispatch error handling action here
        })
    }

}