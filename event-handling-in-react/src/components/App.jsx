import React,{useState} from "react";

function App() {
  const [headingText,setheadingText]= useState();
  const [isMouseOver,setMouseOver]=useState(false);

  function handleClick(){

    setheadingText("Submitted");
  }


  function handleMouseOver (){
    setMouseOver(true);
    
  }


  function handleMouseOut (){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button   style={{background: isMouseOver ? "black" :"white"}}onClick={handleClick}   onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
