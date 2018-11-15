//reducer
import {CHANGE_TEXT, BUTTON_CLICK, CHANGE_TEXT1, BUTTON_CLICK1} from './actions'
import * as actionTypes from './actionTypes'
const defaultState = {
    text: 'Hello',
    text1: 'Hello diff'
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TEXT:
            return Object.assign({},state,{
                text: state.text=='Hello' ? 'world':'Hello'
            })
        case actionTypes.BUTTON_CLICK:
            return Object.assign({},state,{
                text: 'Hello world'
            })
            // return {
            //     ...state,
            //     text: 'Hello world'
            // }
        case actionTypes.CHANGE_TEXT1:
            return Object.assign({},state,{
                text1: state.text1=='Hello diff' ? 'world diff':'Hello diff'
            })
        case actionTypes.BUTTON_CLICK1:
            return Object.assign({},state,{
                text1: 'Hello world diff'
            })
        default:
            return defaultState;
    }
}
export {reducer}