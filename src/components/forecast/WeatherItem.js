import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './forecast.css';

const WeatherItem = ({city, country, ddate, desc, temp, coord, icon}) => {
  

    return (
        <Fragment>
            <div className="wCard card">
                <img    alt={desc+' img'} 
                        src={'http://openweathermap.org/img/wn/'+icon+'@2x.png'} 
                        width="50" 
                        height="50">
                </img>
                <div>{city}</div>
                <div>{country}</div>
                <div>{ddate}</div>
                <div>{desc}</div>
                <div>{temp}</div>
                <div>{coord.x}, {coord.y}</div>
            </div>
        </Fragment>
    );
}

WeatherItem.propTypes = {
    city:  PropTypes.string.isRequired, 
    country:  PropTypes.string.isRequired, 
    ddate:  PropTypes.string.isRequired, 
    desc:  PropTypes.string.isRequired, 
    temp:  PropTypes.number.isRequired, 
    coord:  PropTypes.object.isRequired, 
    icon:  PropTypes.string.isRequired
};

export default WeatherItem;