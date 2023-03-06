import React from "react";
import "../styles/Counter.css"

function Counter(){
    return(
        <div>
            <button className="counter--minus"> - </button>
            <div className="counter--count">
                <h1>0</h1>
            </div>
            <button className="counter--plus"> + </button>
        </div>
    )
}

export default Counter;