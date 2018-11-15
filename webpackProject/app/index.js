import React from 'react';
import {render} from 'react-dom';
import { createStore ,applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import App from './components/App'
import Reducers from './reducers'
import './main.css';

const  middleware=[thunk];
if(process.env.Node_env !== 'production'){
    middleware.push(createLogger())
}
const store = createStore(Reducers,
    applyMiddleware(...middleware)
)

// store.dispatch(getAllProducts())
render((
        <Provider store ={store}>
            <App/>
        </Provider>
    ), document.getElementById('root'));
