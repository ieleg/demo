import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logger from "redux-logger"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import rootReduce from './reducer'

import {BrowserRouter as Router} from 'react-router-dom'
import routes from './router/routes';
import Nav from './router/nav'
import Home from './components/home'
import Kuayu from './kuayu'
const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(logger,thunk)));
ReactDOM.render(
  <Provider store = {store}>
    <Router routes={routes}>  
      <Nav></Nav>
      {routes}
    </Router>
     <App></App>
     {/* <Kuayu></Kuayu> */}
  </Provider>,
  document.getElementById('root')
);


