import React from "react";
import ReactDOM from "react-dom";

import Cell from "./components/cell";


class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            run: true,
            board: [true, true, true, false],
            clear: false,
            generation: 0
        }
        
        
        this.update_board(true, false, false);
        
    } //End constructor
    
    
    
    update_board(start, add, clear) {
        
        //If we're starting the game fresh for the first time...
        if (start) {
            
            var board = [];
            
            for (var i = 1; i <= 1500; i++) {
                
                //Find random number with 50% probability
                var random_number = Math.random();
                
                if(random_number >= .5) {
                    
                    board.push(true);
                }
                else {
                    
                    board.push(false);
                }
                
            } //End for statement statement
            
            console.log("hello");
            this.setState({ board: board });
            
            
        } //End big if (start) statement
    

        
        
    } //End update_board function
    
    
    render() {
        
        //Get initial variables
        var board = this.state.board;
        var cells = [];
        
        //For each cell on the board put in a "Cell" component
        //Push into the cells list
        for (var i in board) {
            
            cells.push(<Cell key={i} />)
        }
        
        return (
        
            <div className="board">
            
                { cells }
            
            </div>
            
        
        
        
        )
        
        
    }
    
    
}; //end App component



//Render App component to the DOM
ReactDOM.render(<App />, document.querySelector(".app"));


