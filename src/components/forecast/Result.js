import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import WeatherItem from './WeatherItem';


const Result = ({weather: {weatherList, loading}, current}) => {  

    return current.city === '' || weatherList === null  ?
        loading ?
            <Spinner />
        :
        <div className="row">
            <label>No Results</label>
        </div>
    :
    <Fragment>
        <div className="row">
            <h5>Current Weather</h5>
        </div>

        <div className="row current">
            <WeatherItem 
                                icon={current.icon}
                                city={current.city}
                                country={current.country}
                                ddate={current.ddate}
                                desc={current.desc}
                                temp={current.temp}
                                coord={current.coord}
                            />
        </div>

        <div className="row">
            <h5>5 Day Forecast</h5>
        </div>

        <div className="row forecast">
            {
                weatherList.forecast.map((ele, index) => {
                    let dateObj = new Date(ele.dt * 1000);
                    let ddate = dateObj.toUTCString();

                    return <WeatherItem 
                            key={index}
                            icon={ele.weather[0].icon}
                            city={weatherList.city}
                            country={weatherList.country}
                            ddate={ddate}
                            desc={ele.weather[0].description}
                            temp={ele.main.temp}
                            coord={weatherList.coord}
                        />
                })
            }
        </div>
    </Fragment>
}

Result.propTypes = {
    weather: PropTypes.object.isRequired,
    current: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    weather: state.weather,
    current: state.current
});

export default connect(mapStateToProps)(Result);