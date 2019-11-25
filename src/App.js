import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/forecast/SearchBar';
import Result from './components/forecast/Result';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <div className="container">
              <SearchBar/>
              <Result/>
          </div>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
