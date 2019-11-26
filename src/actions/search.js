import axios from 'axios';

import {
    SET_WEATHER,
    SET_LOADING
} from './types';

export const searchByCity = (searchQuery) => async dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    });

    try
    {
        const res = await axios.all([axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+searchQuery+'&APPID=51941ab726ae78f8088b47354496cdec'), axios.get('http://api.openweathermap.org/data/2.5/weather?q='+searchQuery+'&APPID=51941ab726ae78f8088b47354496cdec')]);

        if( res[0].data.city.name !== res[1].data.name ||
            res[0].data.city.country !== res[1].data.sys.country)
        {
            throw new Error("city current and 5 day forecast mismatch");
        }


        let currData = res[1].data;

        let weatherList = [{ddate: currData.dt, 
                            desc: currData.weather[0].description, 
                            temp: currData.main.temp, 
                            icon: currData.weather[0].icon
                        }]

        let forecastData = res[0].data.list;


        for(let i = 0; i < forecastData.length; i++)
        {
            let dateObj = new Date(forecastData[i].dt * 1000);
            let ddate = dateObj.toUTCString();

            weatherList.push({ddate: ddate, 
                desc: forecastData[i].weather[0].description, 
                temp: forecastData[i].main.temp, 
                icon: forecastData[i].weather[0].icon
            })
        }

        const baseData = res[0].data.city;

        const processData = {
            city: baseData.name,
            country: baseData.country,
            coord: {x: baseData.coord.lat, y: baseData.coord.lon},
            weatherList: weatherList
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
}