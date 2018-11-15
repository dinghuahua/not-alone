import * as TodoActions from '../actions'
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({state,dispatch})=>{
    const handleClick = (e) => {

    }
    const handleSearch = (e) => {
        console.log(e)
    }
    const handleChange = (e) => {
       console.dir(e)
       console.log(e.target)

    }
    return (
        <div>
                <label className="new-todo">备忘录</label>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="新建事项(20字以内)"
                    id="new-todo"
                    style={{
                        width: '40%',
                    }}
                />
                <div>
                    <button
                        onClick={e => handleClick(e)}
                    >添加</button>
                    <button
                        onClick={e => handleSearch(e)}
                    >搜索</button>
                </div>
            <Link to="/allMemos">全部</Link>
            <Link to="/allMemos/todo">新建事项</Link>
            <Link to="/allMemos/doing">正在进行</Link>
            <Link to="/allMemos/done">已完成</Link>
        </div>
    )
}
function mapStateToProps(state){
    return {}
}
function  mapDispatchToProps(dispatch){

}
export default connect(
    mapStateToProps,mapDispatchToProps
)(Header)
