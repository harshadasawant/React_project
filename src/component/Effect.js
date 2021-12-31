import React, {useState, useEffect} from 'react'

//rafc
export const Effect = () => {
    const[count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log('use effect invoked');
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click {count}times</button>
        </div>
    )
    }

    
