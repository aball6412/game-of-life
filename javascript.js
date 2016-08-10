import React from "react";
import ReactDOM from "react-dom";

//Import project modules that we created
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

        
        
        //Set interval timer to constantly update board
        var set_board = setInterval(() => { this.update_board(this.state.board) }, 100);
        var test = "testing the click and passing variables";
      
        this.start_game = this.start_game.bind(this);
        this.stop_game = this.stop_game.bind(this);
        this.clear_game = this.clear_game.bind(this);
        this.add_cell = this.add_cell.bind(this);
        
        //Set the state
        this.state = {
            run: true,
            board: board,
            clear: false,
            generation: 0,
            interval_id: set_board
        }

        
        

        
    } //End constructor
    

    
    update_board(board) {
        
   
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
        
        
        //Check to see if all cells are dead
        var check_empty_board = new_board.includes(true);
        
        if (check_empty_board) {
            this.setState({ board: new_board, generation: this.state.generation + 1 });
        }
        else {
            this.clear_game(this.stop_game);
        }
 
    } //End update_board function
    
    stop_game() {
        clearInterval(this.state.interval_id); 
    }
    
    start_game() {
        
        //Set the interval again
        var set_board = setInterval(() => { this.update_board(this.state.board) }, 100);
        
        //Add interval to state
        this.setState({ interval_id: set_board });
    }
    
    clear_game(stop_game) {
        
        //Stop the current game
        clearInterval(this.state.interval_id);

        //Create empty board and fill it with dead cells
        var board = [];
        
        
        for (var i = 1; i <= 1500; i++) { 
            board.push(false);
        }
        
        
        this.setState({ board: board, generation: 0 });
        
    }
    
    add_cell(index, cell_state) {
           
        //Get the board
        var board = this.state.board;
        
        //If clicked cell state is active (true) then make it inactive (false)
        //If clicked cell state is inactive then make it active
        if (cell_state) {
            
            board[index] = false;
        }
        else {
            board[index] = true;
        }
        

        //Update the board
        this.setState({ board: board });
    }
    
    render() {
        
        //Get initial variables
        var board = this.state.board;
        var cells = [];
 
        //For each cell on the board put in a "Cell" component
        //Push into the cells list
        for (var i = 0; i < board.length; i++) {
            
            cells.push(<Cell key={ i } cell_state={ board[i] } count={ i } add_cell={ this.add_cell }/>)
                       
        }
        
             
        
        return (

            <div>
                <div className="buttons">
                           <Start start_game={ this.start_game  } />
                           <Stop stop_game={ this.stop_game } />
                           <Clear clear_game={ this.clear_game } stop_game={ this.stop_game } />
                            
                            <h4>Generation: { this.state.generation }</h4>
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


