import * as actions from '../constants/actionTypes'
const defaultState = {
    product:1
}
const decrease = (state = defaultState, action) => {
    switch (action.type) {
        case actions.DECREASE_PRODUCT:
            state.decreaseProduct = --action.product;
            return state
        default:
            return state
    }
}

export default decrease