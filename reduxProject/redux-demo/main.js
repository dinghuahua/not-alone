/**
 * Created by dingding on 2018/11/7.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import App from './components/app'
import reducers from './reducers'

console.log("reducers")
console.log(reducers)
//store
let store = createStore(reducers);
let unsubscribe = store.subscribe(() => {
    let newState = store.getState() // 获取更新后最新的state树
    console.log("更新")
    console.log(newState)
    // this.setState(newState)
    // component.setState(...) // 这里的component可以是this
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)