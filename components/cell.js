import React from "react";



var Cell = function(props) {
    
    //Get initial variables needed
    var cell_state = props.cell_state;
    var board_length = props.board_length;
    var count = props.count;
    
    //Get functions
    var update_board = props.update_board;
    

    
    
    if (cell_state === false) {

        return (
            <div className="cell"></div>
        );

    }

    else {

        return (
            <div className="alive_cell"></div>
        );

    }

    
    
    
    
} //End Cell component




export default Cell;