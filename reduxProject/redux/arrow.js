import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'
//定义组件
const Header = ({text,text1,onButtonClick,onButtonClick1,onChangeText,onChangeText1})=>{
    console.log("arrow")
    console.log(this)
    return (
        <div>
            <div>
                <span>不同:</span>
                <span onClick={onChangeText1}> {text1} </span>
                <button onClick={onButtonClick1}>click diff</button>
            </div>
            <div>
                <span>相同:</span>
                <span onClick={onChangeText}> {text} </span>
                <button onClick={onButtonClick}>click same</button>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        text: state.text,
        text1: state.text1
    }
}
function mapDispatchToProps(dispatch){
    return{
        onButtonClick:()=>dispatch(actions.buttonClickAction),
        onChangeText:()=>dispatch(actions.changeTextAction),
        onButtonClick1:()=>dispatch(actions.buttonClickAction1),
        onChangeText1:()=>dispatch(actions.changeTextAction1)
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Header)
