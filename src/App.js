import "./App.css";
import { useState } from "react";
import Assignment_7 from "./Assignment_7";
import Assingment_6 from "./Assingment_6";
import Assingment_1 from "./Assingment_1";
import Assingment_2 from "./Assingment_2";
function App() {
  const [Status, setstatus] = useState("none");
  const handlehide=()=>{
    setstatus('none')
  }
  const handleclick = () => {
    setstatus("inline");
    setTimeout(() => {
      setstatus("none");
    }, 100000);
  };
  return (
    <div className="App">
      <Assingment_1 data={{Status,handleclick,handlehide}}/>
        <Assingment_2 data={{Status,handleclick,handlehide}}/>
      <Assingment_6  data={{Status,handleclick,handlehide}}/>
        <Assignment_7 data={{Status,handleclick,handlehide}}/> 
      
    </div>
  );
}

export default App;
