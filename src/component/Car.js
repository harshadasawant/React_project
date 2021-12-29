import React from 'react'
import PropTypes from 'prop-types'
function Car(props) {
    return <h2>Hi, I am a Car!{props.name}</h2>;
  }
  
  export default Car;

//   function Greet() {
//     return (
//         <div>
//             Hello harshada
//         </div>
//     )

// }
export const Greet= (props)=>{
   return (
   <div>
    hi car
   {/* <h1>hello{props.name}</h1> */}
    {/* {props.bool ? <h1>Hi1</h1>:<h1>Hell1o</h1>} */}
    </div>
   );
}

Car.defaultProps={
  // name:"Daksh"
}
Car.propTypes={
  // name:PropTypes.string.isRequired,
}
// export  Greet;
