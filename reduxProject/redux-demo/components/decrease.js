/**
 * Created by dingding on 2018/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/actionTypes'

const Decrease = ({product,onButtonClick})=>{
    console.log("decrease")
    console.log(this)
    return (
        <div>
            <div>{product}</div>
            <button onClick={onButtonClick}>click decrease</button>
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
            type:actionTypes.DECREASE_PRODUCT,
            product: props.product}),
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Decrease)
