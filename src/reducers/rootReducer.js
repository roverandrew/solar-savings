const initState = {
    unitsMetric: true,
    costData: {
        standard: new Array(11),
        tesla: new Array(11),
        teslaTMV: new Array(11)
    },
    percentageSolar: null,
    longitude: null,
    latitude: null,
    province: null,
    region: null
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_DATA':
            return {
                ...state,
                ...action
            }
        case 'SET_UNITS':
            return{
                ...state,
                unitsMetric:action.unitsMetric
            }
        
        default:
            return state;
    }
}

export default rootReducer;