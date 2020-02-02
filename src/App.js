 import React from 'react';
import MyComponent from './MyComponent';
import Say from './Say';
import ValidationSample from './ValidationSample';
import EventPractice from './EventPractice1';
import RefSample from './createRef'
import IterationSample from './IterationSample'
//import LifeCycleSample from './LifeCycleSample'
import './App.css';
//import { Component } from 'react';


function App() {

  return (
    <div className="App">
      <MyComponent>Study Hard!</MyComponent><br />
      <Say /><br />
      <EventPractice /><br />
      <ValidationSample />
      <RefSample />
      <br /><br /><br />
      <IterationSample />
  {//  <LifeCycleSample />
     
     }
    </div>
  );


}

// function getRandomColor(){
//   return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

// class App extends Component{
//   state={
//     color:'#000000'
//   }
//   handleClick = ()=>{
//     this.setState({
//       color : getRandomColor()
//     });
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤색생</button>
//         <LifeCycleSample color ={this.state.color} />
//       </div>
//     );
//   }
// }


export default App;
