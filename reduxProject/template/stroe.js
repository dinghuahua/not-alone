/**
 * Created by dingding on 2018/10/19.
 */
/**
 * active ==> view  ==> store
 *  store.dispatch()
 *  store.dispatch()是 View 发出 Action 的唯一方法
 * Reducer
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 * 3.8 store.subscribe()
 * store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
 */
import { createStore } from 'redux';
const defaultState = 0;
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
};
const store = createStore(reducer);
store.dispatch({
    type: 'ADD_TODO',
    payload: 'Learn Redux'
});
const state = reducer(1, {
    type: 'ADD',
    payload: 2
});