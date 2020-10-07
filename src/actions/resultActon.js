import { X_WINS, O_WINS, TIE}  from './../helpers/actionTypes';
import {checkVictory} from '../helpers/resultHelpers';

// which players win or draw condition
export function checkResult(board){
    if(checkVictory(board, 'X')){
        return{
            type:X_WINS
        }
    } else if (checkVictory(board, 'O')){
        return{
            type: O_WINS
        }
    } else {
        const  check = board.filter(symbol => symbol === null)
           if(check.length === 0 ){ 
            return{
            type:TIE
         }
       }
     }
        return{
            type: 'random'
        }
    
}