import React from "react";
import ReactDOM from "react-dom";

//Import project modules
import Cell from "./components/cell";
import Stop from "./components/stop";
import Start from "./components/start";
import Clear from "./components/clear";


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

      
        this.state = {
            run: true,
            board: board,
            clear: false,
            generation: 0
        }

        
        //Set interval timer to constantly update board
        var set_board = setInterval(() => { this.update_board(this.state.board) }, 100);

        
    } //End constructor
    

    
    update_board(board, add, clear) {
        
   
        //Set up new, blank board
        var new_board = [];
        
        //Create function to find number of neighbors
        var number_of_neighbors = function(index) {
            
            
            //Find out if index is an edge
            var is_edge = function(index) {
  
                var edge = false;
                
                if (index === 0) {
                    edge = "top-left";
                    return edge;
                }
                else if (index === 49) {
                    edge = "top-right";
                    return edge;
                }
                else if (index === 1450) {
                    edge = "bottom-left";
                    return edge;
                }
                else if (index === 1499) {
                    edge = "bottom-right";
                    return edge;
                }
                else if (index >= 0 && index <= 49) {
                    edge = "top";
                    return edge;
                }
                else if (index >= 1450 && index <= 1499) {
                    edge = "bottom";
                    return edge;
                }
                else if (index % 50 === 0) {
                    edge = "left";
                    return edge;
                }
                else if ((index + 1) % 50 === 0) {
                    edge = "right";
                    return edge;
                }
                else {
                    return edge;
                }
                
            }
            
            var edge = is_edge(index);


            
            
            if (edge === false) {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of all eight surrounding cells
                neighbors.push(board[index - 50 - 1]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 + 1]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[index + 50 - 1]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 + 1]);

                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "right"){
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index - 50 - 1]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 - 49]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index - 49]);
                neighbors.push(board[index + 50 - 1]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 - 49])
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "left") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index - 50 + 49]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 + 1]);
                neighbors.push(board[index + 49]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[index + 50 + 49]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 + 1]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "top") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index + 1450 - 1]);
                neighbors.push(board[index + 1450]);
                neighbors.push(board[index + 1450 + 1]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[index + 50 - 1]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 + 1]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "bottom") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index - 50 - 1]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 + 1]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[index - 1450 - 1]);
                neighbors.push(board[index - 1450]);
                neighbors.push(board[index - 1450 + 1]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "top-left") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[1499]);
                neighbors.push(board[index + 1450]);
                neighbors.push(board[index + 1450 + 1]);
                neighbors.push(board[index + 49]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[index + 50 + 49]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 + 1]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "top-right") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index + 1450 - 1]);
                neighbors.push(board[index + 1450]);
                neighbors.push(board[1450]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index - 49]);
                neighbors.push(board[index + 50 - 1]);
                neighbors.push(board[index + 50]);
                neighbors.push(board[index + 50 - 49]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "bottom-left") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index - 50 + 49]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 + 1]);
                neighbors.push(board[index + 49]);
                neighbors.push(board[index + 1]);
                neighbors.push(board[49]);
                neighbors.push(board[index - 1450]);
                neighbors.push(board[index - 1450 + 1]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            
            if (edge === "bottom-right") {
                
                var neighbors = [];
                var count = 0;
                
                //Get value of eight surrounding cells (infinite board)
                neighbors.push(board[index - 50 - 1]);
                neighbors.push(board[index - 50]);
                neighbors.push(board[index - 50 - 49]);
                neighbors.push(board[index - 1]);
                neighbors.push(board[index - 49]);
                neighbors.push(board[index - 1450 - 1]);
                neighbors.push(board[index - 1450]);
                neighbors.push(board[0]);
                
                //See how many neighbors are active
                for (var i in neighbors) {
                    if (neighbors[i] === true) {
                        count++;
                    }
                }

                return count;
            }
            

        } //End number of neighbors function
        
        
        for (var i in board) {
            
            
            var neighbors_number = number_of_neighbors(Number(i));

            
            //If current cell is live then...
            if (board[i]) {
                
                if (neighbors_number < 2) {
                    new_board.push(false);
                }
                else if (neighbors_number === 2 || neighbors_number === 3) {
                    new_board.push(true);
                }
                else if (neighbors_number > 3) {
                    new_board.push(false);
                }
                
            }
            
            else {
                
                if (neighbors_number === 3) {
                    new_board.push(true);
                }
                else {
                    new_board.push(false);
                }
            }
 

            
        } //End big for loop
        
        
        this.setState({ board: new_board });
 
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

            <div>
                <div className="buttons">
                           <Start />
                           <Stop />
                           <Clear />
                </div>

                <div className="board">

                    { cells }

                </div>
 
            </div>
        );

        
        
        
    }
    
    
}; //end App component



//Render App component to the DOM
ReactDOM.render(<App />, document.querySelector(".app"));


