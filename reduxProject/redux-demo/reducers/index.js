import { combineReducers } from 'redux'
import add from './add'
import decrease from './decrease'

const reducers = combineReducers({
    add,
    decrease
})
export default reducers