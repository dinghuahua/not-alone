import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './arrow';
//定义组件
class App extends Component{
    render() {
        console.log("Component")
        console.log(this)
        const {text, onChangeText, onButtonClick,dispatch} = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}> {text} </h1>
                <button onClick={onButtonClick}>click me</button>
                <Header/>
            </div>
        );
    }
}
function mapState(state) {
    return { text: state.text }
}
function mapDispatch(dispatch){
    return{
        onButtonClick:()=>console.log(dispatch(actions.buttonClickAction)),
        onChangeText:()=>dispatch(actions.changeTextAction)
    }
}
//连接组件
export default connect(mapState, mapDispatch)(App)
