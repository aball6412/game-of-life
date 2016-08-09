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
                
//                if(random_number >= .5) {
//                    
//                    board.push(true);
//                }
//                else {
//                    
//                    board.push(false);
//                }
                
                board.push(false);

                
            } //End for statement statement
        
            board[0] = true;
        
            console.log(board);
        
        this.state = {
            run: true,
            board: board,
            clear: false,
            generation: 0
        }

        
        //Set interval timer to constantly update board
        var set_board = setInterval(() => { this.update_board(board) }, 1000);

        
    } //End constructor
    

    
    update_board(board, add, clear) {
        
       console.log("I'm updating the board");
        
        for (var i in board) {
            
            if (board[i] === true) {
                board[i] = false;
                board[Number(i) + 1] = true;
                break;
            }
            
        }
        
        this.setState({ board: board });
 
    } //End update_board function
    
    
    
    
    
    render() {
        
        //Get initial variables
        var board = this.state.board;
        var cells = [];
        

        
        
        //For each cell on the board put in a "Cell" component
        //Push into the cells list
        for (var i = 0; i < board.length; i++) {
            
            cells.push(<Cell key={ i } cell_state={ board[i] } board_length={ board.length } count={ i } update_board={ this.update_board } />)
                       
        }
        
             
        
        return (

            <div className="board">

                { cells }

            </div>
 
        );

        
        
        
    }
    
    
}; //end App component



//Render App component to the DOM
ReactDOM.render(<App />, document.querySelector(".app"));


