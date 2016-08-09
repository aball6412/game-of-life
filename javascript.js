import React from "react";
import ReactDOM from "react-dom";

import Cell from "./components/cell";


class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        //Starting game for the first time
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
        
        
        // TEST LIST FOR BOARD: [true, true, true, false]
        
        this.state = {
            run: true,
            board: board,
            clear: false,
            generation: 0
        }

        //this.update_board(true, false, false);

        

        
    } //End constructor
    

    
    update_board(add, clear) {
        
       
 
    } //End update_board function
    
    
    
    
    
    render() {
        
        //Get initial variables
        var board = this.state.board;
        var cells = [];
        
        //For each cell on the board put in a "Cell" component
        //Push into the cells list
        for (var i in board) {

            cells.push(<Cell key={i} cell_state={ board[i] } />)
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


