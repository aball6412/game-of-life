import React from "react";


var Start = function(props) {
     
    //Get functions
    var start_game = props.start_game;

    
    return (
    
        <button onClick={ ()=> { start_game() }} type="button" className="btn btn-default start">Start</button>
    
    );
    
    
} //End start module


export default Start;