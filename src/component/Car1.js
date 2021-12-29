import React from 'react';

class Car1 extends React.Component {
  render() {
    return ( 
    <h2>Hi, I am a Car1!</h2>
    // <h2>Hi, I am a Car1!{this.props.obj1.name}----{this.props.name}----{this.props.bool}</h2>
    );
  }
}

export default Car1;