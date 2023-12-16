import { useState } from "react";
function StateFunction()
{
    const[carName,setCarName]=useState("Thar");
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={()=>setCarName("BMW")}>click meeee</button>
            <h1>The count is {count}</h1>
            <button onClick={changeCount}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}
export default StateFunction;