import React, { Fragment } from 'react';
import spinner from '../imgs/spinner.gif';

export default () => (
    <Fragment>
        <img alt='loading...' className = 'spinner' src={spinner} style={{width: '200px', margin: 'auth', display: 'block'}}/>
    </Fragment>
);