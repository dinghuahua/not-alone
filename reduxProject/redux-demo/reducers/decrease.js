import * as actions from '../constants/actionTypes'
const defaultState = {
    product:1
}
const decrease = (state = defaultState, action) => {
    switch (action.type) {
        case actions.DECREASE_PRODUCT:
            state.product = --action.product;
            return state
        default:
            return defaultState
    }
}

export default decrease