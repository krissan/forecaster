import { SET_WEATHER, SET_LOADING } from "../actions/types";

const initialState = {
    weatherList: null,
    loading: false
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_WEATHER:
            return {
                ...state,
                weatherList: payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                weatherList: null,
                loading: payload
            }
        default:
            return state;
    }
}