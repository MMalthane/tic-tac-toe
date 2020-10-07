import React from 'react';
import { connect }  from 'react-redux';
import {checkResult} from '../../../actions/resultActon.js';

// output display of player and check result
function Summary(props){
    const { board, players,result, checkResult } = props;
   
    if(!(result.tie  || result.win)){
        checkResult(board)
    }

    if(result.tie){
        return  <div className="alert col-4 alert-info  mt-2"> Its a Draw !!</div>
    }else{
        if(result.win === 'X'){
            const player = players.p1 ==='X' ? 'Player 1' : 'Player 2'
         return  <div className="alert col-4 alert-success  mt-2"> {player} WINS!!</div>
        }else if(result.win ==='O'){
            const player = players.p1 ==='O' ? 'Player 1' : 'Player 2'
            return  <div className="alert col-4 alert-success  mt-2"> {player} WINS!!</div>
        }
    }

    return  (
        <div className="row mt-4 p-md-0">
        <div className="col-md-6">
    <p><strong>Current Player :</strong> {players.turn === 'p1' ? <span className="badge badge-info"> Player 1 </span> : <span className="badge badge-success">Player 2</span> }</p>
            <p><strong>Player 1:</strong>{players.p1}</p>
             <p><strong>Player 2:</strong>{players.p2}</p>
           
        </div> 
    </div>
    )
}
export default  connect(
    ({ board, players, result }) => ({ board, players, result }),
    dispatch => ({ checkResult: (board) => dispatch(checkResult(board)) })
  )(Summary)