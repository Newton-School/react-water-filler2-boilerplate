import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  return (
    <div id="main" style={{margin:'0 auto',width:"400px"}}>
      <label>
        Water goal:-
        <input id="water-limit-input" type={'number'}  />
      </label>
      <br />
      Max water count: 
      <br />
      Water level
      <div id='bottle-container' style={{width:"300px",backgroundColor:'grey',height:'40px'} }>
          <div id='water-level' style={{width:`0px`,backgroundColor:'lightblue',height:'40px'} }></div>
      </div>
      <button id="add-water" >I drank water</button>
    </div>
  )
}


export default App;
