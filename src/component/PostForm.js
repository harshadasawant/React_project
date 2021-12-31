import React,{useState, useEffect} from 'react'
import axios from 'axios'


export const PostForm = () => {
  const[body,setBody] = useState('');
  const[userId, setUserId]= useState(101);
  const[title, setTitle] = useState('');

  
  const handleClick =(e)=>{
   
  const obj = JSON.stringify({userId,body,title});
  console.log(obj);
  axios.put(`https://jsonplaceholder.typicode.com/posts`,obj).
  then(res=>{
    console.log(res);
   
  })
  }


  return (
    <div>
     user Id :  <input type="text" name='userId' value={userId} onChange={e => setUserId(e.target.value)} /> <br/><br/>
     Body:  <input type="text" name='body' value={body} onChange={e => setBody(e.target.value)} /><br/><br/>
      Title :<input type="text" name = 'title' value={title} onChange={e => setTitle(e.target.value)} /><br/><br/>
      <button type="button" onClick={handleClick}> Fetch post</button>
      
      
    </div>
  )
}
