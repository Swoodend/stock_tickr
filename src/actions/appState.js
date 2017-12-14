export function updateInputValue(val){
    return {
        type: "UPDATE_INPUT_VALUE",
        payload: val
    }
}

export function updateChartTitle(title){
    return {
        type: "UPDATE_CHART_TITLE",
        payload: title
    }
}

export function fetchingData(bool){
    return {
        type: "FETCHING_DATA",
        payload: bool
    }
}