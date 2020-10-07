import{ Player_X, TURN, Player_O}  from './../helpers/actionTypes';

export function selectPlayerXAction(player){
    return{
        type: Player_X,
        player
    }
}

export function selectPlayerOAction(player){
    return{
        type: Player_O,
        player
    }
}

export function toggleTurnAction(player){
    return{
        type: TURN,
        player
    }
}