import React,{useState, useEffect} from 'react'
import axios from 'axios'

// npm install axios
export const GETAPI = () => {
  const[posts,setPosts] = useState([]);
  
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    console.log(res);
    setPosts(res.data);
  })
},[]);
  return (
    <div>
      <ol>
        {posts.map(post =>(
          <li key={post.id}>{post.title}</li>

        ))}
      </ol>
    </div>
  )
}
