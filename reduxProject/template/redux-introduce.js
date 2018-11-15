/**
 * Created by dingding on 2018/11/7.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

//action
const changeTextAction = {
    type:'CHANGE_TEXT'
}
const buttonClickAction = {
    type:'BUTTON_CLICK'
}
//reducer
const initialState = {
    text: 'Hello'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text=='Hello' ? 'world':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        default:
            return initialState;
    }
}

//store
let store = createStore(reducer);

// 每当state更新的时候，就会自动执行mapStateToProps，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
// 使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
//connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。
//映射Redux state到组件的属性
function mapStateToProps(state,ownProps) {
    return { text: state.text }
}
//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
// 也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
//如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
// dispatch(action)，发出action，自动执行Reducer函数；
// 它的每个键名也是对应 UI 组件的同名参数
// 键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出  Reducer对发出的action进行处理  更新store
//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch,ownProps){
    return{
        onButtonClick:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(changeTextAction)
    }
}


//连接组件
const App = connect(mapStateToProps, mapDispatchToProps)(App)

//渲染组件
// Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了  原理就是React组件的context属性

                            /*class Provider extends Component {
                                getChildContext() {
                                    return {
                                        store: this.props.store
                                    };
                                }
                                render() {
                                    return this.props.children;
                                }
                            }

                            Provider.childContextTypes = {
                                store: React.PropTypes.object
                            }
                            上面代码中，store放在了上下文对象context上面。然后，子组件就可以从context拿到store，代码大致如下。


                            class VisibleTodoList extends Component {
                                componentDidMount() {
                                    const { store } = this.context;
                                    this.unsubscribe = store.subscribe(() =>
                                        this.forceUpdate()
                                    );
                                }

                                render() {
                                    const props = this.props;
                                    const { store } = this.context;
                                    const state = store.getState();
                                    // ...
                                }
                            }

                            VisibleTodoList.contextTypes = {
                                store: React.PropTypes.object
                            }*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)