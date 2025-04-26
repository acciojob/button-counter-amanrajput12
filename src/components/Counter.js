import React,{ useState } from "react"


const Counter =()=>{
    const [count,setCount]= useState(0)

    function countincrease(){
        setCount(count+1);
    }
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={countincrease}>Click me</button>
        </div>
    )
}

export default Counter

