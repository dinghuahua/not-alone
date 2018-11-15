import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { getVisibleProducts } from '../reducers/count'
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';

class AllMemos extends Component{
    render(){
        return(
            <div>
                <div>AllMemos</div>
            </div>
        )
    }
}
export default connect()(AllMemos)
