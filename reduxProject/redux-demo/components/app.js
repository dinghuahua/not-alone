import React, { Component } from 'react';
import { connect } from 'react-redux';
import Add from './add';
import Decrease from './decrease';
//定义组件
class App extends Component{
    render() {
        console.log(this)
        // const {product} = this.props;
        const {product} = this.props;
        return (
            <div>
                <div> {product} </div>
                <Add/>
                <Decrease/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return { product: state.defaultReducer.product }
}
//连接组件
export default connect(mapStateToProps)(App)
