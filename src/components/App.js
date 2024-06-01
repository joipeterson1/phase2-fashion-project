import "../App.css"
import NavBar from "./NavBar"

function App() {
const homeImg = "https://fashinza.com/textile/wp-content/uploads/2021/11/shutterstock_244027792-1.jpg"

  return (
    <div >
      <header>
        <NavBar />
      </header>
    <h2> Welcome to FABFashion! </h2>
      <img alt="" src={homeImg}/>
      
      
    </div>
  );
}

export default App;
