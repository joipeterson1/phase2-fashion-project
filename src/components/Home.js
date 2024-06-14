import {Link} from "react-router-dom"

function Home() {

const homeImg = "https://fashinza.com/textile/wp-content/uploads/2021/11/shutterstock_244027792-1.jpg"


  return (
    <div >
    <h2> Welcome to FABFashion! </h2>
      <img alt="" src={homeImg}/>
      <p>Greetings and welcome to my fashion platform!! FabFashion is a diverse app 
        that I use to keep track of all of my fashion designs. Here I can upload and 
        post new designs whenever I please to continuously broaden my porfolio dynamically.
        I can visit the "Styles" tab in the Navigation bar to view my style and the "Style Form"
         tab to add a new style.</p>
         <button>
         <Link to={"/style-list"}>View Styles!</Link>
         </button>
    </div>
  );
}

export default Home;

