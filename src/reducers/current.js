import { SET_CURRENT, SET_LOADING } from "../actions/types";

const initialState = {
    icon: '',
    city: '',
    country: '',
    ddate: '',
    desc: '',
    temp: 0,
    coord: {x: 0, y: 0}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_CURRENT:
            let dateObj = new Date(payload.ddate * 1000);
            let ddate = dateObj.toUTCString();

            return {
                ...state,
                icon: payload.icon,
                city: payload.city,
                country: payload.country,
                ddate: ddate,
                desc: payload.desc,
                temp: payload.temp,
                coord: payload.coord
            }
        case SET_LOADING: {
            return {
                ...state,
                icon: '',
                city: '',
                country: '',
                ddate: '',
                desc: '',
                temp: 0,
                coord: {x: 0, y: 0}
            }
        }
        default:
            return state;
    }
}
