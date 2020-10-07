import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Summary from './Summary/summary';
import Square from './Square/square';

// grid 1 to 9 square
function Board(props){
    const {board} = props
    return ( 
  <Fragment>
     <div id="board" className="row mt-4 d-flex flex-wrap">
    { board.map((symbol,i) => <Square key={i} index={i} symbol={symbol} />) }
    </div>
    <Summary />
    </Fragment>
    )
};

export default  connect(({board})=>({board}))(Board);