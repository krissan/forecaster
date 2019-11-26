import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import WeatherItem from './WeatherItem';
import './forecast.css';

import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeInLeft}`};
`;

const Result = ({weather: {city, country, coord, forecast, loading}}) => {  

    return forecast == null  ?
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
            <FadeIn>
                <WeatherItem
                    key ={0}
                    icon={forecast[0].icon}
                    city={city}
                    country={country}
                    ddate={forecast[0].ddate}
                    desc={forecast[0].desc}
                    temp={forecast[0].temp}
                    coord={coord}
                />
            </FadeIn>
        </div>

        <div className="row">
            <h5>5 Day Forecast</h5>
        </div>

        <div className="row forecast">
            {
                forecast.slice(1).map((ele, i) => {
                    return <FadeIn>
                        <WeatherItem
                            key ={i}
                            icon={forecast[i].icon}
                            city={city}
                            country={country}
                            ddate={forecast[i].ddate}
                            desc={forecast[i].desc}
                            temp={forecast[i].temp}
                            coord={coord}
                        />
                    </FadeIn>
                })
            }
        </div>
    </Fragment>
}

Result.propTypes = {
    weather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    weather: state.weather
});

export default connect(mapStateToProps)(Result);