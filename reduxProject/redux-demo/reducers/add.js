import * as actions from '../constants/actionTypes'
const defaultState = {
    productAdd:6,
    product:7
}
// const defaultState = {
//     defaultReducer :{
//         product:1
//     },
//     add:{
//         productAdd:1,
//         product:1
//     }
// }
const add = (state, action) => {
    console.log("add--reducer");
    console.log(state);
  switch (action.type) {
      case actions.ADD_PRODUCT:
        // var action.default ? ++state.product : ++state.productAdd;
        console.log("add--return")
        console.log(state)
        // return Object.assign({},state,{product:999})
        return {
            ...state,
            product:999
        };
      default:
      return defaultState
  }
}
export default add