const initialState = {
    list: [],
    city: {
        coord: { lon: 103.8501, lat: 1.2897 },
        country: 'SG',
        id: 1880252,
        name: 'Novaya Gollandiya'
    },
    request: false,
    error: null
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                request: true,
                error: false
            };

        case 'CANCEL_FETCH_WEATHER':
            return {
                ...state,
                request: false
            };

        case 'FETCH_SUCCESS_WEATHER':
            return {
                ...data,
                request: false,
                error: false
            };

        case 'FETCH_FAILED_WEATHER':
            return {
                ...state,
                request: false,
                error: action.data
            };

        case 'CLEAN_WEATHER':
            return initialState;

        default:
            return state;
    }
}