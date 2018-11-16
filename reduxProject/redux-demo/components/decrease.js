/**
 * Created by dingding on 2018/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/actionTypes'

const Decrease = ({decreaseProduct,onButtonClick})=>{
    console.log("decrease")
    console.log(this)
    return (
        <div>
            <div>减</div>
            <div>{decreaseProduct}</div>
            <button onClick={onButtonClick}>click decrease</button>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        decreaseProduct: state.decrease.decreaseProduct
    }
}
function mapDispatchToProps(dispatch,props){
    return{
        onButtonClick:()=>dispatch({
            type:actionTypes.DECREASE_PRODUCT}),
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Decrease)
