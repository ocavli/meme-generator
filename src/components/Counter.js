import React from "react";
import "../styles/Counter.css";

function Counter(){
    
    const [count,setCount] = React.useState(0);

    function add(){
        setCount(count+1)
    }

    function subtract(){
        setCount(count-1)
        
    }

    function reset(){
        setCount(0)
        
    }


    return(
        <div>
            <button onClick={subtract} className="counter--minus"> - </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus"> + </button>
            <button onClick={reset} className="counter--res"> C </button>

        </div>

    )
}

export default Counter;