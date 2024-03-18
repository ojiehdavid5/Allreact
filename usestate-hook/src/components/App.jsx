import React ,{useState}from "react";
//import ReactDOM from "react-dom";


function App(){

const [count,setCount]=useState(0);
//var count=0

function increase(){
  //count++
  setCount(count +1);
}
function decrease(){
  setCount(count-1);
}

function divide(){
  setCount(count /2);
}
function multiply(){
  setCount(count*2);
}



  return(<div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={divide}>/</button>
    <button onClick={multiply}>*</button>


  </div>);
  }


export default App;
