/**
 * Created by dingding on 2018/11/7.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import App from './app'
import {reducer} from './reducer'

//store
// applyMiddleware(thunk)
let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)