import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/actionTypes'
//定义组件
/*const Add = ({product,productAdd,onButtonClick,onButtonDefaultClick})=>{
    console.log("add 组件")
    console.log(this)
    return (
        <div>
            <div>加</div>
            <span>{product}</span>----<span>{productAdd}</span>
            <button onClick={onButtonClick}>click add</button>
            <button onClick={onButtonDefaultClick}>defaultclick add</button>
        </div>
    );
}*/
class Add extends Component{
    render() {
        const {add,onButtonClick,onButtonDefaultClick} = this.props;
        return (
            <div>
                <div>加</div>
                <span>{add.product}</span>----<span>{add.productAdd}</span>
                <button onClick={onButtonClick}>click add</button>
                <button onClick={onButtonDefaultClick}>defaultclick add</button>
            </div>
        )
    }
}
function mapStateToProps(state,props) {
    console.log("add mapState")
    console.log(state)
    console.log(props)
    return {
        add:state.add
    }
}
function mapDispatchToProps(dispatch,props){
    console.log("add mapDispatch")
    console.log(props)
    return{
        onButtonDefaultClick:()=>dispatch({
            type:actionTypes.ADD_PRODUCT,
            default:!0}),
        onButtonClick:()=>dispatch({
            type:actionTypes.ADD_PRODUCT,
            default:!1}),
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Add)
