console.log("All systems nominal");

import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            active: "yes"
        }
        
    } //End constructor
    
    
    render() {
        
        return (
        
            <div className="header">
            
                <h2>In the React script</h2>
            
            </div>
            
        
        
        
        )
        
        
    }
    
    
}; //end App component



//Render App component to the DOM
ReactDOM.render(<App />, document.querySelector(".app"));


