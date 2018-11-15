import * as actions from '../constants/actionTypes'
const defaultState = {
    product:1
}
const add = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
        state.product = ++action.product;
        return state
    default:
      return defaultState
  }
}
export default add