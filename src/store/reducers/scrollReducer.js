import {scrollState} from '../initialState'
const SCROLL_MOVE = 'SCROLL_MOVE'
const ADD_COFFEE = 'ADD_COFFEE'
const ADD_NIGHT = 'ADD_NIGHT'

let scrollReducer = (state = scrollState, action) =>
{
    switch(action.type) {
        case SCROLL_MOVE:
            return {...state, scrollState: {coffee: state.scrollState.coffee ,  nights: state.scrollState.nights , position: { y: action.payload} } }

        case ADD_COFFEE:
            return {...state, scrollState: {coffee: state.scrollState.coffee + action.payload ,  nights: state.scrollState.nights, position: { y: state.scrollState.position.y} }}

        case ADD_NIGHT:
            return {...state, scrollState: {coffee: state.scrollState.coffee, nights: state.scrollState.nights + action.payload, position: { y: state.scrollState.position.y} }}

        default:
        return state
    }
}


export default scrollReducer
