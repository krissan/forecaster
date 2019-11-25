import React from 'react';
import ReactDOM from 'react-dom';
import Result from './../Result';
import { Provider } from 'react-redux';
import store from '../../../store';
import  { searchByCity }  from '../../../actions/search'

it("renders with out crashing", () => {
    const div = document.createElement('div');

    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
})

//search blank
it("renders when blank is searched", () => {
    const div = document.createElement('div');

    searchByCity('');

    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
})

//search made up city
it("renders when made up city is searched", () => {
    const div = document.createElement('div');
    
    searchByCity('thiscitynamecantpossiblyexist');

    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
})

//search city
it("renders when existing city is searched", () => {
    const div = document.createElement('div');
    searchByCity('toronto');
    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
})

//search multiple cities
it("renders when city is searched then another", () => {
    const div = document.createElement('div');
    searchByCity('sydney');
    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
    searchByCity('chicago');
    ReactDOM.render(<Provider store={store}><Result/> </Provider>, div);
})