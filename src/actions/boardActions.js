import  { Clk_X, Clk_O } from '../helpers/actionTypes';

// Action function taken on board cell index

export function drawXAction(cellIndex) {
    return (dispatch) => {
      return new Promise(resolve => {
        dispatch({
          type: Clk_X,
          cellIndex
        })
        resolve()
      })
    }
  }
  
  export function drawOAction(cellIndex) {
    return (dispatch) => {
      return new Promise(resolve => {
        dispatch({
          type: Clk_O,
          cellIndex
        })
        resolve()
      })
    }
  }
  