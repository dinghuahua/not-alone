import { combineReducers } from 'redux'
import add from './add'
import decrease from './decrease'

const defaultState = {
    product:4
}
const defaultReducer = (state = defaultState, action) => {
    return state
}
// const reducersT = combineReducers({add,decrease})
// const reducers = combineReducers({add,decrease})
const reducers = combineReducers({
    defaultReducer,
    add,
    decrease
})
export default reducers