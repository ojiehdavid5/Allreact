import React from "react";

 import Login from "./Login";


 const currentTime=new Date().getHour();

 console.log(currentTime);
 




var isLoggedIn=false;

//function  renderConditionally(){
  //if(isLoggedIn===true){
    //return       <h1>Hello</h1>

  //}else{
    //return <Login
   // />;
 // }
//}

function App() {
  return (
    <div className="container">
{/* ternary operator */}
{/* AND operator */}
      
      {isLoggedIn === true ? <h1>Hello</h1>: <Login/>}
      
    </div>
  );
}

export default App;
