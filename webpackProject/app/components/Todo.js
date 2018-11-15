import React,{Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { getVisibleProducts } from '../reducers/count'

function Todo(obj ) {
    console.log(obj)
    return (
        <div>
            todo
        </div>
    )
}
// const Todo = ({match,history }) =>
// class Todo extends Component{
//     componentDidMount(){
//         console.log(this);
//     }
//     render(){
//         return(
//
//             <div>
//                 todo
//             </div>
//         )
//     }
// }
export default connect()(Todo)
