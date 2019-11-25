import axios from 'axios';

import {
    SET_WEATHER,
    SET_CURRENT,
    SET_LOADING
} from './types';

export const searchByCity = (searchQuery) => async dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    });

    try
    {
        const res = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+searchQuery+'&APPID=51941ab726ae78f8088b47354496cdec');

        const processData = {
            city: res.data.city.name,
            country: res.data.city.country,
            coord: {x: res.data.city.coord.lat, y: res.data.city.coord.lon},
            forecast: res.data.list
        }

        dispatch({
            type: SET_WEATHER,
            payload: processData
        });

    }
    catch (err) {
        console.log(err);

        dispatch({
            type: SET_LOADING,
            payload: false
        });
    }

    try
    {
        const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q='+searchQuery+'&APPID=51941ab726ae78f8088b47354496cdec');

        //format data in res
        console.log(res.data);

        const processData = {
            city: res.data.name,
            country: res.data.sys.country,
            coord: {x: res.data.coord.lat, y: res.data.coord.lon},
            ddate: res.data.dt,
            desc: res.data.weather[0].description,
            temp: res.data.main.temp,
            icon: res.data.weather[0].icon
        }

        console.log(processData)

        dispatch({
            type: SET_CURRENT,
            payload: processData
        });

    }
    catch (err) {
        console.log(err);

        dispatch({
            type: SET_LOADING,
            payload: false
        });
    }
}