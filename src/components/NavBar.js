import { NavLink} from "react-router-dom";
import "../NavBar.css"
function NavBar(){
    return(
        <nav>
        <NavLink
          to="/"
          className="nav-link" 
        >
          Home
        </NavLink>
        <NavLink
          to="/style-list"
          className="nav-link"
        >
         Styles

        </NavLink>
        <NavLink
          to="/style-form"
          className="nav-link"
        >
         Style Form
        </NavLink>
      </nav>
    )
}
export default NavBar