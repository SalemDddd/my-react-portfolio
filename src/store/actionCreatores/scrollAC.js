const SCROLL_MOVE = 'SCROLL_MOVE'
export const scrollMoveAC = (position) =>{return{type: SCROLL_MOVE , payload: position}}

const ADD_COFFEE = 'ADD_COFFEE'
export const coffeeAddAC = (cups) =>{return{type: ADD_COFFEE , payload: cups}}

const ADD_NIGHT = 'ADD_NIGHT'
export const nightAddAC = (night) =>{return{type: ADD_NIGHT , payload: night}}
