import "../App.css"
import NavBar from "./NavBar"
import {Link} from "react-router-dom"

function App() {
const homeImg = "https://fashinza.com/textile/wp-content/uploads/2021/11/shutterstock_244027792-1.jpg"

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
         <Link to={"/style-form"}>Add new Styles!</Link>
    </div>
  );
}

export default App;
