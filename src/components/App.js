import "../App.css"
import {useEffect, useState} from "react"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

function App() {
  const [styles, setStyles]= useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/styles")
    .then (r=>r.json())
    .then (data => setStyles(data))
    .catch(error => console.error(error))
  },[])

  function handleAddStyle(submittedData){
    setStyles([...styles, submittedData])
}

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Outlet context={{styles: styles, handleAddStyle: handleAddStyle, setStyles: setStyles}}/>
    </div>
  );
}

export default App;
