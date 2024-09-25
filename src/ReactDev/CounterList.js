import React, { useState } from 'react'
let initialCounter = [
    0,0,0
]
export const CounterList = () => {
    const [counters,setCounters] = useState(initialCounter);
    function handleIncrementClick(index){
        const nextCounter = counters.map((c,i) => {
            if(i === index)
                return c+1;
            else
                return c;
        });
        setCounters(nextCounter);
    }
  return (
    <div>
        <ul>
        {counters.map((counter,i) => (
            <li key={i}>
                {counter}
                <button onClick={()=>handleIncrementClick(i)}>+1</button>
            </li>
        ))}
        </ul>
    </div>
  )
}
