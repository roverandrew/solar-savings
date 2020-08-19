const initState = {
    unitsMetric: true,
    solarSavingsEnd: null,
    solarSavingsHalfway: null,
    standard: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    tesla:    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_DATA':
            return {
                ...state,
                solarSavingsEnd:action.solarSavingsEnd,
                solarSavingsHalfway:action.solarSavingsHalfway,
                standard:action.standard,
                tesla:action.tesla
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