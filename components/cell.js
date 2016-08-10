import React from "react";



var Cell = function(props) {
    
    //Get initial variables needed
    var cell_state = props.cell_state;
    var count = props.count;
    
    //Get functions
    var add_cell = props.add_cell;
    
    //Set up div class names
    var cell_class = "cell cell" + count;
    var alive_cell_class = "alive_cell cell" + count;
    
    
    if (cell_state === false) {

        return (
            <div onClick={ () => { add_cell(count, cell_state) } } className={ cell_class }></div>
        );

    }

    else {

        return (
            <div onClick={ () => { add_cell(count, cell_state) } } className={ alive_cell_class }></div>
        );

    }

    
    
    
    
} //End Cell component




export default Cell;