import React from 'react'
import { useState } from "react";


export const Hooks = () => {
    
    const [count, setCount] = useState(0);

    const[message, setMessage] = useState('Welcome');

    // const decrement=()=>{  setCount(count-1)
    //     setCount(count-1)
    //    setMessage('decrement')
    // }
    // const increment=()=>{  setCount(count+1)
    //     setCount(count+1)
    //     setMessage('increment')
    // }
    const decrement=()=>{  setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount -1)
    }
    const increment=()=>{  setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount +1)
    }
    
    
    return (
        <div>
            <button onClick={decrement}>-</button>
           <span>{count}</span>
           <button onClick={increment}>+</button>
            <br/>
           
           <p>{message}</p>
        </div>
    )
}
