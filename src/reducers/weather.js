import { SET_WEATHER, SET_LOADING } from "../actions/types";

const initialState = {
    city: '',
    country: '',
    coord: null,
    forecast: null,
    loading: false
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_WEATHER:
            return {
                ...state,
                city: payload.city,
                country: payload.country,
                coord: payload.coord,
                forecast: payload.weatherList,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                forecast: null,
                loading: payload
            }
        default:
            return state;
    }
}