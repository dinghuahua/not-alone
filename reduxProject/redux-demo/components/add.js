import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/actionTypes'
//定义组件
const Add = ({product,onButtonClick})=>{
    console.log("add")
    console.log(this)
    return (
        <div>
            <div>{product}</div>
            <button onClick={onButtonClick}>click add</button>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        product: state.product
    }
}
function mapDispatchToProps(dispatch,props){
    return{
        onButtonClick:()=>dispatch({
            type:actionTypes.ADD_PRODUCT,
            product: props.product}),
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Add)
