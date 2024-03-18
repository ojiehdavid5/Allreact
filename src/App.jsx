import React from 'react';

import {add,subtract,multiply,divide} from " ./calculator.js";

// import pie,{doublePi,triplePi} from "./math"

// import Heading from "./Heading";
// import List from "./List";


function App(){
    return<div>




<ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,

        {/* <ul>
            <li>1</li>
            <li>{pie}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>

        </ul> */}


        {/* <Heading/>
        <List/> */}
    </div>
}




export default App;