import React from "react";

var Stop = function(props) {
    
    //Get functions
    var stop_game = props.stop_game;
    
    return (
    
        <button onClick={ () => { stop_game() } } type="button" className="btn btn-default stop">Stop</button>
    
    );
    
    
    
} //End stop component


export default Stop;