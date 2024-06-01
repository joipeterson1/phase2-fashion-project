import "../App.css"
import NavBar from "./NavBar"
import {Outlet} from "react-router-dom"
import {useEffect, useState} from "react"

function App() {
const homeImg = "https://fashinza.com/textile/wp-content/uploads/2021/11/shutterstock_244027792-1.jpg"
const [styles, setStyles]= useState([])

useEffect(()=> {
  fetch("http://localhost:3000/styles")
  .then (r=>r.json())
  .then (data => setStyles(data))
  .catch(error => console.error(error))
},[])

  return (
    <div >
      <header>
        <NavBar />
      </header>
    <h2> Welcome to FABFashion! </h2>
      <img alt="" src={homeImg}/>
      <p>Greetings and welcome to my fashion platform!! FabFashion is a diverse app 
        that I use to keep track of all of my fashion designs. Here I can upload and 
        post new designs whenever I please to continuously broaden my porfolio dynamically.
        I can visit the "Styles" tab in the Navigation bar to view my style and the "Style Form"
         tab to add a new style.</p>
         <Outlet context={styles}/>
    </div>
  );
}

export default App;
