import { combineReducers } from 'redux';
import weather from './weather';
import current from './current';

export default combineReducers({
    weather,
    current
});