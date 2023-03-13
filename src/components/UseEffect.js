import React from "react";

export default function UseEffect() {

    const[count,setCount] = React.useState(0);
    console.log("component rendered")


    /*React.useEffect(
        function(){

        }
    )*/

    React.useEffect(()=> {
        console.log("use effect executed")
            
        },[count]
    )



    return (
        <>
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Remove</button>
            <button onClick={() => setCount(prevCount => 0)}>Reset</button>

        </div>
        </>
    )
}