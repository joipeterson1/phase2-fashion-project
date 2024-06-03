import { NavLink} from "react-router-dom";
import "../NavBar.css"
function NavBar(){
    return(
      <nav>
        <ul>
          <li>
          <NavLink
          to="/"
          className="nav-link" 
        >
          Home
        </NavLink>
          </li>

          <li>
        <NavLink
          to="/style-list"
          className="nav-link"
        >
         Styles

        </NavLink>
        </li>

         <li>
         <NavLink
          to="/style-list/style-form"
          className="nav-link"
        >
         Style Form
        </NavLink>
        </li>
        </ul> 
      </nav> 
    )
}
export default NavBar