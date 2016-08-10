import React from "react";

var Clear = function(props) {
    
    //Get functions
    var clear_game = props.clear_game;
    var stop_game = props.stop_game;
    
    
    return (
    
        <button onClick={ () => { clear_game(stop_game) }} type="button" className="btn btn-default clear">Clear</button>
    
    );
    
    
    
    
} //End clear component


export default Clear;