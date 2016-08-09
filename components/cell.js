import React from "react";



var Cell = function(props) {
    
    var cell_state = props.cell_state;
    
    if (cell_state === false) {
        
        return (
    
            <div className="cell">


            </div>
        );
        
    }
    
    else {
        
        return (
            
            <div className="alive_cell">
            
            
            </div>
        
        );
        
    }
    
    
    
} //End Cell component




export default Cell;