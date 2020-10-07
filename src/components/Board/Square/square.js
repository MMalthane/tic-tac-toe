import React from 'react';
import {connect } from 'react-redux';
import Cross from './Cross/cross';
import Zero from './Zero/zero';
import { drawXAction, drawOAction}  from '../../../actions/boardActions';
import { toggleTurnAction} from './../../../actions/playerAction';
import { checkResult } from '../../../actions/resultActon';

// Click Action in square cell

function Square(props){
    const {symbol, index, draw, players, board} = props;
    const disabled = symbol ? 'disabled' : ' ';
    return (
    <div className={'cell  col-md-4'  + disabled} onClick={() => draw(board, players,index )}>
      { symbol ?  (symbol === 'X' ? <Cross /> : <Zero />) : ''}
    </div>
       )
};

const  mapStateToProps = ({board, players}) =>({board , players});

const mapDistachToProps  = dispatch =>({
    draw: (board, players, cellIndex) => { 
        if(!board[cellIndex]) {
            if(players[players.turn] === 'X'){
                dispatch(drawXAction(cellIndex))
            }
            else{   
                dispatch(drawOAction(cellIndex))
            }
      }
   
      dispatch(checkResult(board));
      dispatch(toggleTurnAction())
    } 
});
    
export default  connect(mapStateToProps, mapDistachToProps)(Square)