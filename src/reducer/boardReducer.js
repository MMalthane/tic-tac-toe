import{ Clk_X, Clk_O } from '../helpers/actionTypes';

// Board initial state 
const initialState = [null, null, null, null, null,null, null, null, null]

export function boardReducer(state = initialState, action){
    switch(action.type){
        case Clk_X:
            const newXState = [...state]
            newXState[action.cellIndex] =   'X'
            return newXState

        case Clk_O:
            const newOState = [...state]
            newOState[action.cellIndex] =  'O'
            return newOState

            default:
                return state

    }

}